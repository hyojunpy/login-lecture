"use strict"; 

const UserStorage = require("./UserStorage"); //UserStorage를 임포트 

class User {
    constructor(body) {
        this.body = body;
    }

    async login() { // 로그인 기능
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);

        if(id){
        if(id === client.id && psword === client.psword) {
            return { success : true};
        }
        return { success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg: "존재하지 않는 아이디입니다."};
    }

    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response; 
        }
        catch(err)
        {
            return {success :false, msg : err};
        }  
    }
}

//밖에서도 사용할 수 있도록 해줌 
module.exports = User;