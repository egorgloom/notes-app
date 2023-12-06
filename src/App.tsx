import { useState } from 'react';

import './App.css'

import { useSelector } from 'react-redux';

import { StoreState } from './store';

import NotesForm from './components/NotesForm/NotesForm'
import NoteItem from './components/NoteItem/NoteItem';
import TagItem from './components/TagItem/TagItem';

import { findAllTags } from './functions/functions';
import { INote } from './interface';



function App() {

  const [value, setValue] = useState<string>('');

  const [body, setBody] = useState<string>('');

  const [filters, setFilters] = useState<any[]>([]);

  const { note } = useSelector((state: StoreState) => state);


  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const filteredData = note.filter(item =>
    item.tag.some((elem: string) => filters.length ? filters.includes(elem) : true),
  );

  let arrayTags: any[] = findAllTags(note);


  return (
    <>
      <NotesForm value={value} setValue={setValue} body={body} setBody={setBody} />
      <div className="tagList">
        {arrayTags.map((item: string, index: number) =>
          <TagItem note={item} toggleFilter={toggleFilter} key={index}/>
        )}
      </div>
      <div className="notes">
          {filteredData.map((item: INote) => (
            <NoteItem note={item} key={item.id}/>
          ))}
      </div>
    </>
  )
}

export default App
