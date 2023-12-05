import { FC } from 'react';

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";


import { useActions } from './../../hooks/useActions';

import { INote } from '../../interface';


interface ITodoItem {
    note: INote
}

const TodoItem: FC<ITodoItem> = ({ note }) => {
    const id = note.id;
    const title = note.title

    const { deleteTask } = useActions();

    return (
        <div className="note">
            <div className='description'>
            <p>{note.title}</p>
                <p>{note.body}</p>
            </div>
            <div className='functional'>
                <FaRegEdit />
                <RiDeleteBin7Line onClick={() => deleteTask(note.id)} />
            </div>
        </div>
    );
};

export default TodoItem;