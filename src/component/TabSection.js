import React from 'react';
import {Link} from "react-router-dom";

function TabSection(props) {
    return (
        <div className="tab-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title">
                            Выберите цель кредита
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#menu1">Все кредиты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu2">Любые бизнес-цели без
                                    залога</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu3">Транспорт и оборудование</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#menu4">Участие в тендере, реализация
                                    госконтракта
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane container active" id="menu1">
                                <div className="box">
                                    <div className="left-side">
                                        <img src="images/tab-img1.png" alt=""/>
                                    </div>
                                    <div className="right-side">
                                        <div className="tab-title">
                                            Кредит Оборотный
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Пополнение оборотных средств
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Осуществление текущих расходов
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Исполнение текущих, государственных и экспортных
                                                контрактов
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Финансирование любых целей без подтверждения целевого
                                                использования
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Рефинансирование оборотных кредитов других банков
                                            </div>
                                        </div>
                                        <div className="tab-footer">
                                            <div className="footer-info">
                                                <div className='main-text'>до 36 месяцев</div>
                                                <div className='description'>срок кредита</div>
                                            </div>
                                            <div className="footer-info">
                                                <div className='main-text'>18%</div>
                                                <div className='description'>минимальная ставка</div>
                                            </div>
                                            <div className="footer-info">
                                                <div className='main-text'>от 25 000 000 сумов</div>
                                                <div className='description'>минимальная сумма</div>
                                            </div>
                                        </div>
                                       <div className="d-flex">
                                           <button className="tab-btn">Подать заявку онлайн</button>
                                           <button>Подробнее</button>
                                       </div>

                                    </div>
                                </div>
                                <hr/>
                                <div className="box">
                                    <div className="left-side">
                                        <img src="images/tab-img2.png" alt=""/>
                                    </div>
                                    <div className="right-side">
                                        <div className="tab-title">
                                            Кредит Инвестиционный
                                        </div>
                                        <div className="tab-subTitle">
                                            Инвестирование в недвижимость, строительство <br/>
                                            и другое имущество
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Рефинансирование задолженности перед банками
                                                и лизинговыми компаниями
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Приобретение жилой или коммерческой недвижимости
                                                под залог приобретаемых объектов

                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="circle"/>
                                            <div className="tab-text">
                                                Покупка транспорта и оборудования
                                                для хозяйственной
                                                деятельности
                                            </div>
                                        </div>

                                        <div className="tab-footer">
                                            <div className="footer-info">
                                                <div className='main-text'>до 36 месяцев</div>
                                                <div className='description'>срок кредита</div>
                                            </div>
                                            <div className="footer-info">
                                                <div className='main-text'>18%</div>
                                                <div className='description'>минимальная ставка</div>
                                            </div>
                                            <div className="footer-info">
                                                <div className='main-text'>от 25 000 000 сумов</div>
                                                <div className='description'>минимальная сумма</div>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <button className="tab-btn">Подать заявку онлайн</button>
                                            <button>Подробнее</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane container fade" id="menu2">
                                <h1>Информация не найдена</h1>
                            </div>
                            <div className="tab-pane container fade" id="menu3">
                                <h1>Информация не найдена</h1>
                            </div>
                            <div className="tab-pane container fade" id="menu4">
                                <h1>Информация не найдена</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabSection;