import { useState } from 'react';
import '../styles/planlvl.scss'

const Levels = (props) =>{
    const [de,setDe]=useState([0])
    const lvls=props.no;
    return (
        <div className="levels_data">
            {lvls.map((lvl)=>(
                <div className='exlist'>
                    <div className="list" onClick={()=>{console.log(de);
                    if(de === lvl.id){
                        setDe(0);
                    }
                    else{
                        setDe(lvl.id);
                    }
                    console.log(de);
                    }}>
                        <h1>{lvl.title}</h1>
                    </div>
                    <div className={`list${lvl.id} ${de === lvl.id && "visible"}`}>
                        <div className="list0">
                            <h3>{lvl.exercise1}</h3>
                        </div>
                        <div className="list0">
                            <h3>{lvl.exercise2}</h3>
                        </div>
                        
                        <div className="list0">
                            <h3>{lvl.exercise3}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Levels;