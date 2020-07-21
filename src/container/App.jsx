import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

function App() {
  return (
    <>
      <Header />

      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
    </>

  );
}

export default App;
