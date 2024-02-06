import { useState } from 'react'
import './App.css'
import { Addentry } from './components/addentry'
import { Displaytitle} from './components/displaytitle'
function App() {
const [table,setTable]=useState([]);
// fetch("http://localhost:3000/displayentry")
// .then(async function(res)
//   {
//     const json= await res.json();
//     setTable(json.result);
//   }
// )

  return (
    <div>
      <Addentry></Addentry>
      {/* <Displaytitle original_table_to_be_passes_as_input={table}></Displaytitle> */}
    </div>
  )
}

export default App
