import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/pics/play-icon.png';
import plusIcon from '../assets/pics/plus-icon.png';
import removeIcon from '../assets/pics/delete-icon.png';

function CarouselItem(props) {
  const { key, id, cover, title, year, contentRating, duration, mylist } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      key: id, id, cover, title, year, contentRating, duration,
    });
  };
  const handleDelteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src={cover}
        alt={title}
      />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          { mylist ? (
            <img
              className='carousel-item__details--img'
              src={removeIcon}
              alt='Plus Icon'
              onClick={() => (handleDelteFavorite(id))}
            />
          ) :
            (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
