import React,{useState} from 'react'
import '../css/Main.css';

export default (props) => {
    const{HoverIn, HoverOut} = props;
    const[chosen, setChosen] = useState();


// display and highlight the subject the user clicks on //
    const test = [' ELA ',' MATH ',' SS ',' SCI '];
    const Subject = ({ active, count, onClick }) => {
        return (
            <div onClick={onClick} className={active ? "subject active text-center" : "subject text-center"} 
                onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 1px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}>
                {count}
            </div>
            );
        };

    return(
        <div className='col-lg-2 ml-5 ml-0'>

                    <div className='col-lg-12 col-md-12 mt-5 sideDiv'>

                        <div className="text-center App">
                            {test.map(t => (<Subject key={t} count={t} active={t === chosen} onClick={() => setChosen(t)} />))}
                        </div>

                        <select className='form-control mt-1' defaultValue='Grade Level' style={{fontWeight:'bold'}}>
                                <option disabled="disabled">Grade Level</option>
                                <option>Grade k</option>
                                <option>Grade 1</option>
                                <option>Grade 2</option>
                                <option>Grade 3</option>
                                <option>Grade 4</option>
                                <option>Grade 5</option>
                                <option>Grade 6</option>
                                <option>Grade 7</option>
                                <option>Grade 8</option>
                                <option>Grade 9</option>
                                <option>Grade 10</option>
                                <option>Grade 11</option>
                                <option>Grade 12</option>
                            </select>
                        <label className="CCRS mt-4">Standard:</label>

                        <section id="textarea" className='textbox' contentEditable="true">
                            <ul className='textlist'>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </section>
                        
                    </div>
                </div>
    );
};