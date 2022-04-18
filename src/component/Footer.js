import React from 'react';

function Footer(props) {
    return (
        <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <ul>
                            <li>
                                <a href="#">Офисы и банкоматы</a>
                            </li>
                            <li>
                                <a href="#">Пресс-центр</a>
                            </li>
                            <li>
                                <a href="#">Обмен валюты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3">
                        <ul>
                            <li>
                                <a href="#">Информационный центр</a>
                            </li>
                            <li>
                                <a href="#">Тарифы</a>
                            </li>
                            <li>
                                <a href="#">Документы</a>
                            </li>
                            <li>
                                <a href="#">Карьера</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3">
                        <div className="social-network">
                            Мы в социальных сетях
                        </div>
                        <div className="social-img">
                            <a href="#"> <img src="images/facebook.png" alt=""/></a>
                            <a href="#">  <img src="images/instagram.png" alt=""/></a>
                            <a href="#"><img src="images/telegram.png" alt=""/></a>
                            <a href="#"><img src="images/robot.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="top">
                            Круглосуточный контактный центр
                            <a href="tel:1152">1152</a>
                        </div>
                        <div className="bottom">
                            Телефон доверия
                            <a href="tel:(+998 71) 200-55-22">(+998 71) 200-55-22</a>
                            С 9.00 до 18.00 (Обед 13.00-14.00) понедельник-пятница
                        </div>
                    </div>
                </div>
            </div>
        </footer>
          <div className="container">
              <div className="last-section">
                  <p>Все права защищены. Услуги лицензионные</p>
                  <p>
                      При использовании материалов сайта "Асакабанк",
                      <a href="https://asakabank.uz">
                          www.asakabank.uz
                      </a>
                     <span> ссылка на сайт обязательна.</span>
                  </p>
              </div>
          </div>
        </div>
    );
}

export default Footer;