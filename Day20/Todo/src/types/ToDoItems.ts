export default interface TodoItem{
    id: number;
    value: string;
    status: boolean;
    completed: boolean;
    editing: boolean;
    editedValue: string;
}