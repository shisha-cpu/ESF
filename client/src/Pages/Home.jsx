import './home.css';
import { ImageGallery } from './ImageGallery';
import React from "react";

export function Home() {
  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный магазин с большим выбором товаров! Нашла все, что нужно, и даже больше.",
      date: "20 октября 2024",
      img: "./img/review1.jpg"
    },
    {
      name: "Сергей Иванов",
      text: "Очень приятный и отзывчивый персонал. Помогли подобрать нужный товар. Рекомендую!",
      date: "15 октября 2024",
      img: "./img/review2.jpg"
    },
    {
      name: "Мария Смирнова",
      text: "Хорошие цены и быстрая доставка. Очень довольна покупкой.",
      date: "5 октября 2024",
      img: "./img/review3.jpg"
    },
    {
      name: "Дмитрий Кузнецов",
      text: "Большой ассортимент и хорошее качество. Буду заказывать еще!",
      date: "28 сентября 2024",
      img: "./img/review4.jpg"
    },
    {
      name: "Екатерина Соколова",
      text: "Приятный опыт покупки. Персонал помог с выбором, осталась довольна!",
      date: "18 сентября 2024",
      img: "./img/review5.jpg"
    },
    {
      name: "Алексей Фролов",
      text: "Быстрая доставка и отличное обслуживание. Рекомендую!",
      date: "12 сентября 2024",
      img: "./img/review6.jpg"
    },
    {
      name: "Ольга Никитина",
      text: "Нашла здесь то, что долго искала. Хорошее качество, доступные цены.",
      date: "1 сентября 2024",
      img: "./img/review7.jpg"
    }
  ];
  

  return (
    <section className="main container">
      {/* Main image section */}
      <section>
        <div className="main-img">
          <img src="./img/main.jpg" alt="background" />
          <div className="overlay">
            <div className="content-section">
              <h1 className="img-title">
                <div className="title-strong">НАЗВАНИЕ</div>
                <br /> специализированный магазин товаров для людей с инвалидностью
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section><ImageGallery /></section>
      <div className="title">
          <h1>Отзывы наших клиентов</h1>
        </div>
      {/* Reviews section with continuous slider effect */}
      <section className="reviews-section ">
 
        <div className="reviews-slider">
          {[...reviews, ...reviews, ...reviews ].map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-photo">
                <img src={review.img} alt={review.name} />
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
