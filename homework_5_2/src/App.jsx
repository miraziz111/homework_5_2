
import './App.css';
import { useState } from 'react';
import { Table } from './components/Table';
import { Form } from './components/Form';

let Data  = [
  {
    id : 1,
    name : "Aziz",
    address : "Toshkent",
    email : "azizbek@gamil.com",
    tel :+998936723643,
  },
  {
    id : 2,
    name : "Nodir",
    address : "Qashqadaryo",
    email : "nodir@gamil.com",
    tel :+998936723221,
  },
  {
    id : 3,
    name : "Bahrom",
    address : "Andijon",
    email : "Bahrom@gamil.com",
    tel :+998936723257,
  },
  {
    id : 4,
    name : "Muxriddin",
    address : "Namangan",
    email : "Bekjon@gamil.com",
    tel :+998936726627,
  },
  {
    id : 5,
    name : "Ali",
    address : "Samarqand",
    email : "shermat@gamil.com",
    tel :+998936723244,
  },
]
function App() {
let[todoList, UseStateData] = useState(Data)

let removeUser=(index)=>{
  const delUser = todoList.filter((user,i)=>i!== index);
  UseStateData(delUser); 
}
  return (
    
<>
<H1>kcvhmanskh</H1>
<Form todoList={todoList} setData={UseStateData}/>
<Table todoList ={todoList} removeUser={removeUser}/>
</>

  );
}

export default App;
