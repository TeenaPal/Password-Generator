import React from 'react'

function App() {
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
<input type="number"  className='num_length'/>
  </div>
  
  <div className="pass_length">
<label>Include uppercase letters</label>
<input type="checkbox" className='check' />
  </div>

  <div className="pass_length">
<label>Include lowercase letters</label>
<input type="checkbox" className='check'   />
  </div>

  <div className="pass_length">
<label>Include Symbol</label>
<input type="checkbox" className='check'  />
  </div>

  <div className="pass_length">
<label>Include numbers</label>
<input type="Checkbox" className='check'  />
  </div>

 <div className="generate-button">
  <button>Generate Password</button>
 </div>
 </div>

</div>
  )
}

export default App
