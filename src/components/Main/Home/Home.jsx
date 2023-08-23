import BigSales from "./BigSales/BigSales";
import { CarouselContainer } from "./Carousel/CarouselContainer";
import s from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={s.carouselParent}>
        <CarouselContainer />
      </div>
      <BigSales />
    </div>
  );
}
