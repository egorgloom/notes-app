import { FC } from 'react';

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

import { useActions } from './../../hooks/useActions';

import { INote } from '../../interface';

import { searchTag } from '../../functions/functions';
import { coloredTag } from './../../functions/functions';

import cl from './NotesItem.module.css'

interface INodeItem {
    note: INote,
}

const NodeItem: FC<INodeItem> = ({ note }) => {
    let id = note.id;
    let title = note.title

    const { updateTask, deleteTask } = useActions();

    const tag = searchTag(note.title, note.body)

    let coloredTagTitle = coloredTag(note.title);
    let coloredTagBody = coloredTag(note.body);

    return (
        <div className={cl.note}>
            <div className={cl.description}>
                <p dangerouslySetInnerHTML={{
                    __html:
                        coloredTagTitle
                }}></p>
                <div className={cl.functional}>
                    <FaRegEdit onClick={() => updateTask({
                        id,
                        title,
                        isEditing: false,
                        body: note.body,
                    })} />
                    <RiDeleteBin7Line onClick={() => deleteTask(note.id)} />
                </div>
            </div>
            <p dangerouslySetInnerHTML={{
                __html:
                    coloredTagBody
            }}></p>
            <span className={cl.tag}>{tag}</span>
        </div>
    );
};

export default NodeItem;