"use strict";

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("#button");

const login = () => {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (!psword.value) return alert("비밀번호가 일치하지 않습니다.");

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
      if (res.err) return alert(res.err);
      alert(res.msg);
    }
})
 .catch((err) => {
   console.error("로그인 중 에러 발생");
 });
}



loginBtn.addEventListener("click", login);


