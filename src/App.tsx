import { useState } from 'react';

import './App.css'

import { useSelector } from 'react-redux';

import { StoreState } from './store';

import NotesForm from './components/NotesForm/NotesForm'
import NoteItem from './components/NoteItem/NoteItem';
import TagItem from './components/TagItem/TagItem';
import EditNoteForm from './components/EditNoteForm/EditNoteForm';

import { findAllTags } from './functions/functions';

import { INote } from './interface';

import { ThemeProvider } from '@emotion/react';

import { theme } from './theme/theme';


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

  function getRenderNotes(filters: Array<string>, array: Array<INote>) {
    if (filters.length == 0) {
      return array
    }

    return array.filter((item: INote) =>
      item.tag.some((elem: string) => filters.length ? filters.includes(elem) : true)
    )
  }


  const filteredData: INote[] = getRenderNotes(filters, note)

  let arrayTags: Array<string> = findAllTags(note);

  return (
    <>
    <ThemeProvider theme={theme}>
    <NotesForm value={value} setValue={setValue} body={body} setBody={setBody} />
      <div className="tagList">
        {arrayTags.map((item: string, index: number) =>
          <TagItem note={item} toggleFilter={toggleFilter} key={index} />
        )}
      </div>
      <div className="notes">
        {filteredData.map((item: INote) => (
          item.isEditing ?
            <EditNoteForm note={item} key={item.id} />
            :
            <NoteItem note={item} key={item.id} />
        ))}
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
