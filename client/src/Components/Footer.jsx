import React from 'react'; 
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
      {/* <h3 className="footer_title">Контакты</h3> */}
        <div className="contact_info">
    
          <ul className="contact_list">
            <li>Email: example@mail.com</li>
            <li>Телефон: +7 (999) 999-99-99</li>
            <li>Адрес: Улица Примерная, 123</li>
          </ul>
          <div className="contact_button">
            <button className="btn_contact">Связаться с нами</button>
          </div>
        </div>
      </div>
   
      <div className="footer_bottom">
        <p>© 2024 . Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
