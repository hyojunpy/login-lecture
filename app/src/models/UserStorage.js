"use strict"; 

class UserStorage {
    static #users = {
    id : ["woorimIT", "나개발", "김팅장"],
    psword : ["1234", "1234", "123456"],
    name : ["우리밋", "나개발", "김팀장"],
};
static getUsers(...fields) {
    const users = this.#users; 
    const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        } 
        return newUsers;
    }, {});
    return newUsers;
}

static getUserInfo(id){
    const users = this.#users; 
    const idx = users.id.indexOf(id); //User의 id를 받아와 index를 찾음
    const userkeys = Object.keys(users); //users의 키값들로만 리스트 생성
    const userInfo = userkeys.reduce((newUsers, info) =>{
        newUsers[info] = users[info][idx]; //위에서 찾은 index로 정보를 넣음
        return newUsers;
    }, {});

    return userInfo;
}
}

module.exports = UserStorage;

//MVC의 모델 만들기 부분 다시 보기