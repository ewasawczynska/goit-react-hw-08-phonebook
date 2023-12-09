import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Loader, SharedLayout } from './index';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

export const App = () => {
  const { isRefreshing } = useAuth();
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/phonebook" component={<PhonebookPage />} />
          }
        />
        </Route>
      </Routes>
    </>
  ); 
};

