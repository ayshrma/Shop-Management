import React, { useState } from 'react'

export default function Password() {
  let age = Math.random()*1000

    const [length, setLength] = useState(9)
    const [numberAllowed, setNumberallowed] = useState(false)
    const [password, SetPassword] = useState("")
    const [depend, setDepend] = useState(age)

    const   show=()=>
    {
      window.location.reload(false);    }
    let name = "Ayush"
  return (
    <div style={{textAlign: 'center',marginTop: '40px', color: 'orange'}}>
      <h1 style={{textAlign: 'center'}}>Password Generator</h1>
      <input type="text"style={{marginTop: '40px', border: 'none'}} name="" id="" value={age}/>
      <button style={{marginLeft: '4vh', border:'none'}} onClick={show}>Regenerate</button>
      <button style={{marginLeft: '4vh', border:'none'}}>Get Password</button>
      <br/>
      <input type="range" min={5} max={20} value={length} style={{marginTop:'4vh'}} onChange={(e)=> {setLength(e.target.value)}} name="" id="main"/>
      <label for="main" style={{marginRight: ' 4vh'}} > Digits {length}</label>
      <label for="first">Number</label>
      <input type="checkbox" name="" id="first" onChange={() =>{setNumberallowed((prev) => ! prev)}}/>
      <label for="second">Character</label>
      <input type="checkbox" name="" id="second" onChange={()=> { setDepend((prev) => !prev)}}/>
    </div>
  )
}
