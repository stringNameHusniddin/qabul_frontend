import bg_image1 from './util/assets/bg_image1.jpg'
import bg_image2 from './util/assets/bg_image2.jpg'
import bg_image3 from './util/assets/bg_image3.jpg'

import { Route, Routes } from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

function App() {
  return (
    <div id='app' className='bg-gray-300 flex items-center justify-center'>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path='/signup' />
        <Route element={<Home />} path='' />
      </Routes>
    </div >
  );
}

export default App;
