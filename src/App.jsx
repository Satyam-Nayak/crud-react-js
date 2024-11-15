import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Compo/Home'
import Create from './Compo/Create'
import Update from './Compo/Update'
import Read from './Compo/Read'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
