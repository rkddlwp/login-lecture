"use strict";

const fs = require("fs").promises;

class UserStorage {  //static은 인스턴스를 생성 안해도 클래스에 접근 가능하게 해줌 
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {}); 

    return userInfo
  }

  static getUsers(...fields) {  // 파라미터를 비구조화로 리스트화.
    // const users = this.#users  
    const newUsers = fields.reduce((newUsers, field) => {  //reduce 첫번째 인자로는 초깃값 {} (16번 줄에 지정가능), field 인자에는 리스트에 요소가 차례대로 순회
      if (users.hasOwnProperty(field)) {  //hasOwnProperty는 users에 field 프로퍼티가 있는지 체크  
        newUsers[field] = users[field];  // users가 field 인자를 가지고 있으면 키 , 값을 newUsers에 넣어줌 (비구조화) 
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
    .readFile("./src/databases/users.json")
    .then((data) => {
      return this.#getUserInfo(data, id);
      
    })
    .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true }

  }
}

module.exports = UserStorage;