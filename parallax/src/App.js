import './App.css';
// import { useRef } from 'react';
import useCounter from './store.js';
import { ParallaxLayer,Parallax } from '@react-spring/parallax';




function App() {
  const {counter,up,down} = useCounter();
  // const ref = useRef();

  return (
    <div className="App">

      <Parallax pages={4}>


        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={4}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/moon.jpg)`,
            backgroundSize: 'cover',
          }}
        />
        

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={4}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/field.jpg)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.1, end: 8.5 }}
          style={{ textAlign: 'center' }}>
          <img src={process.env.PUBLIC_URL + '/cat.gif'} />
        </ParallaxLayer>


        <ParallaxLayer speed={1} offset = {0.5}>
          <h1 id='welcome'>Welcome</h1>
        </ParallaxLayer>


        <ParallaxLayer speed={1} offset = {3}>
          <h1 id='hello'>Hello,World</h1>
        </ParallaxLayer>

      </Parallax>




    <div className='zustand-container'>
      <div className='zustand-test'>
        <h3>현재 온도 {counter}℃</h3>
        <button className='btn' onClick={up} >+</button>
        <button className='btn' onClick={down}>-</button>
      </div>
    </div>
  </div>
  );
}

export default App;
