import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from './component/button'

function App() {
  let [txt,settxt]= useState("");
  let [list,setlist]=useState([])
  let deleteitem=(id) => {
    let updateitems=list.filter((elem,ind)=>{ return ind != id;})
    setlist(updateitems)
  } 
  let additem = () => {
    let newval=prompt("enter value")
    console.log(newval)
    newval.push(txt) ;
    setlist([...newval])

  }
  let removeall = () => {
    setlist([]);
  }
  // let list = [];
  // let txt = '';
  function add (){
    if (!txt){
      alert("text is required")
    }
    list.push(txt);
    console.log(list)
    setlist([...list]);
  }
  return (
    <div className="App">
      <header className="App-header">
    <h1 className="head">Todo app</h1>
    <h1>-------------------------------------</h1>
    <input onChange={(e)=> {
      txt=e.target.value;
      settxt(e.target.value);
    console.log(txt)
    }} /> <br></br>
<button  onClick={add}>ADD</button><br></br>
<button onClick={removeall}>deleteall</button>


     
<ul  style={{color:"lightcyan",
}}>
  {list.map((e,i)=>{return <li key={i}>{e}
  <button onClick={()=>deleteitem (i)}>delete</button>    
  <button onClick={additem}>edit item</button>

  </li>})}

   </ul>

   <h6>copywrite muhammad mubeen</h6>
      </header>
    </div>
  );
}

export default App;
