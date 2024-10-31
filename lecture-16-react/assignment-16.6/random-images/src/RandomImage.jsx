import cat1 from './assets/cat1.jpeg';
import cat2 from './assets/cat2.jpeg';
import cat3 from './assets/cat3.jpeg';

const RandomImage = () => {
  const cats = [cat1, cat2, cat3];
  const idx = Math.floor(Math.random() * 3);
  const randomCat = cats[idx];

  return (
    <div>
      <img src={randomCat}></img>
    </div>
  )
}

export default RandomImage;