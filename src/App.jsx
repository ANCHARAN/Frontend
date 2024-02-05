import { useState } from 'react'
import './App.css'
import { Addtitle } from './components/addtitle'
import { Displaytitle} from './components/displaytitle'
function App() {
const [table,setTable]=useState([]);
fetch("https://demo-app-v4ik.onrender.com/displaytitle")
.then(async function(res)
  {
    const json= await res.json();
    setTable(json.result);
  }
)

  return (
    <div>
      <Addtitle></Addtitle>
      <Displaytitle original_table_to_be_passes_as_input={table}></Displaytitle>
    </div>
  )
}

export default App
