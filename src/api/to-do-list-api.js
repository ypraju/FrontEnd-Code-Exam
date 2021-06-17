const basePath = `http://localhost:8080/https://illfatedlavendermemoryallocator--jabez007.repl.co`;
// const basePath = `https://illfatedlavendermemoryallocator--jabez007.repl.co`;

export class ToDoListApi {

    static async getList() {
        try {
            const res = await fetch(`${basePath}/api/todo`, { credentials: 'omit' });
            const list = await res.json();

            return list?.todos;
        } catch(e) {
            console.error(e);
        }
    }

    static async addTask(task) {
        try {
            const res = await fetch(`${basePath}/api/todo`, {
                method: 'POST',
                body: JSON.stringify({ task }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(res.ok) {
                return true;
            }

            const error = new Error(`Adding a new task failed with ${res.status} code`);
            throw error;
        } catch(e) {
            console.error(e);
        }
    }

    static async updateTask(taskId, updatedTask) {
        try {
            const res = await fetch(`${basePath}/api/todo`, {
                method: 'PUT',
                body: JSON.stringify({
                    task: updatedTask,
                    id: taskId
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if(res.ok) {
                return true;
            }

            const error = new Error(`Updating existing task failed with ${res.status} code`);
            throw error;
        } catch(e) {
            console.error(e);
        }
    }

    static async deleteTask(taskId) {
        try {
            const res = await fetch(`${basePath}/api/todo/${taskId}`, {
                method: 'DELETE'
            });

            if(res.ok) {
                return true;
            }
                const error = new Error(`Deleting task failed with ${res.status} code`);
                throw error;
        } catch(e) {
            console.error(e);
        }
    }
}