import { useContext } from 'react';
import { ArrowLeft } from '../../Atoms/Icons/ArrowLeft';
import { Bank } from '../../Atoms/Icons/Bank';
import './styles.css';
import { AuthContext } from '../../../../Domain/Model/Providers';
import { useNavigate } from 'react-router';

/**
 * Renders a Header component.
 *
 * Is a molecule responsible of the App's header.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <Header />
 * ```
 * ---
 * @category Component
 */
const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <>
      <header className={'container-header'}>
        <Bank />
        {auth && (
          <ArrowLeft
            onClick={() => {
              setAuth(undefined);
              navigate('/');
            }}
          />
        )}
      </header>
      <div className={'line'} />
    </>
  );
};

export { Header };
