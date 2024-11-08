import './contact.css'


export function Contact (){
    return(
        <div className="contact container">
           <div className="title">
                <h1>Контакты</h1>
                <div className="contact-content">
                    
                    <div className="contacts">
                        <li>Телефон</li>
                        <li>WatsApp</li>
                        <li>Telegram</li>
                        <li>Вконтакте</li>
                    </div>
                    <div className="map">
                         <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '0px'
        }}
      >
        Москва
      </a>
      <a
        href="https://yandex.ru/maps/geo/moskva/53166393/?ll=37.651809%2C55.752971&utm_medium=mapframe&utm_source=maps&z=12.88"
        style={{
          color: '#eee',
          fontSize: '12px',
          position: 'absolute',
          top: '14px'
        }}
      >
        Москва — карта, что посмотреть, фото, как добраться, координаты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=37.651809%2C55.752971&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjM5MxIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg14eBZCFfUFX0I%2C&z=12.88"
        width="560"
        height="400"
        frameBorder="1"
        allowFullScreen
        style={{ position: 'relative' }}
      ></iframe>
    </div></div>
                </div>
           </div>
        </div>
    )
}