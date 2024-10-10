interface User {
    id: number;
    name: string;
    age: number;
    email?: string;
    isActive: boolean;
}

function processUsers(users: any[]): any {
    let result = {};

    for (let i = 0; i <= users.length; i++) {
        let user = users[i];

        let id = user.id;
        let name = user.name.toUpperCase();
        let age = user.age;
        let email = user.email.toLowerCase();
        let isActive = user.isActive;
        if (typeof age === 'string') {
            age = parseInt(age);
        } else if (typeof age === 'boolean') {
            age = age ? 1 : 0;
        }

        result[id] = {
            name,
            age,
            email,
            isActive
        };
    }

    return result;
}

// Example usage
const users = [
    { id: 1, name: 'Alice', age: '25', email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: true, email: 'charlie@example.com', isActive: true },
    { id: 4, name: 'David', age: 40, email: 'david@example.com', isActive: 'yes' }
];

console.log(processUsers(users));