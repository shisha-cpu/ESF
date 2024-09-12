import React from 'react';
import './footer.css'; 
import { FaPhone, FaTelegram, FaWhatsapp, FaVk, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
            </div>

            <div className="col-lg-6 col-sm-12">

            </div>
          </div>
        </div>
        <div className="footer_bg">           
               <div className=" container contact_info">
                <h3>Контакты</h3>
                <ul className="contact_list">
                  <li><FaPhone /> Телефон: +7 (999) 123-45-67</li>
                  <li><FaTelegram /> Telegram: <a href="https://t.me/yourtelegram">t.me/yourtelegram</a></li>
                  <li><FaWhatsapp /> WhatsApp: <a href="https://wa.me/79991234567">wa.me/79991234567</a></li>
                  <li><FaVk /> ВКонтакте: <a href="https://vk.com/yourvk">vk.com/yourvk</a></li>
                  <li><FaMapMarkerAlt /> Адрес: ул. Примерная, д. 1, Москва</li>
                </ul>
                <div className="contact_button">
                <button className="btn_get btn_get_two">Связаться с нами</button>
              </div>
              </div>
              
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">

            </div>
            <div className="col-lg-6 col-sm-5 text-right">

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
