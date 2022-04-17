import React from 'react';

function Section(props) {
    return (
        <div className="section-one">
            <div className="container">
                <div className="row first-row">
                    <div className="col-xl-3 col-6">
                        <div className="box">
                            <div className="circle">
                                <div>
                                    <img src="images/percent.png" alt=""/>
                                </div>
                            </div>
                            <div className="title">
                                От 18%
                            </div>
                            <div className="text">
                                ставка
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-6">
                        <div className="box">
                            <div className="circle">
                                <div>
                                    <img src="images/year.png" alt=""/>
                                </div>
                            </div>
                            <div className="title">
                                От 1 до 5 лет
                            </div>
                            <div className="text">
                                срок
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-6">
                        <div className="box">
                            <div className="circle">
                                <div>
                                    <img src="images/price.png" alt=""/>
                                </div>
                            </div>
                            <div className="title">
                                До 3 млрд. сумов
                            </div>
                            <div className="text">
                                сумма
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-6">
                        <div className="box">
                            <div className="circle">
                                <div>
                                    <img src="images/all-info.png" alt=""/>
                                </div>
                            </div>
                            <div className="title">
                                Для ЮЛ и ИП
                            </div>
                            <div className="text">
                                кредит на расчетный счёт компании
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row second-row">
                    <div className="col-xl-12">
                        <div className="box">
                            <div className="box-left">
                                <div className="title">
                                    Выбирайте, сколько взять
                                </div>
                                <div className="text">
                                    Получайте деньги одной суммой или в пределах
                                    одобренного лимита
                                </div>
                            </div>
                            <div className="box-right">
                                <img src="images/phone.png" alt=""/>
                                <img src="images/desktop.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row third-row">
                    <div className="col-xl-6">
                        <div className="box">
                            <div className="w-65">
                                <div className="title">
                                    Без скрытых комиссий
                                </div>
                                <div className="text">
                                    Нет комиссий за выдачу и сопровождение
                                    кредита
                                </div>
                            </div>
                            <div className="w-35">
                                <img src="images/image1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="box">
                            <div className="w-65">
                                <div className="title">
                                    Возвращайте, как удобно
                                </div>
                                <div className="text">
                                    Выбирайте график и погашайте кредит
                                    любым доступным способом
                                </div>
                            </div>
                            <div className="w-35">
                                <img className="pay-img" src="images/image2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;