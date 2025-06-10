import  { useState,useEffect } from "react";
import { TodoList } from "./Todolist";
import AddIcon from '@mui/icons-material/Add';
import { FormControl,Select,MenuItem } from "@mui/material";
import { Task } from "@mui/icons-material";
function Todo(){
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("all");


    const fetchTodos = async () => {
  try {
    const response = await fetch("https://684235efe1347494c31c255d.mockapi.io/todos");
    const data = await response.json();
    setTodoList(data);
  } catch (error) {
    console.error("Failed to fetch todos:", error);
  }
};
useEffect(() => {
  fetchTodos();
}, []);
const handleChange = (event) => {
    setFilter(event.target.value);
  };
    const handleAddTask = () =>{
      console.log(todoList)
     if(task == "") {
   alert("Task should not be empty")
     }
     const newtask = {
    task: task,
    complete: false
  };
      try {
                const payload = JSON.stringify(newtask)
                fetch("https://684235efe1347494c31c255d.mockapi.io/todos",{method:"POST", headers:{'content-type':'application/json'},body:payload})
                .then((response)=>response.json())
                .then((data)=>{console.log(data);
                
            setTask("");     
    fetchTodos();
   }) .catch(error=>console.log(error))     
  } catch (error) {
    console.error("Failed to add task:", error);
  }
};
// useEffect(() => {
//   fetchTodos();
// }, [task]);
     
     
//      {
//         setTodoList((prev) => [...prev, task]);
//         setTask("");
// console.log(todoList)
//      }  
    const filteredTodos = todoList.filter((item) => {
  if (filter === "all") return true;
  if (filter === "active") return item.complete === false;
  if (filter === "complete") return item.complete === true;
});

    
 return(
   <div className="flex justify-center items-center mt-20 " >
    <div>     
        <p className=" text-3xl text-center rela font-mono mb-4 font-extrabold">TODO LIST</p>
       <div > <input className=" bg-white text-2xl border  h-16 border-gray-300 focus:outline-none pl-3 pr-12 rounded  mb-8" value={task} name="todo-list" style={ {height :"58px", width:"550px"}} onChange={(e) => setTask(e.target.value)} />
        <button className="mb-1"  style={{backgroundColor: "green",color: "white",height: "57px", width: "60px",alignItems:"center"}} onClick={handleAddTask}><AddIcon/></button>
        

            
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select sx={{ backgroundColor: 'white' }}
          value={filter}
          onChange={handleChange}
          
        >
          
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"active"}>Active</MenuItem>
          <MenuItem value={"complete"}>Complete</MenuItem>
        </Select>
        
      </FormControl>
      
        
        </div>
         
         <div>{filteredTodos.map((item, index) => (
  <TodoList key={item.id} index={index} id={item.id} item={item} fetchTodos={fetchTodos} />
))}</div>
    </div>
    </div>
 )   
};
export default Todo;