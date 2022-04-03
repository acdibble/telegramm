import { createRef, useCallback, useEffect, useState } from 'react';
import Contact from '../components/Contact';
import SearchBox from '../components/SearchBox';
import TopBar from '../components/TopBar';

const contacts = [
  { name: 'spaniel', lastSeen: '1 hour ago' },
  { name: 'teruven', lastSeen: '2 hours ago' },
  { name: 'westie', lastSeen: '3 hours ago' },
];

export default function Home() {
  const [activeContact, setActiveContact] = useState(null);
  const [searchContent, setSearchContent] = useState('');
  const inputRef = createRef();

  const handleEsc = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        if (activeContact === null && inputRef.current !== null) {
          if (document.activeElement === inputRef.current) {
            setSearchContent('');
            inputRef.current.blur();
          } else {
            inputRef.current.focus();
          }
        } else {
          setActiveContact(null);
        }
      }
    },
    [activeContact, inputRef],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [handleEsc]);

  return (
    <div className="min-h-screen bg-stone-800 flex">
      <div className="bg-stone-900 w-[392px] h-screen flex-col border-r-[1px] border-stone-700/50">
        <SearchBox inputRef={inputRef} value={searchContent} setValue={setSearchContent} />
        <div className="pl-[7px] pr-[2px] py-2">
          {contacts.map(({ name }, index) => (
            <Contact
              name={name}
              onClick={() => setActiveContact(index)}
              active={activeContact === index}
              key={name}
              index={index}
            />
          ))}
        </div>
      </div>
      {activeContact !== null && (
        <div className="flex-1">
          <TopBar contact={contacts[activeContact]} />
        </div>
      )}
    </div>
  );
}
