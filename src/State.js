import React, { useState } from 'react'

export default function State() {
    const [username, setUsername] = useState("")
    const [userpassword, setUserpassword] = useState("")

    let saveName = username;

    let newData = []

    


    const  handleSubmit=() =>
    {
        newData.push(username,userpassword)
        console.log(newData);

    }

  return (
    <div>
      {/* <input type="text"   value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={userpassword} onChange={(e) => setUserpassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

        <h1>welcome {saveName}</h1>
        <h1>{userpassword}</h1> */}

        <h1>SHARMA EVERFRESH SIMROL</h1>
        <input type="text"/>
        <button>Search</button>
    </div>
  )
}
