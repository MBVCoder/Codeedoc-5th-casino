import { Route, Routes } from "react-router-dom";
import Roulete from "@screens/Roulete";
import Navbar from "@components/Navbar";
import MainLayout from "@components/MainLayout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Roulete />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
