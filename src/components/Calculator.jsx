import React from 'react'

const Calculator = () => {

    let display = document.querySelector("#display")
    function sinf() {
        display.value = Math.sin(display.value)
    }
    function cosf() {
        display.value = Math.cos(display.value)
    }
    function tanf() {
        display.value = Math.tan(display.value)
    }
    function sqrf() {
        display.value = Math.sqrt(display.value)
    }

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" id="display" placeholder="0" />
            </div>
            <div className="buttons">
                <div className="row row1">
                    <button onClick={()=>document.querySelector('#display').value=''}>AC</button>
                    <button onClick={()=>document.querySelector('#display').value=document.querySelector('#display').value.toString().slice(0,-1)}>DE</button>
                    <button onClick={()=>document.querySelector('#display').value+='.'}>.</button>
                    <button onClick={()=>document.querySelector('#display').value+='/'}>/</button>
                </div>
                <div className="row row2">
                    <button onClick={()=>sinf()}>Sin</button>
                    <button onClick={()=>cosf()}>Cos</button>
                    <button onClick={()=>tanf()}>Tan</button>
                    <button onClick={()=>sqrf()}>&radic;</button>
                </div>
                <div className="row row3">
                    <button onClick={()=>document.querySelector('#display').value+='9'}>9</button>
                    <button onClick={()=>document.querySelector('#display').value+='8'}>8</button>
                    <button onClick={()=>document.querySelector('#display').value+='7'}>7</button>
                    <button onClick={()=>document.querySelector('#display').value+='*'}>*</button>
                </div>
                <div className="row row4">
                    <button onClick={()=>document.querySelector('#display').value+='6'}>6</button>
                    <button onClick={()=>document.querySelector('#display').value+='5'}>5</button>
                    <button onClick={()=>document.querySelector('#display').value+='4'}>4</button>
                    <button onClick={()=>document.querySelector('#display').value+='+'}>+</button>
                </div>
                <div className="row row5">
                    <button onClick={()=>document.querySelector('#display').value+='3'}>3</button>
                    <button onClick={()=>document.querySelector('#display').value+='2'}>2</button>
                    <button onClick={()=>document.querySelector('#display').value+='1'}>1</button>
                    <button onClick={()=>document.querySelector('#display').value+='-'}>-</button>
                </div>
                <div className="row row6">
                    <button onClick={()=>document.querySelector('#display').value+='0'}>0</button>
                    <button onClick={()=>document.querySelector('#display').value+='00'}>00</button>
                    <button id="equal" onClick={()=>document.querySelector('#display').value=eval(document.querySelector('#display').value)}>=</button>

                </div>
            </div>
        </div>
    )
}

export default Calculator