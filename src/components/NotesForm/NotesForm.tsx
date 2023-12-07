import { FC, SetStateAction } from 'react';

import { useActions } from '../../hooks/useActions';

import { searchTag } from '../../functions/functions';

import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';





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
    <Box sx={{
      background: 'rgb(66,45,167)',
      padding: '1rem',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      margin: '2rem auto',
      width: '50%',
    }}>
      <form onSubmit={handleSubmit} >
        <h1>Create note</h1>
        <TextField 
        autoComplete='off'
        id="filled-basic" 
        label="Title" 
        variant="filled" 
        value={value}
        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)}
        />
          <TextField
          variant='filled'
          autoComplete='off'
          multiline
            value={body}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBody(e.target.value)}
            label="Note"
          />
        <Button
          type='submit'>Add note</Button>
      </form>
    </Box>

  );
};

export default NotesForm;