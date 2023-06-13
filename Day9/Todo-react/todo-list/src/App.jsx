import React, { useState } from 'react'
import ToDoLists from './Components/ToDoLists';
import './style.css'

const App = () => {
const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

const itemEvent =(event) => {
  setInputList(event.target.value);
};

const listofItems = () => {
  setItems((oldItems)=>{
      return [...oldItems, inputList];
  }
  );
  setInputList(" ");
  };

  return (
    <div className="main-div">
      <div className="center-div"> 
      <div className="head">ToDo List</div> <br />
      
      <input type='text' placeholder='Add tasks' 
        value={inputList}
        onChange={itemEvent}
        style={{padding:8, borderRadius:6, backgroundColor:'azure', fontSize:30}}
        />
      <input type='checkbox' />


      
      <button type='button' 
      onClick={listofItems}
      style={{padding:8, borderRadius:6}}
      className="button"
      >Add</button>
    

      <ol>
        
      {Items.map((item)=>{
        return <ToDoLists text={item}/>
      })}
      </ol>
      </div>
      

    </div>
  )
}

export default App
