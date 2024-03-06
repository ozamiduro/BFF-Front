import { useState } from 'react';
import { Header } from '../../Molecules/Header';
import { RegisterForm } from '../../Organisms/RegisterForm';
import './styles.css';
import { LoginForm } from '../../Organisms/LoginForm';
import { Button } from '../../Atoms/Button';

const LoginTemplate = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="container-logintemplate">
      <Header />
      <div className="content">
        <div
          style={{ height: isLogin ? '25rem' : 'fit-content' }}
          className={'container-login glass-effect'}
        >
          {isLogin ? (
            <LoginForm
              children={
                <Button
                  text={'Registrarse'}
                  onClick={() => setIsLogin(!isLogin)}
                />
              }
            />
          ) : (
            <RegisterForm
              children={
                <Button
                  text={'Iniciar sesión'}
                  onClick={() => setIsLogin(!isLogin)}
                />
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { LoginTemplate };
