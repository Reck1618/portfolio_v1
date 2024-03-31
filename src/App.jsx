import MainPage from "./pages/main-page/Main-page"
import { MobileProvider } from "./contexts/MobileContext.jsx"
import { LaptopProvider } from "./contexts/LaptopContext.jsx"

function App() {
  return (
    <>
    <MobileProvider>
    <LaptopProvider>
      <MainPage />
      </LaptopProvider>
    </MobileProvider>
    </>
  )
}

export default App
