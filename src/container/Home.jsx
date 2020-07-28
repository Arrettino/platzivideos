import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

function Home({ myList, trends, originals }) {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {myList.map(
              (item) => (
                <CarouselItem
                  key={item.id}
                  cover={item.cover}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                  mylist={true}
                />
              ),
            )}
          </Carousel>
        </Categories>
      )}
      {trends.length > 0 && (
        <Categories title='Trends'>
          <Carousel>
            {trends.map(
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
      {originals.length > 0 && (
        <Categories title='Originals'>
          <Carousel>
            {originals.map(
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

function mapStateToProps(state) {
  return ({
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  });
}

export default connect(mapStateToProps, null)(Home);
