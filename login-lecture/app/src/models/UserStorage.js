const db = require('../config/db');

class UserStorage{
    static getUserInfo(id){
        return new Promise(function(resolve, reject){
            db.query('SELECT * FROM users WHERE id = ?', [id], function(err, data){
                if (err) reject(err);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise(function(resolve, reject){
            db.query('INSERT INTO users(id, psword, name) VALUES(?, ?, ?);', [userInfo.id, userInfo.psword, userInfo.name], function(err){
                if (err) reject(err);
                resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;