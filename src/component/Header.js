import React from 'react';
import {useState,useRef} from 'react'
function Header(props) {
    const rangeInput=useRef();
    const rangeInputTime=useRef();
    const [rangeVal,setRangeVal]=useState(0);
    const [rangeValTime,setRangeValTime]=useState(0);
    function getValue(e) {
        const value=e.target.value;
        setRangeVal(e.target.value);
        rangeInput.current.style.background = 'linear-gradient(to right, #D70C17 0%, #D70C17 '
            + value + '%, #E0E2E6 ' + value + '%, #E0E2E6 100%)'
    }
    function getValueTime(e) {
        const value=e.target.value;
        setRangeValTime(e.target.value);
        rangeInputTime.current.style.background = 'linear-gradient(to right, #D70C17 0%, #D70C17 '
            + value + '%, #E0E2E6 ' + value + '%, #E0E2E6 100%)'
    }
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 left-side">
                        <div className="title">
                            Кредиты для бизнеса
                            на любые цели
                        </div>
                        <div className="text">
                            На недвижимость, транспорт, модернизацию
                            производства или пополнение оборотных средств
                        </div>
                        <button>
                            Подать заявку онлайн
                        </button>
                    </div>
                    <div className="col-xl-6 right-side">
                        <img src="images/header-img.png" alt=""/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-left">
                                <div className="sub-title">
                                    Сколько вам нужно
                                </div>
                                <div className="price">
                                    {rangeVal*100000}
                                </div>
                                <input
                                    ref={rangeInput}
                                    value={rangeVal}
                                    onChange={getValue}
                                    type="range"/>
                                <div className="paragraph">
                                    Предварительный расчет.
                                    Не является публичной офертой.
                                </div>
                            </div>
                            <div className="box-middle">
                                <div className="sub-title">
                                    Срок кредита
                                </div>
                                <div className="price">
                                    {Math.floor(rangeValTime/10)} года
                                </div>
                                <input
                                    ref={rangeInputTime}
                                    value={rangeValTime}
                                    onChange={getValueTime}
                                    type="range"/>
                            </div>
                            <div className="box-right">
                                <div className="sub-title">
                                    Ежемесячный платеж
                                </div>
                                <div className="all-price">
                                    15 321 905 <span>сум.</span>
                                </div>
                                <button>Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;