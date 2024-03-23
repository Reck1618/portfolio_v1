import { useState } from 'react';
import '../../index.css';

function ThemeButton() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-theme');
  };

  return (
    <div className='theme-button-container'>
      <button className='theme-button' onClick={toggleTheme}>theme</button>
    </div>
  );
}

export default ThemeButton;
