import React, { FC } from 'react';

import { Button } from '@mui/material';

interface INotesForm {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

const NotesForm: FC<INotesForm> = ({ value, setValue }) => {


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="notesForm">
      <label>
        <input
          className="todo-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <Button style={{
        background: "#dd3bc2",
        color: "#fff",
        border: "none",
        padding: "0.55rem",
        cursor: "pointer"
      }}>Add</Button>
    </form>
  );
};

export default NotesForm;