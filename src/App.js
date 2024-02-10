import logo from './logo.svg';
import './App.css';
import img1 from './../src/images/pic1.gif';
import img2 from './../src/images/pic2.gif';
import { useRef, useState } from 'react';

function App() {
  const [screen, setScreen] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const btnRef = useRef();
  const threshHoldClick = 14;
  const no_messages = [
    'No',
    'Ouch',
    'You are breaking my heart',
    'Say yes please T^T',
    'I will be sad',
    'I will be very sad',
    'I will be very very sad',
    'I will be very very very sad',
    'I will be very very very very sad',
  ]

  const handleClick = () => {
    btnRef.current.focus();
    if (noCount > threshHoldClick) {
      setNoCount(0);
      setScreen(1);
    } else {
      setNoCount(noCount + 1);
    }
  };

  const handleYesClick = () => {
    setNoCount(0);
    setScreen(1);
  };

  if (screen === 0) {
    return (

      <div className='flex justify-center'>
        <div>

          <img src={img2} className='m-auto' />
          <h2 className='flex items-center justify-center font-bold text-2xl'  >Will you be my Valentine?</h2>
          <div className='flex items-center justify-center font-bold mt-5' >

            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 
focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              style={{ padding: noCount ? noCount * 50 + 'px' : '10px 20px', fontSize: (0.875 + noCount * 0.5) + 'rem' }}

              ref={btnRef} id="button2" onClick={handleYesClick}>YES!!</button>
            {noCount <= threshHoldClick && <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br
 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
 dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleClick}
            >{no_messages[noCount % no_messages.length]}</button>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center'>
      <div>
        <img src={img1} className='m-auto' />
        <h2 className='flex items-center justify-center font-bold text-2xl'  >Okay!! Yayyy</h2>
      </div>
    </div>
  );
}

export default App;
