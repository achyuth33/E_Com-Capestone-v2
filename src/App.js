import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return <h1>shoping Zone</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' index element={<Home />} />
        <Route path='Shop' element ={<Shop />} />
      </Route>
    </Routes>

  );
};

export default App;
