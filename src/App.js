import {moviesData} from './data'
import './App.css';
import { useState } from 'react';
import Movielist from './components/Movielist';
import Addnewmovie from './components/Addnewmovie';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(moviesData)
  const HandleDel=(ID)=>setData(data.filter(el=>el.id!==ID))
  const handleadd=(newmovie)=>setData([...data,newmovie])
  const handleEdit=(editedmovie)=>setData(data.map(el=>el.id===editedmovie.id?editedmovie:el))
  // console.log(moviesData)

  return (
    <div className="App">
      <Search />
       <Addnewmovie  handleadd={ handleadd}/>
      <Movielist list={data}  HandleDel={HandleDel} handleEdit={handleEdit} />
     
     
    </div>
  );
}

export default App;
