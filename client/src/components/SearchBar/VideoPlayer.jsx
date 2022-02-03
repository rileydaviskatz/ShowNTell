import React from 'react';

const Trailer = ({ trailerId }) => {
  return (
    <div className="trailer">
      <div className="embeddedPlayer">
        <iframe title="Video Player" className="embeddable" src={`https://www.youtube.com/embed/${trailerId}`}>VideoPlayer</iframe>
      </div>
    </div>
  );
};

export default Trailer;