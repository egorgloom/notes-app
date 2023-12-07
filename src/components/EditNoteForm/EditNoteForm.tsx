import { FC, useState } from 'react';

import { searchTag } from '../../functions/functions';

import { useActions } from '../../hooks/useActions';

import { INote } from '../../interface';

import { TextField } from '@mui/material';

import { Button } from '@mui/material';

import cl from './EditNoteForm.module.css'


interface IEditNoteForm {
  note: INote
}

const EditNoteForm: FC<IEditNoteForm> = ({ note }) => {

  const [editTitleValue, setEditTitleValue] = useState<string>(`${note.title}`);

  const [editBodyValue, setEditBodyValue] = useState<string>(`${note.body}`);

  const { updateTask } = useActions();

  const tag = searchTag(editTitleValue, editBodyValue);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editTitleValue.trim().length === 0 && editBodyValue.trim().length === 0) {
      setEditTitleValue(`${note.title}`)
      setEditBodyValue(`${note.body}`)
    } else {
      updateTask({
        id: note.id,
        title: editTitleValue,
        body: editBodyValue,
        isEditing: false,
        tag: tag,
      })
     
    }
  }
  return (
    <form onSubmit={handleSubmit} className={cl.editTaskForm}>
      <h1>Editing note</h1>
      <TextField
        autoComplete='off'
        id="filled-basic"
        label="Title"
        variant="filled"
        value={editTitleValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setEditTitleValue(e.target.value)}
      />
      <TextField
        variant='filled'
        autoComplete='off'
        multiline
        value={editBodyValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditBodyValue(e.target.value)}
        label="Note"
      />
      <Button type='submit'
      >Edit</Button>
    </form>
  );
};

export default EditNoteForm;