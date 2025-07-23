// src/App.tsx
import React from 'react';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ padding: '1rem' }}>
        <h1>🌱 Welcome to UI Garden</h1>
        <p>Storybook：</p>
      </header>

      <iframe
        src="/storybook/index.html"
        title="Storybook"
        style={{
          flexGrow: 1,
          border: '1px solid #ccc',
          borderRadius: '7px',
        }}
      ></iframe>
    </div>
  );
}

export default App;
