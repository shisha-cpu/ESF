import { Usluga } from "../Components/Usluga"
import './home.css'

import React from "react";

export function Home() {
  const uslugi = [
    {
      title: "Укладка спортивных покрытий Хард и универсальный акриловые площадки",
      description: "Профессиональная укладка покрытий для спортивных площадок, таких как Хард и акриловые поверхности.",
      img: "/images/hard-acrylic.jpg",
    },
    {
      title: "Укладка или монтаж резиновых рулонов покрытия Регупол",
      description: "Монтаж качественных резиновых рулонов покрытия для спортивных площадок и фитнес-залов.",
      img: "/images/regupol.jpg",
    },
    {
      title: "Укладка резиновой плитки",
      description: "Укладка прочной и долговечной резиновой плитки для безопасных игровых и спортивных зон.",
      img: "/images/rubber-tile.jpg",
    },
    {
      title: "Укладка искусственного газона",
      description: "Укладка искусственного газона для футбольных полей и игровых площадок.",
      img: "/images/artificial-grass.jpg",
    },
    {
      title: "Укладка спортивного линолеума",
      description: "Профессиональная укладка спортивного линолеума для спортивных и фитнес-залов.",
      img: "/images/sport-linoleum.jpg",
    },
    {
      title: "Укладка ковролина (рулонного и плиточного)",
      description: "Монтаж ковролина различных типов для спортивных и общественных помещений.",
      img: "/images/carpet.jpg",
    },
    {
      title: "Укладка спортивного паркета",
      description: "Укладка высококачественного спортивного паркета для спортивных залов и арен.",
      img: "/images/sport-parquet.jpg",
    },
    {
      title: "Укладка ПВХ линолеума и коммерческого покрытия",
      description: "Монтаж ПВХ линолеума для коммерческих и спортивных помещений.",
      img: "/images/pvc-linoleum.jpg",
    },
    {
      title: "Нанесение разметки и логотипов",
      description: "Нанесение спортивной разметки и логотипов на покрытия любых типов.",
      img: "/images/marking.jpg",
    },
    {
      title: "Установка оборудования для детских площадок",
      description: "Монтаж оборудования для детских площадок с безопасным покрытием из резиновой крошки.",
      img: "/images/playground.jpg",
    },
    {
      title: "Монтаж ограждений для спортивных площадок",
      description: "Установка различных типов ограждений для спортивных площадок.",
      img: "/images/fence.jpg",
    },
    {
      title: "Установка зон воркаута",
      description: "Монтаж конструкций для воркаут-зон с выбором покрытия по вашему желанию.",
      img: "/images/workout.jpg",
    },
    {
      title: "Заливка бетонных и асфальтовых оснований",
      description: "Заливка основания из бетона или асфальта под любые виды спортивных площадок.",
      img: "/images/concrete.jpg",
    },
    {
      title: "Укладка резинового покрытия на ступеньки и пандусы",
      description: "Укладка резинового покрытия для обеспечения безопасности на ступеньках и пандусах.",
      img: "/images/rubber-steps.jpg",
    },
    {
      title: "Установка плинтусов в спортивных залах",
      description: "Монтаж плинтусов для спортивных залов с резиновым покрытием Регупол.",
      img: "/images/baseboard.jpg",
    },
    {
      title: "Демонтаж и ремонт спортивных покрытий",
      description: "Профессиональный демонтаж и ремонт любых спортивных покрытий, включая покрытия фитнес-залов.",
      img: "/images/repair.jpg",
    },
  ];

  return (
    <section className="main container">
      <div className="title">
        <h1>Наши услуги:</h1>
      </div>
      <div className="main-content">
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
      </div>
    </section>
  );
}
