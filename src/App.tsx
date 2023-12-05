import { useState } from 'react';

import './App.css'

import { useSelector } from 'react-redux';

import { StoreState } from './store';

import { INote } from './interface';

import NotesForm from './components/NotesForm/NotesForm'
import NoteItem from './components/NoteItem/NoteItem';
import TagItem from './components/TagItem/TagItem';



function App() {

  const [value, setValue] = useState<string>('');

  const [body, setBody] = useState<string>('');
  const notesList = useSelector((state: StoreState) => state);

  return (
    <>
      <NotesForm value={value} setValue={setValue} body={body} setBody={setBody} />
      <div className="tagList">
      {notesList.note.map((note: INote) =>
      <TagItem note={note}/>
      )}
      </div>
      <div className="notes">
        {notesList.note.map((note: INote) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </>
  )
}

export default App
