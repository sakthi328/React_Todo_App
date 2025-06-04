import  { useState } from "react";
import { TodoList } from "./Todolist";
import AddIcon from '@mui/icons-material/Add';
function Todo(){
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");
    const handleAddTask = () =>{
      console.log(todoList)
     if(task == "") {
   alert("Task should not be empty")
     }else{
        setTodoList((prev) => [...prev, task]);
        setTask("");
console.log(todoList)
     }  
    } 
 return(
   <div className="flex justify-center items-center mt-20 " >
    <div className="bg-white  pb-6 pt-6 px-4 rounded shadow-md" style={{ height: "450px", width:"400px" }}>     
        <p className=" text-3xl text-center rela font-mono mb-4 font-extrabold">TODO LIST</p>
       <div className="relative"> <input className=" bg-gray-300 border border-gray-300 focus:outline-none pl-3 pr-12 rounded" value={task} name="todo-list" style={ {height :"40px", width:"340px"}} onChange={(e) => setTask(e.target.value)} />
        <button className=" absolute right-6" style={{backgroundColor: "green",color: "white",height: "40px", width: "55px",alignItems:"center"}} onClick={handleAddTask}><AddIcon/></button></div>
         <div>{todoList.map((item,index) => (
          <TodoList key={index} index={index} item={item} setTodoList={setTodoList} />
        ))}
        </div>
    </div>
    </div>
 )   
};
export default Todo;