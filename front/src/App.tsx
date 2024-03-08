import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { User } from './Domain/Entity/User';
import { AuthContext } from './Domain/Model/Providers';
import { Login } from './Presentation/Pages/Login/Login';
import { Home } from './Presentation/Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [auth, setAuth] = useState<User | undefined>(undefined);

  useEffect(() => {
    const authLocalStorage = localStorage.getItem('auth') ?? null;
    if (authLocalStorage) setAuth(JSON.parse(authLocalStorage));
  }, []);

  const AuthProvider = () => {
    return (
      <AuthContext.Provider
        value={{
          auth,
          setAuth,
        }}
      >
        <Outlet />
      </AuthContext.Provider>
    );
  };

  const IsAuthenticated = (auth: any) => {
    if (auth) {
      return <Navigate to={'/home'} />;
    }
    return <Outlet />;
  };

  const Authenticated = (auth: any) => {
    if (!auth) {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  };

  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: 'var(--fourth-color)',
          color: 'white',
        }}
      />
      <Routes>
        <Route element={<AuthProvider />}>
          <Route element={IsAuthenticated(auth)}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={Authenticated(auth)}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
