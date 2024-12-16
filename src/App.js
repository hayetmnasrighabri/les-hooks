import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [mohamed, setMohamed] = useState(0);
  const [ahmed, setAhmed] = useState(0);

  const m = useMemo(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
      <div className='test' style={{ backgroundColor: randomColor }}></div>
    );
  }, [mohamed]);

  return (
    <div className='App'>
      {m}
      <button onClick={() => setMohamed(mohamed + 1)}>mohamed</button>
      <button onClick={() => setAhmed(ahmed + 1)}>ahmed</button>
    </div>
  );
}

export default App;
