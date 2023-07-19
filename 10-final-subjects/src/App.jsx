import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

/* Page Components ---------------------------------------------------------- */

import Game from './pages/Game';
import RootLayout from './pages/RootLayout';
import Notes from '@/pages/Notes/Notes';

/* Router Config ------------------------------------------------------------ */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Game />} />
      <Route path="notes" element={<Notes />} />
    </Route>
  )
);

/* -------------------------------------------------------------------------- */

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
