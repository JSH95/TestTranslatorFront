import React, { useState } from 'react';

import App from './App';

import axios from 'axios';


function Login() {


  const [isLogin, setLogin] = useState(false);


   

  const onLogin = () => {

   

    const id = document.getElementById('id').value;

    const password = document.getElementById('password').value;

 

    axios({
      url: '/Login',
      params : {
        id: id,
        password: password
      }
    })
    .then(setLogin(true))
  }
  //setLogin(true)

  return(
    isLogin ?
    <App />
  
    :
     
    <div>
      <label>ID :</label><br/>
      <input type='text' placeholder='아이디' id='id' /><br/>
      <label>PASSWORD :</label><br/>
      <input type='password' placeholder='암호' id='password' /><br/><br/>
      <button onClick={onLogin}>로그인</button><button onClick={''}>회원가입</button><button onClick={''}>비밀번호찾기</button>
    </div>
  
  );

  // isLogin이 true라면?

  
}

export default Login;