import { useState } from 'react';
import Buttons from './Buttons';
import Number from './Number';
function MainContent(){
    const [counter, setCounter] = useState(0) 
    return (
        <div className="MainContent">
            <Number counter = {counter}/>
            <Buttons counter = {counter} setCounter = {setCounter}/>
        </div>
    )
}
export default MainContent