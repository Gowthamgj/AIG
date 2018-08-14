export class Todo {
    id: number;
    title: string = "";
    todoCompleted: boolean;

    constructor(values: Object = { }) {
        Object.assign(this,values);
    }
}
