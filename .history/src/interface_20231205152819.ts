export interface INote {
    id: string,
    body: string | number,
    title: string,
    completed: boolean,
    isEditing: boolean,
}