import MainPage from "./pages/main-page/Main-page"
import { MobileProvider } from "./contexts/MobileContext.jsx"

function App() {
  return (
    <>
    <MobileProvider>
      <MainPage />
    </MobileProvider>
    </>
  )
}

export default App
