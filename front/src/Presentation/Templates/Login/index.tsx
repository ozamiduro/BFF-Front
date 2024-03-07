import { useState } from 'react';
import './styles.css';
import { Header } from '../../Components/Molecules/Header';
import { LoginForm } from '../../Components/Organisms/LoginForm';
import { Button } from '../../Components/Atoms/Button';
import { RegisterForm } from '../../Components/Organisms/RegisterForm';

/**
 * Renders a Login template.
 *
 * Is the Login's template. It contains all of the authentication.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * <LoginTemplate />
 * ```
 * ---
 * @category Template
 */
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
