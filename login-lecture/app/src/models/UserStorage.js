const fs = require('fs').promises;

class UserStorage{
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce(function(newUsers, field){
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        return newUsers;
    };

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce(function(newUsers, info){
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        return userInfo;
    };

    static getUsers(isAll, ...fields){
        return fs.readFile('./src/data/users.json').then(function(data){
            return UserStorage.#getUsers(data, isAll, fields);
        }).catch(console.error);
    }

    static getUserInfo(id){
        return fs.readFile('./src/data/users.json').then(function(data){
            return UserStorage.#getUserInfo(data, id);
        }).catch(console.error);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다."
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile('./src/data/users.json', JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;