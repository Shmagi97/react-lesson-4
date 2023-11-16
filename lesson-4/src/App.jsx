import { useEffect, useState } from 'react'



const App = ()=> {
//   const [name, setName] = useState("")
//   const [lastName, setLastName] = useState("")

//   function setNamesLast (value,changed) {
//    if (changed === "name"){
//     setName(value)
//    } else if (changed === "lastName"){
//     setLastName (value)
//    }
//   }

//  function Clear()  {
//   setName("")
//   setLastName("")
//  }

//  function BottonDisable(){
//   if (name?.length === 0){
//     return true
//   } else if (name?.length > 0){
//     return false
//   }
//  }

//   return (
//     <div>
//     name:  {name}
//     <br/>
//     lastName:  {lastName}
//       <br/>
//       <input value={name} type="text" onChange={(event)=> setNamesLast(event.target.value, "name")} />
//       <br/>
//       <input value={lastName} type="text" onChange={(event)=> setNamesLast(event.target.value, "lastName") } />
//       <br/>
//       <button disabled={name.length === 0 && lastName.length === 0 ? true : false} onClick={()=> Clear()} >click me</button>
//     </div>
//   )

// const [count, setCount] = useState(0)
// const [count2, setCount2] = useState(0)

// const [data, setData] = useState([])
// const [number, setNumber] = useState("10")

// async function FetchData () {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
//      const list = await response.json();
//      setData(list);
//     //  console.log(list)
//       // .then(json => console.log(json))
// }

// useEffect (()=> {
//  FetchData()
// },[number])

// return (
//   <div>
//     {console.log(data)}
//     {data.title}
//     <br/>
//     <input type="text" onChange={(e)=> setNumber(e.target.value) }/>
 
//    {/* {data.map(data =>(
//     <p>{data.title}</p>
//    ))} */}

//     {/* count : {count}
//     <br/>
//    <button onClick={()=> setCount(count+1)}>click me</button> */}
  
//   </div>
  
  
// )

const [number, setNumber] = useState("")
const [data, setdata] = useState({})

async function fetchData (){
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
  const list = await response.json()
  setdata(list)
}


// useEffect (()=>{
//   fetchData()
//   console.log(data)
// },[number])



return (
  <div>
   number : {number}
   <br/>
   title : {data.title}
   <br/>
  <input type="number" onChange={(event) => setNumber(event.target.value)}/>
  <button onClick={()=>fetchData()}>Search</button>
  {console.log(data)}
  </div>
  
)

}





export default App