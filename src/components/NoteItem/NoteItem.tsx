import { FC } from 'react';

import { useActions } from './../../hooks/useActions';

import { INote } from '../../interface';

import { searchTag } from '../../functions/functions';
import { coloredTag } from './../../functions/functions';

import cl from './NotesItem.module.css'

import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            background: 'rgb(66,45,167)',
            color: ' black',
            padding: '0.75rem 1rem',
            borderRadius: '0.313rem',
            marginBottom: '1rem',
            cursor: 'pointer',
            width: 'calc((100% - 40px) / 3)',
            minHeight: '175px',
        }}>
            <div className={cl.description}>
                <p dangerouslySetInnerHTML={{
                    __html:
                        coloredTagTitle
                }}></p>
                <div className={cl.functional}>
                    <EditIcon 
                    style={{color: 'white'}}
                    onClick={() => updateTask({
                        id,
                        title,
                        isEditing: false,
                        body: note.body,
                    })} />
                    <DeleteIcon
                    style={{color: 'white'}}
                     onClick={() => deleteTask(note.id)} />
                </div>
            </div>
            <p dangerouslySetInnerHTML={{
                __html:
                    coloredTagBody
            }} className={cl.bodyNote}></p>
            <span className={cl.tag}>{tag}</span>
        </Box>
    );
};

export default NodeItem;