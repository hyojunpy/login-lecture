"use strict"; 

const UserStorage = require("./UserStorage"); //UserStorage를 임포트 

class User {
    constructor(body) {
        this.body = body;
    }

    login() { // 로그인 기능
        const body = this.body;
        const {id, psword}= UserStorage.getUserInfo(body.id);
        if(id){
        if(id === body.id && psword === body.psword) {
            return { success : true};
        }
        return { success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg: "존재하지 않는 아이디입니다."};
    }
}

//밖에서도 사용할 수 있도록 해줌 
module.exports = User;