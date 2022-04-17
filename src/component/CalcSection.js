import React, {useEffect, useState} from 'react';
import axios from "axios";

function CalcSection(props) {
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(1);
    const [select, setSelect] = useState('');
    const [calc, setCalc] = useState(0);
    const fetchApi = async () => {
        const response = await axios.get('https://6259135a92dc88731868fdd8.mockapi.io/api/valute');
        setData(await response.data);
    };

    function getInputVal(e) {
        setMoney(e.target.value)
    }

    function calcVal(e) {
        const currency = e.target.value;
        setSelect(currency);
        const [currentCurrency] = data.filter((item) => item.name === currency);
        setCalc(+money * currentCurrency?.soldValue);
    }


    useEffect(() => {
        fetchApi()
    }, []);


    return (
        <div className="container calc-section">
            <div className="row">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="title">
                                Валютный курс
                            </div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#menu1">
                                        Для физических лиц
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                                        Для юридических лиц
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#menu3">
                                        Курс Центрального банка
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane container active" id="menu1">
                                    <table className="table table-borderless table-hover">
                                        <thead>
                                        <tr>
                                            <th>Валюта</th>
                                            <th>Купить</th>
                                            <th>Продажа</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <td className="text-black">{item.name}</td>
                                                <td className="text-end">{item.buyValue}</td>
                                                <td className="text-end">{item.soldValue}</td>
                                            </tr>
                                        ))}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <div className="date">
                                Данные 17.04.2022
                            </div>
                            <button>
                                Обменный курс онлайн
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="box">
                        <h1>Конвертер валют </h1>
                        <div className="change">
                            <input
                                onChange={getInputVal}
                                value={money}
                                min='1'
                                placeholder='100'
                                type="number"/>

                            <select onChange={calcVal}>
                                {data.map((item,index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                            <button>{calc}</button>
                            <button>UZS</button>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.242645326398!2d69.23734183616742!3d41.31962838363841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75480edae7%3A0x43e85ed15008046f!2sAsaka%20Bank!5e0!3m2!1suz!2s!4v1650202058794!5m2!1suz!2s"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>

                        <div className=" mobile-footer d-flex justify-content-between align-items-end mt-4">
                            <div className="w-75 p-3">
                                <div className="location">
                                    Офисы и банкоматы
                                </div>
                                <div className="text">
                                    Адреса отделений и банкоматов «Асакабанк»
                                    на карте, а также график работы, телефоны.
                                </div>
                            </div>
                            <div className="w-25">
                                <button>
                                    Перейти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalcSection;