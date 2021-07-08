"use strict";

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {   //REST API
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
      location.href = "/";
    } else {
      alert(res.msg);
    }
})
 .catch((err) => {
   console.error("로그인 중 에러 발생");
 });
}



loginBtn.addEventListener("click", login);


