import {Route, Routes} from 'react-router-dom';

import Navigation from './components/navigation-bar/navigation-bar.component';

import Home from './routes/home/home.route';
import Services from './routes/services/services.route';
import ContactUs from './routes/contact/contact.route';


const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Route>
      </Routes>
    )
};

export default App;
