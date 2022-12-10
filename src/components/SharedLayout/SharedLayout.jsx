import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
