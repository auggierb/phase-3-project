import { useState } from "react"

function User({user, setUser}){

function addUser()
function handleChange(e){
    setUser(e.target.value)
}
function handleNewUser(e){
    e.preventDefault()
    
    fetch("http://localhost:9292/users",{
        
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({user: user}),
    })
    .then((r)=>(console.log(r.json())))
}


    return(
        <>
        <p>New User</p>
        <form onSubmit={handleNewUser}>
            <input type='text' onChange={handleChange} />
           <input type='submit' />
           </form>
        </>
    )
}
export default User