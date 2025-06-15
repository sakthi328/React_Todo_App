import React, { useState } from "react";
// import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const TodoList = ({ item, id, fetchTodos }) => { 
    
    
    // const container_style = {
    //     width: "345px",
    //     padding: "5px 10px",
    //     textAlign: "start",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     backgroundColor:"white",
    //     marginTop:"10px",
    //     marginBottom:"10px"
    
    
        
    // };

    


const handleToggleComplete = () => {
try {
      const paylod = JSON.stringify({complete: !item.complete});
fetch(`https://684235efe1347494c31c255d.mockapi.io/todos/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: paylod,
      })
      .then((response) => response.json())
        .then(() => {
          fetchTodos();
        }) .catch((error) => console.log(error));
    }  catch (error) {
      console.log(error);
    }


  };






    
    const handleDelete = async () => {
    try {
      await fetch(`https://684235efe1347494c31c255d.mockapi.io/todos/${id}`, {
        method: "DELETE",
      });
      fetchTodos()
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };
    
  return ( 
    
    <div className="flex ">
      <div className="flex justify-between items-center bg-white p-2 my-1 m  ml-10 text-lg first-letter:rounded shadow w-96">
        <p 
          className={item.complete ? "line-through text-gray-400 italic text-2xl" : "text-gray-900 text-2xl"}
        >
          {item.task}
        </p>
      </div>
      <div className="flex items-center ">
        <button className="bg-green-400 text-white p-2 my-1  text-2xl hover:bg-red-800" onClick={handleToggleComplete}>
          {item.complete ? <CancelIcon />  : <CheckIcon /> }
        </button>
        <button className="bg-red-400 text-white p-2 my-1  text-lg  hover:bg-red-800" onClick={handleDelete}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
};