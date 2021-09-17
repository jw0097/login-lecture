const UserStorage = require('./UserStorage');

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        try {
            const body = this.body;
            const { id, psword } = await UserStorage.getUserInfo(body.id);
    
            if (id){
                if (id === body.id && psword === body.psword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
            else return { success: false, msg: "존재하지 않는 아이디입니다."};
        } catch (err){
            return { success: false, msg: err }
        }
        
    }

    async register(){
        const body = this.body;
        try {
            const response = await UserStorage.save(body);
            return response;
        } catch (err){
            return { success: false, msg: err }
        }
    }
}

module.exports = User;