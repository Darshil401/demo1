import './App.css';
import {useState} from 'react'
import Calc from './components/Calc';

function App() {
  // const [name,setname] = useState('CDMI');
  // const [a,seta] = useState(0);
  // const [b,setb] = useState(0);
  // const [ans,setans] = useState(0);

  // const answer = () => {
  //   setans(parseInt(a)+parseInt(b))
  // }

  return (
    <>
      {/* <h1>{name}</h1>
      <input type="button" value="Click" onClick={()=>setname('Darshil')} />
      <input type="text" value={a} />
      <input type="text" placeholder='Enter A ' onChange={(e)=>{seta(e.target.value)}} />
      <input type="text" placeholder='Enter B ' onChange={(e)=>{setb(e.target.value)}} />
      <input type="button" onClick={answer} value="click"/>
      <input type="text" placeholder='sum' value={ans} />
       */}
      <Calc/>

    </>
  );
}

export default App;
