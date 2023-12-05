import { FC } from 'react';

import { INote } from '../../interface';

import { Checkbox } from '@mui/material';

interface ITagItem {
    note: INote
}

const TagItem: FC<ITagItem> = ({note}) => {
  return (
    <div key={note.id} className='tagItem'>
    <Checkbox/>
    <label>{note.tag}</label>
  </div>
  );
};

export default TagItem;