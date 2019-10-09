import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Contact name='Julie Simon' avatar='https://zupimages.net/up/19/41/ngwt.png' line/>
    <Contact name='Ethan Cortez' avatar='https://zupimages.net/up/19/41/yzuc.png' line/>
    <Contact name='Pierre Dupuis' avatar='https://zupimages.net/up/19/41/eafs.jpg'/>
    </div>
  );
}

export default App;
