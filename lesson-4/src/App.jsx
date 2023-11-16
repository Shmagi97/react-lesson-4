import { useState } from 'react'



const App = ()=> {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  function setNamesLast (value,changed) {
   if (changed === "name"){
    setName(value)
   } else if (changed === "lastName"){
    setLastName (value)
   }
  }

 function Clear()  {
  setName("")
  setLastName("")
 }

//  function BottonDisable(){
//   if (name?.length === 0){
//     return true
//   } else if (name?.length > 0){
//     return false
//   }
//  }

  return (
    <div>
    name:  {name}
    <br/>
    lastName:  {lastName}
      <br/>
      <input value={name} type="text" onChange={(event)=> setNamesLast(event.target.value, "name")} />
      <br/>
      <input value={lastName} type="text" onChange={(event)=> setNamesLast(event.target.value, "lastName") } />
      <br/>
      <button disabled={name.length === 0 && lastName.length === 0 ? true : false} onClick={()=> Clear()} >click me</button>
    </div>
  )
}



export default App