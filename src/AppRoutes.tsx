import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apllication from './Layouts/Apllication';
import Home from './Views/Home';
import Profile from './Views/Profile';
import NotFound from './Views/NotFound';
import Repositories from './Views/Repositories';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apllication />}>
          <Route index element={<Home />} />
          <Route path="/:user" element={<Profile />} />
          <Route path="/repositories/:repo" element={<Repositories />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
