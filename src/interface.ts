export interface INote {
    id: string,
    body: string | number,
    title: string | number,
    completed: boolean,
    isEditing: boolean,
}