import Refresh from '../../assets/images/refresh 1.png';
import plus from './Number'
function Buttons({counter, setCounter}) {
    function plus(){
        return (
            setCounter(counter + 3)
        )
    }
    function minus(){
        setCounter(counter - 2)
        if((counter <= 0)){setCounter(0)}
    }
    function refresh(){
        return (
            setCounter(0)
        )
    }
    return(
        <div className="Buttons">
            <div className="btn btn_plus">
                <button onClick={plus}>+</button>
            </div>
            <div className="btn btn_refresh">
                <button onClick={refresh}><img src={Refresh} alt="" /></button>
            </div>
            <div className="btn btn_minus">
                <button onClick={minus}>-</button>
            </div>
        </div>
    )
}
export default Buttons