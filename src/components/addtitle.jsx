import { useState } from "react";
export function Addtitle(props)
{
    const [title,setTitle]=useState("Hello World");
    return <div>
        Title:- <input placeholder="Enter your title"
        onChange={function(event)
            {
             const newTitle=event.target.value;
             setTitle(newTitle);       
            }
        }></input>
        <button onClick={submitform}>Submit</button>
        
    </div>

    function submitform()
    {
        fetch("https://demo-app-v4ik.onrender.com/addtitle",
        {
            method:"POST",
            body:JSON.stringify({
                title:title}),
            headers:{
                "Content-Type":"application/json"
            },})
            .then(async function(res)
            {
                const json=await res.json();
                alert("Title has been added");
            })
    }
}