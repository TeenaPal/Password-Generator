import React, { useState } from 'react'
import { LR, NM, SM, UP } from './data/password_value';

function App() {
 let [uppercase,setuppercase] = useState(false);
  let [lowercase,setlowercase] = useState(false);
   let [num,setnum] = useState(false);
    let [symbol,setsymbol] = useState(false);
let[passlen,setPasslen] = useState(10)
    let createPassword = ()=>{
let charSet = '';
      if(uppercase||lowercase||num||symbol){
        if (uppercase) charSet+=UP;
        if (lowercase) charSet+=LR;
        if(num) charSet+=NM;
        if(symbol) charSet+=SM
        
console.log(charSet)

      }
      else{
        alert("⚠️Please Select atleast one checkbox")
      }
    }
  return (
    <div className="container-fluid">
     
 <div className="elem_container">
 <div> <h2>Password Generator</h2></div>
  <div className="content_container">
    <div className='btn-container'>
    <input type="text" readOnly />
<button>Copy</button>
  </div>

 

  </div>
   <div className="pass_length">
<label>Password Length</label>
<input type="number"  className='num_length' max={20} min={8} value={passlen} onChange={(e)=>setPasslen(e.target.value)}/>
  </div>
  
  <div className="pass_length">
<label>Include uppercase letters</label>
<input type="checkbox" className='check' checked ={uppercase} onChange={()=>setuppercase(!uppercase)} />
  </div>

  <div className="pass_length">
<label>Include lowercase letters</label>
<input type="checkbox" className='check' checked ={lowercase} onChange={()=>setlowercase(!lowercase)}    />
  </div>

  <div className="pass_length">
<label>Include Symbol</label>
<input type="checkbox" className='check' checked ={symbol} onChange={()=>setsymbol(!symbol)}  />
  </div>

  <div className="pass_length">
<label>Include numbers</label>
<input type="Checkbox" className='check' checked ={num} onChange={()=>setnum(!num)} />
  </div>

 <div className="generate-button">
  <button onClick={createPassword}>Generate Password</button>
   
 </div>
 </div>

</div>
  )
}

export default App
