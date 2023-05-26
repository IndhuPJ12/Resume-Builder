import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from '../src/pages/resume'
import  'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Resume/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
