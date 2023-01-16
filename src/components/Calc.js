import { useState } from "react";
import './calc.css';
var d,fv,sv,av=0,sign;

function Calc() {
    const [display,setdisplay] = useState('');
    
    const dar= (h) =>{
        fv=display;
        sign=h;
        {setdisplay('')}
    }
    const cl = () =>{
        // {setdisplay(Math.floor(display/10))};
        setdisplay(display.slice(0,display.length-1))
    }

    const ans= () => {
        sv=display;
        if(sign=='+'){
            av=(parseInt(fv)+parseInt(sv));
        }
        if(sign=='-'){
            av=(parseInt(fv)-parseInt(sv));
        }
        if(sign=='x'){
            av=(parseInt(fv)*parseInt(sv));
        }
        if(sign=='/'){
            av=(parseInt(fv)/parseInt(sv));
        }
        if(sign=='%'){
            av=(parseInt(fv)%parseInt(sv));
        }
        {setdisplay(av)}
    }
    
    return ( 
        <>
        <div className="calc-box">
            <input type="text" id="screen" value={display} name="screen" readonly /><br/><br/>

            <input type="button" className="btns" name="btn" value="AC" onClick={(clr)=>{setdisplay('')}} />
			<input type="button" className="btns" name="btn" value="<-" onClick={cl} />
			<input type="button" className="btns" name="btn" value="%" onClick={(dd)=>{dar('%')}} />
			<input type="button" className="btns" name="btn" value="/" onClick={(dd)=>{dar('/')}} /><br/>

			<input type="button" className="btns" name="btn" value="7" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="8" onClick={(e)=>{setdisplay(display + e.target.value)}}/>
			<input type="button" className="btns" name="btn" value="9" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="x" onClick={(dd)=>{dar('x')}} /><br/>

			<input type="button" className="btns" name="btn" value="4" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="5" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="6" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="-" onClick={(dd)=>{dar('-')}} /><br/>
			
			<input type="button" className="btns" name="btn" value="1" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="2" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="3" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="+" onClick={(dd)=>{dar('+')}}/><br/>

			<input type="button" className="btns" name="btn" value="0" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="00" onClick={(e)=>{setdisplay(display + e.target.value)}} />
			<input type="button" className="btns" name="btn" value="." />
			<input type="button" className="btns" name="btn" value="=" onClick={ans}></input>
        </div>
        </>
     );
}

export default Calc;