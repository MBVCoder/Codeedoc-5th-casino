import { Route , Routes } from "react-router-dom";
import Roulete from "./screens/Roulete";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Roulete />} />
      </Routes>
    </>
  )
}

export default App
