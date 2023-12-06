import { FC } from 'react';

import { useActions } from '../../hooks/useActions';

import { searchTag } from '../../functions/functions';

import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

import cl from './NotesForm.module.css'




interface INotesForm {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  body: string,
  setBody: React.Dispatch<React.SetStateAction<string>>,
}

const NotesForm: FC<INotesForm> = ({ value, setValue, body, setBody }) => {

  const { addTask } = useActions();

  const tag = searchTag(value, body)

  const checkTask = () => {
    if (value.trim().length === 0) {
      alert('add note')
      setValue('')
    } else {
      addTask({
        body: body,
        title: value,
        id: '',
        isEditing: false,
        tag: tag,
      })
      setValue('');
      setBody('');
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    checkTask()
  }

  return (
    <form onSubmit={handleSubmit} className={cl.notesForm}>
      <h1>Создать заметку</h1>
      <label>
        <Input
          className="noteInput"
          style={{ color: 'white' }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Title'
        />
      </label>
      <label>
        <TextareaAutosize
          className="noteInput"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Body'
        />
      </label>
      <Button
        style={{
          background: "#dd3bc2",
          color: "#fff",
          border: "none",
          padding: "0.55rem",
          cursor: "pointer"
        }}
        type='submit'>Add</Button>
    </form>
  );
};

export default NotesForm;