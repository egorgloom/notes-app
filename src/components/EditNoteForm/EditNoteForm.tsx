import { FC, useState } from 'react';
import { searchTag } from '../../functions/functions';
import { useActions } from '../../hooks/useActions';
import { INote } from '../../interface';

import { Input } from '@mui/material';

import { TextareaAutosize } from '@mui/base';

import { Button } from '@mui/material';



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
      // console.log('a', searchTag(editTitleValue, editBodyValue))
    }
  }
  return (
    <form onSubmit={handleSubmit} className="editTaskForm">
      <h1>Редактирование заметки</h1>
      <label>
        <Input
          style={{ color: 'white' }}
          className="note-input"
          value={editTitleValue}
          onChange={(e) => setEditTitleValue(e.target.value)}
        />
      </label>
      <label>
        <TextareaAutosize
          className="note-input"
          value={editBodyValue}
          onChange={(e) => setEditBodyValue(e.target.value)}
        />
      </label>
      <Button type='submit' style={{
        background: "#dd3bc2",
        color: "#fff",
        border: "none",
        padding: "0.55rem",
        cursor: "pointer"
      }} >Add</Button>
    </form>
  );
};

export default EditNoteForm;