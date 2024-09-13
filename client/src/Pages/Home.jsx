import { Usluga } from "../Components/Usluga"
import './home.css'
import Button from "../Components/Button";
import React from "react";

export function Home() {
  const uslugi = [
    {
      title: "Укладка спортивных покрытий Хард и универсальный акриловые площадки",
      description: "Профессиональная укладка покрытий для спортивных площадок, таких как Хард и акриловые поверхности.",
      img: "https://avatars.mds.yandex.net/i?id=2a0000017a0add5d266f4457567b7efb754f-4571312-images-thumbs&n=13",
    },
    {
      title: "Укладка или монтаж резиновых рулонов покрытия Регупол",
      description: "Монтаж качественных резиновых рулонов покрытия для спортивных площадок и фитнес-залов.",
      img: "https://avatars.mds.yandex.net/get-ydo/9710801/2a0000018ae57660907cd161334522a0254d/diploma",
    },
    {
      title: "Укладка резиновой плитки",
      description: "Укладка прочной и долговечной резиновой плитки для безопасных игровых и спортивных зон.",
      img: "https://avatars.mds.yandex.net/i?id=ee2f63ae3d8dab935d6637af6a63d614_l-10702479-images-thumbs&n=13",
    },
    {
      title: "Укладка искусственного газона",
      description: "Укладка искусственного газона для футбольных полей и игровых площадок.",
      img: "https://avatars.mds.yandex.net/i?id=f061de210302dfb1438d97d8e1ad1d0e_l-6235762-images-thumbs&n=13",
    },
    {
      title: "Укладка спортивного линолеума",
      description: "Профессиональная укладка спортивного линолеума для спортивных и фитнес-залов.",
      img: "https://poliholl.ru/upload/iblock/ad9/rbwq2r480qwiwn7z4ryftnrnr6670tf1/photo_2022-09-30_04-39-19%20(2).jpg",
    },
    {
      title: "Укладка ковролина (рулонного и плиточного)",
      description: "Монтаж ковролина различных типов для спортивных и общественных помещений.",
      img: "https://avatars.mds.yandex.net/i?id=383eee8675daf55b4927988cd80398141de67af2601bc3b2-13461479-images-thumbs&n=13",
    },
    {
      title: "Укладка спортивного паркета",
      description: "Укладка высококачественного спортивного паркета для спортивных залов и арен.",
      img: "https://www.sportmontazh.ru/uploads/image/baumhaus_sport/big/baumhaus_sport_05.jpg",
    },
    {
      title: "Укладка ПВХ линолеума и коммерческого покрытия",
      description: "Монтаж ПВХ линолеума для коммерческих и спортивных помещений.",
      img: "https://alexvit.ru/upload/iblock/eac/podgotovka_pola_pod_linoleum.jpg",
    },
    {
      title: "Нанесение разметки и логотипов",
      description: "Нанесение спортивной разметки и логотипов на покрытия любых типов.",
      img: "https://монтаж-полов.рф/templates/sportivnaya-razmetka/bottom-info/mounting-1.jpg",
    },
    {
      title: "Установка оборудования для детских площадок",
      description: "Монтаж оборудования для детских площадок с безопасным покрытием из резиновой крошки.",
      img: "https://avatars.mds.yandex.net/i?id=b2c9a9a886a40cb31350da847eda6739_l-5351585-images-thumbs&n=13",
    },
    {
      title: "Монтаж ограждений для спортивных площадок",
      description: "Установка различных типов ограждений для спортивных площадок.",
      img: "https://static.tildacdn.com/tild3765-6632-4336-b366-396134313130/3.jpg",
    },
    {
      title: "Установка зон воркаута",
      description: "Монтаж конструкций для воркаут-зон с выбором покрытия по вашему желанию.",
      img: "https://avatars.mds.yandex.net/i?id=48f773bd0193146dc6dbeab70b5f323b_l-5247923-images-thumbs&n=13",
    },
    {
      title: "Заливка бетонных и асфальтовых оснований",
      description: "Заливка основания из бетона или асфальта под любые виды спортивных площадок.",
      img: "https://avatars.mds.yandex.net/i?id=75ed051198de3cd98775a775914f6ebf5864e5e8-5220726-images-thumbs&n=13",
    },
    {
      title: "Укладка резинового покрытия на ступеньки и пандусы",
      description: "Укладка резинового покрытия для обеспечения безопасности на ступеньках и пандусах.",
      img: "https://avatars.mds.yandex.net/get-altay/247136/2a0000015b193eac1ae5f510a2b795605221/XXL_height",
    },
    {
      title: "Установка плинтусов в спортивных залах",
      description: "Монтаж плинтусов для спортивных залов с резиновым покрытием Регупол.",
      img: "https://avatars.mds.yandex.net/i?id=9659edc34157287eaca169a805301d1c7a2c8dd3-7084690-images-thumbs&n=13",
    },
    {
      title: "Демонтаж и ремонт спортивных покрытий",
      description: "Профессиональный демонтаж и ремонт любых спортивных покрытий, включая покрытия фитнес-залов.",
      img: "https://www.dvfu.ru/upload/iblock/737/3.jpg",
    },
  ];

  return (
    <section className="main container">

<section>
  <div className="main-img  ">
    <img src="https://fitnesstop.ru/assets/images/products/928/fittseps-4.jpg" alt="background" />
    <div className="overlay">
      <h1 className="img-title">Профессиональная укладка спортивных покрытий для любых задач!</h1>
      <button className="contact-btn"><b>Связаться с нами</b></button>
      {/* <Button  text={"Связаться с нами  "} /> */}
    </div>
  </div>
</section>


      <div className="title">
        <h1>Наши услуги:</h1>
      </div>
      <div className="main-content">
        

        <section>
        <div className="uslugi">
          {uslugi.map((usluga, index) => (
            <Usluga
              key={index}
              title={usluga.title}
              description={usluga.description}
              img={usluga.img}
            />
          ))}
        </div>
        </section>

      </div>
    </section>
  );
}
