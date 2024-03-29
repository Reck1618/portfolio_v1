import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobileView}>
      {children}
    </MobileContext.Provider>
  );
};
MobileProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useMobileView = () => useContext(MobileContext);
