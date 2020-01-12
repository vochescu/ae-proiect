import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
        "https://live.staticflickr.com/6179/6191363808_90c18cd339_b.jpg",
        "https://live.staticflickr.com/4263/35631149545_25f4261fdd_b.jpg",
        "https://live.staticflickr.com/65535/32898683807_2d56dce24d_b.jpg"
      ]
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Made for Life</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow
