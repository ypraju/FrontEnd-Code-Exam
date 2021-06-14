export class ToDoListApi {

    static async getList() {
        const list = await fetch('https://illfatedlavendermemoryallocator--jabez007.repl.co/api/todo')
            .then(res => res.json())
            .catch(e => console.error(e));
        return list?.todos;

    }

    static async addTask(task) {
        const list = await fetch('https://illfatedlavendermemoryallocator--jabez007.repl.co/api/todo', {
            method: 'POST',
            body: JSON.stringify({ task }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .catch(e => console.error(e));
        console.log('addTask', list);

    }
}

// export const getTodoList = async () => {
//     const list = await fetch('https://illfatedlavendermemoryallocator--jabez007.repl.co/api/todo')
//         .then(res => res.json())
//         .catch(e => console.error(e));
//     return list?.todos;
// }