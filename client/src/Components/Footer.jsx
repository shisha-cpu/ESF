import React from 'react';
import './footer.css'; 



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