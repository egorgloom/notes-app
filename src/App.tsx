
import { useState } from 'react';
import './App.css'
import NotesForm from './components/NotesForm/NotesForm'

function App() {

  const [value, setValue] = useState<string>('');


  return (
    <div className="todoWrapper">
     <NotesForm value={value} setValue={setValue}/>
    </div>
  )
}

export default App
