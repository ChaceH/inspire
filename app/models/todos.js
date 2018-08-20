export default class Todo{
    constructor(data){
        this.id = data._id
        this.description = data.description
        this.completed = data.completed
    }
}