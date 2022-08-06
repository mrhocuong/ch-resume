import { FC } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Resume from './pages/Resume';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
