import React, { useState } from "react";
import './App.css';
import Dolist from "./Dolist";
import AddIcon from '@material-ui/icons/Add';

function App() {
  const [input ,setInput]=useState("");

  const [item,setItem]=useState([]);

  const Handlechange=(event)=>{
      setInput(event.target.value);
  }

  const addItem=()=>{
      setItem((preval)=>{
        return [...preval,input]
      });
      setInput("");
  }

  const Delete= (id)=>{
    setItem((prevalue)=>{
      return prevalue.filter((arrelm,index)=>{
        return index!==id
      })
    })
  }

  return (
   <div className="App">
        <h1>Hello</h1>
        <h2>Welcome to My Dolist</h2>
        <div className="list">
          <div className="fields">
          <input className="userInput" type="text" placeholder="enter list item" value={input}  onChange={Handlechange} />
          <button className="userButton" onClick={addItem}><AddIcon fontSize="large" /></button>
          </div>
          
          <ol>
              {
                item.map((value,index)=>{
                  return(
                    <Dolist 
                    key={index}
                    id={index}
                    item={value} 
                    select={Delete}  
                    />
                  )
                })
              }
          </ol>
         
        </div>
    </div>
  );
}

export default App;
