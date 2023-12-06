import { FC } from 'react';

import { Checkbox } from '@mui/material';

interface ITagItem {
  note: string,
  toggleFilter: (item: string) => void,
}

const TagItem: FC<ITagItem> = ({ note, toggleFilter }) => {
  return (
    <div className='tagItem'>
      <Checkbox
        onChange={() => toggleFilter(note)}
      />
      <label>{note}</label>
    </div>
  );
};

export default TagItem;