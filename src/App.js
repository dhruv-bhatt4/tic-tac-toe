// import { useEffect, useRef, useState } from 'react';
import './App.css';
import Boards from './ticToeGame/Boards';

function App() {
//   let color="red";
//   const size=useRef(15)

//   const [loading,toggleLoading]=useState(true)
//   useEffect(()=>{
// color= 'Blue';
//   },[])
  return (
    <div className="App">
      {/* <div>
        {color}
        <h1>{size.toString()}</h1>
        {loading &&(
          <Loader/>
        )}
      </div> */}
     <Boards/>
    </div>
  );
}

export default App;
