import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note)
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        })
    }
    function expand(){
        setExpanded(true)
    }
    
    return(
        <div>
            <form className="create-note">
                {isExpanded  && <input name="title" onChange={handleChange} value={note.title} placeholder="Title"  /> }
                <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>
               <Zoom in={isExpanded}>
                <Fab onClick={submitNote} size="small" color="secondary" aria-label="add">
                    <AddRoundedIcon />
                </Fab>
               </Zoom>
                
            </form>
        </div>
    )
}

export default CreateArea;