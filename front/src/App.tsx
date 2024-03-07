import './App.css';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { useState } from 'react';
import { User } from './Domain/Entity/User';
import { AuthContext } from './Domain/Model/Providers';
import { Login } from './Presentation/Pages/Login/Login';
import { Home } from './Presentation/Pages/Home/Home';

function App() {
  const [auth, setAuth] = useState<User | undefined>(undefined);

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
