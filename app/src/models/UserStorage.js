"use strict"; 

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);        
            const idx = users.id.indexOf(id); //User의 id를 받아와 index를 찾음
            const userkeys = Object.keys(users); //users의 키값들로만 리스트 생성
            const userInfo = userkeys.reduce((newUsers, info) =>{
                newUsers[info] = users[info][idx]; //위에서 찾은 index로 정보를 넣음
                return newUsers;
            }, {});
            
            return userInfo;
    }
   
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
        } 
        return newUsers;
    }, {});
    return newUsers;
}

static getUserInfo(id){
    return  fs
    .readFile("./src/databases/users.json")
    .then((data) => {
        return this.#getUserInfo(data, id);
    })
    .catch(console.error) ;
}

static save(userInfo) {
    // const users = this.#users;        
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return{ success:true};
}
}

module.exports = UserStorage;

//MVC의 모델 만들기 부분 다시 보기