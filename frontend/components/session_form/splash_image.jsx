import React from 'react';

class SplashImage extends React.Component{
  render(){
    return (
      <div>
        <img src={window.images.splash_background} />
      </div>
    )
  }
}

export default SplashImage;