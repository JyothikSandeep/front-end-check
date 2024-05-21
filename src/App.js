// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect,useState } from 'react';
 function App() {
  // let d=""
  const [d,setD]=useState('')
  const [d1,setD1]=useState('')
  useEffect(()=>{
    axios.get("https://backend-check-r9sg.onrender.com").then((data) => {
      // console.log(data)
      setD(data);
    });
     axios.get("https://backend-check-r9sg.onrender.com/data").then((data) => {
      //  console.log(data);
       setD1(data);
     });
  },[])
  //  d=await axios.get("http://localhost:4000/");
  return (
    <div className="App">
      {/* <p>hi</p> */}
      {console.log(d)}
      <h1>{d.data}</h1>
      <h1>{d1.data}</h1>
      
      
    </div>
  );
}

export default App;
