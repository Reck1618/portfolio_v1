import SideBar from '../../componenets/side-bar/Side-bar';
import Navigation from '../../componenets/navigation/Navigation';
import ThemeButton from '../../componenets/theme-button/Theme-button';
import './Main-page.css';

const MainPage = () => {

    return (
        <>
            <ThemeButton />
            <SideBar />
            <Navigation />
        </>

    );
};

export default MainPage;