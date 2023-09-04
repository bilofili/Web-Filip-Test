import './App.css';
import { Contact } from './Component/Contact/Contact';
import { Main } from './Component/Main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
</BrowserRouter>
}

export default App;
