import './App.css';
import { Login } from './Presentation/Components/Pages/Login/Login';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { Home } from './Presentation/Components/Pages/Home/Home';
import { useEffect, useState } from 'react';
import { User } from './Domain/Entity/User';
import { AuthContext } from './Domain/Model/Providers';

function App() {
  const [auth, setAuth] = useState<User | undefined>(undefined);

  useEffect(() => {
    console.log('El');
    console.log(auth);
  }, [auth, setAuth]);

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

  const Authenticated = (auth: any) => {
    if (!auth) {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<AuthProvider />}>
          <Route path="/" element={<Login />} />
          <Route element={Authenticated(auth)}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
