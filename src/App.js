import {Route, Routes} from 'react-router-dom';

import Navigation from './components/navigation-bar/navigation-bar.component';

import Home from './routes/home/home.route';

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    )
};

export default App;
