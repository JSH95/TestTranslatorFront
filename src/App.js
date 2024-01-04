import React, { useState } from 'react';
import axios from 'axios';

function App() {
  
    const [msg, setMsg] = useState(null);

    const onClick = () => {
      const msg = document.getElementById('msg').value;
      const lang = document.getElementById('lang').value;

      axios({     //비동기통신 아이디는 동기로 해야 함
        method : 'get',
        url : '/translator/test',
             params : {
              msg : msg,
              lang : lang
             }
      }).then((response) => {
        setMsg(response.data.message.result.translatedText)
      }).catch(error=>{
        console.log(error);
        throw new Error(error);
      });
    };
    /*자바에서만 받는 태스임, select는 옵션 파티로 같이   <option>----언어선택----</option>
*/
    return (
        <div>           
          <input type='text' placeholder='한글 문장을 입력해 주세요' id='msg'
          /><br/>
          <br/>언어를 선택해 주세요<br/>
         <select id ='lang'>
            <option value='en'>영어</option>
            <option value='ja'>일본어</option>
            
         </select><br/>
         
          <textarea type='text' placeholder='번역후' value={msg} /> <br/>
          <button onClick={onClick}>번역하기</button>
        

      </div>
    );
}

export default App;