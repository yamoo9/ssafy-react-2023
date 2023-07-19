import { NavBar } from '@/components';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
