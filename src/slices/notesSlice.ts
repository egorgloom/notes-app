import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { searchTag } from "../functions/functions";

import { INote } from './../interface';


const initialState: INote[] = []

export const notesSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, { payload: note }: PayloadAction<INote>) => {
            const newTask = {
                id: uuidv4(),
                body: note.body,
                title: note.title,
                isEditing: false,
                tag: searchTag(note.title, note.body)
            }
            state.push(newTask)
        },
        deleteTask: (state, { payload: note }: PayloadAction<string | undefined>) => {
            const index = state.findIndex((elem) => elem.id === note);
            state.splice(index, 1);
        },
        updateTask: (state, { payload: note }: PayloadAction<INote>) => {
            state.map(elem => {
                if (elem.id === note.id) {
                    elem.isEditing = !elem.isEditing;
                    elem.title = note.title;
                    elem.body = note.body;
                    elem.tag = note.tag
                }
                return elem
            })
        }
        // updateFilters: (state, {payload: filter}: PayloadAction<any>) => {
        //     state.filter((elem) => elem.tag !== filter)
        // }
    }
})

export const { actions, reducer } = notesSlice;