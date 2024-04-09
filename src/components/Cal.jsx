import React, { useState } from 'react';
import './style.css';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const displayItem = (item) => {
        setDisplay(prevDisplay => prevDisplay + item);
    };

    const ac = () => {
        setDisplay('');
    };

    const del = () => {
        setDisplay(prevDisplay => prevDisplay.slice(0, -1));
    };

    const equal = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="display">
                        <input className="inputDisplay" type="text" value={display} readOnly />
                    </div>
                    <div className="keys">
                        <input type="button" value="AC" onClick={ac} />
                        <input type="button" value="DE" onClick={del} />
                        <input type="button" value="." onClick={() => displayItem('.')} />
                        <input type="button" value="/" className="operator" onClick={() => displayItem('/')} />
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => displayItem('7')} />
                        <input type="button" value="8" onClick={() => displayItem('8')} />
                        <input type="button" value="9" onClick={() => displayItem('9')} />
                        <input type="button" value="*" className="operator" onClick={() => displayItem('*')} />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={() => displayItem('4')} />
                        <input type="button" value="5" onClick={() => displayItem('5')} />
                        <input type="button" value="6" onClick={() => displayItem('6')} />
                        <input type="button" value="-" className="operator" onClick={() => displayItem('-')} />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={() => displayItem('1')} />
                        <input type="button" value="2" onClick={() => displayItem('2')} />
                        <input type="button" value="3" onClick={() => displayItem('3')} />
                        <input type="button" value="+" className="operator" onClick={() => displayItem('+')} />
                    </div>
                    <div>
                        <input type="button" value="00" onClick={() => displayItem('00')} />
                        <input type="button" value="0" onClick={() => displayItem('0')} />
                        <input type="button" value="=" className="equal" onClick={equal} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Calculator;
