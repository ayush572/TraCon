import '../styles/planlvl.scss'
const Levels = (props) =>{
    const lvls=props.no;
    return (
        <div className="levels_data">
            {lvls.map((lvl)=>(
                <div className='exlist'>
                    <div className="list">
                        <h1>{lvl.title}</h1>
                    </div>
                    <div className="list">
                        <h3>{lvl.exercise1}</h3>
                    </div>
                    <div className="list">
                        <h3>{lvl.exercise2}</h3>
                    </div>
                    
                    <div className="list">
                        <h3>{lvl.exercise3}</h3>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default Levels;