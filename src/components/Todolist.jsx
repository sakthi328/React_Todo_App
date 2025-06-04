import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const TodoList = (props) => { 
    const { item, index, setTodoList } = props;
    const [isEdit, setIsEdit] = useState(false);
    const container_style = {
        width: "345px",
        padding: "5px 10px",
        textAlign: "start",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:"rgb(209,213,219)",
        marginTop:"10px",
        marginBottom:"10px"
    
    
        
    };

    const handleEditChange = (e) => {
        const { value } = e.target;
        setTodoList(prev => (prev.map((list, Index) => index === Index ? value : list)));
    };
    const handleDelete = () =>{
        setTodoList(prev=>(prev.filter((list,Index)=>Index !==index)))
    }
    return(
        <div style={container_style}>
            {isEdit ? <input className=" bg-[rgb(209,213,219)] focus:outline-none " type="text" onChange={handleEditChange} value={item} /> : <p>{item}</p>}
            <div>
                <button  onClick={() => setIsEdit(!isEdit)}>< EditIcon /></button>{" "}
                <button  onClick={handleDelete}><DeleteOutlineOutlinedIcon /></button>
            </div>
        </div>
    );
};