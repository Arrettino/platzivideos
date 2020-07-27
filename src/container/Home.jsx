import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

function Home() {
  const API = 'http://localhost:3000/initalState';
  const videos = useInitialState(API);
  return (
    <>
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {videos.mylist.map(
              (item) => (
                <CarouselItem
                  key={item.id}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ),
            )}
          </Carousel>
        </Categories>
      )}
      {videos.trends.length > 0 && (
        <Categories title='Trends'>
          <Carousel>
            {videos.trends.map(
              (item) => (
                <CarouselItem
                  key={item.id}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ),
            )}
          </Carousel>
        </Categories>
      )}
      {videos.originals.length > 0 && (
        <Categories title='Originals'>
          <Carousel>
            {videos.originals.map(
              (item) => (
                <CarouselItem
                  key={item.id}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ),
            )}
          </Carousel>
        </Categories>
      )}
    </>

  );
}

export default Home;
