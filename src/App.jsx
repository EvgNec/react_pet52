import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('Привіт, React!');

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>{value}</h1>
      <button
        style={{
          padding: '10px 20px',
          fontSize: 16,
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: 4,
        }}
        onClick={() => setValue('Кнопка натиснута!')}
      >
        Натисни мене
      </button>
    </div>
  );
}

export default App;
