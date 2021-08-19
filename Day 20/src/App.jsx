import React ,{useState} from "react";
import "./App.css";
import Card from "./components/Card";
const Todo=({todo,todos,setTodos,index})=>{
    return (<div>
        <h2>{todo}</h2>
        <button onClick={()=>
        {
            console.log("Deleted",todo);
           const newTodo=todos.filter((el,i)=> i!= index);
           setTodos(newTodo);
        }}>Delete</button>
    </div>
    );
};
function App(props){
    const [value,setValue]=useState("");
    const [todos,setTodos]=useState([]);
  return(
      <div className="App">
      <input type="text" onChange={(e)=>{
          setValue(e.target.value);
      }}
      value={value}
      />
      <button onClick={()=>
      {
          setTodos([...todos,value]);
          setValue("");
      }}>
              Add
          </button>
      {todos.map((todo,index)=>(
          <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} index={index}/>
      ))}
      </div>
  )
}
export default App;