import { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>CLICK IF YOU AGREE IM HANDSOME</h1>
        <button 
          onClick={() => setClickCount(clickCount + 1)} 
        >
          Click Me
        </button>
        <p>You have agree {clickCount} times.</p>
      </div>
    </>
  );
}

export default App;
