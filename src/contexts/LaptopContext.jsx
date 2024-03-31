import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LaptopContext = createContext();

export const LaptopProvider = ({ children }) => {
  const [isLaptopView, setIsLaptopView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopView(window.innerWidth <= 1280 && window.innerWidth > 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LaptopContext.Provider value={isLaptopView}>
      {children}
    </LaptopContext.Provider>
  );
};
LaptopProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useLaptopView = () => useContext(LaptopContext);
