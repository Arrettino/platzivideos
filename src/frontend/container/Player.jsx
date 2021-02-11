import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

function Player({ history, match, playing, getVideoSource }) {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getVideoSource(id);
  }, []);
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => (history.push('/'))}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
}

function mapStateToProps(state) {
  return ({
    playing: state.playing,
  });
}

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
