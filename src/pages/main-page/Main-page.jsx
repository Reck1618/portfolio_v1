import SideBar from '../../componenets/side-bar/Side-bar';
import Navigation from '../../componenets/navigation/Navigation';
import { useMobileView } from '../../contexts/MobileContext';
// import ThemeButton from '../../componenets/theme-button/Theme-button';
import './Main-page.css';

const MainPage = () => {

    const isMobileView = useMobileView();

    return (
        <>
            {/* <ThemeButton /> */}
            {isMobileView ? null : <SideBar />}
            <Navigation />
        </>

    );
};

export default MainPage;