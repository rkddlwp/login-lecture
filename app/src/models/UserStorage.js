"use strict";

const db = require("../config/db");

class UserStorage {  //static은 인스턴스를 생성 안해도 클래스에 접근 가능하게 해줌 

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {     // 콜백함수 안에서 return 하면 그 함수에 할당되는 것이므로 Promise를 사용해줌
      const query = "SELECT * FROM users WHERE id = ?"
      db.query(query, [id], (err, data) => {   // ?에 id가 들어간다 (보안상에 이유라고 알아두면 됨) 
        if (err) reject(`{err}`); // err는 오브젝트라  문자열로 던져준다. 실제 서비스 구현에서는 이렇게 하면 안됨.
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {     // 콜백함수 안에서 return 하면 그 함수에 할당되는 것이므로 Promise를 사용해줌
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err, data) => {   // ?에 id가 들어간다 (보안상에 이유라고 알아두면 됨) 
        if (err) reject(`${err}`); // err는 오브젝트라  문자열로 던져준다. 실제 서비스 구현에서는 이렇게 하면 안됨.
        resolve({ success: true });
      });
    });
    }
  }

module.exports = UserStorage;