import React from 'react';
import propTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I Love {name}</h1>
      <h2>평점: {rating}</h2>
      <img src={ picture} alt={ name }/>
    </div>
  );
}

const foodLike = [
  { id: 1,
    name: 'kimchi',
    image: 'http://08food.com/web/product/big/201801/33_shop1_243196.jpg',
    rating: 5
  },
  { id: 2,
    name: 'hamburger',
    image: 'https://w.namu.la/s/126ed0de470ffd19954dde2dcdf4684286c506b774a2c1cf713c04309cf94ce26946aa03ec30a4a8a93e8e645c7bf361347807b0654a312c6e58c34e8f6bbf98e8883276bb6f561d08cc40b67dababb0',
    rating: 4.5
  },
  { id: 3,
    name: 'pizza',
    image: 'https://lh3.googleusercontent.com/proxy/dCgxJaDFnlWDwe7rUvey9iNjj7Y_KRrI3L08BDkB9gvcNoy_H8T29IEYYW44Gbth_f6l0hJKEUjt5O0ES9djuQI6tSDwUsr86pi2s2nnUvf7-7SGVTPR9Ah4rfJbkycielLy',
    rating: 4.7
  },
  { id: 4,
    name: 'ddukboki',
    image: 'https://blog.kakaocdn.net/dn/bdserg/btqMegRrYpk/XkBUuj1NQh2G3SMH0KnG10/img.jpg',
    rating: 3.6
  }
];


function App() {
  return (
    <div>
      {foodLike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

export default App;

