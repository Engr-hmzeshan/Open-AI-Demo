import { Routes, Route } from "react-router-dom";
import Header from "./components/layers/Header";
import GenerateImage from "./components/Features/GenerateImage";
import GrammarCorrection from "./components/Features/GrammarCorrection";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-center mt-3">
              Advancing humanity through responsible AI innovation
            </h1>
          }
        />
        <Route path="/generate/image" element={<GenerateImage />} />
        <Route path="/grammar/correction" element={<GrammarCorrection />} />
      </Routes>
    </>
  );
}

export default App;
