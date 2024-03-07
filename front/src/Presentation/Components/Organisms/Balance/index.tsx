import { BalanceChart } from '../../Molecules/BalanceChart';
import { Title } from '../../Atoms/Title';

import './styles.css';
import { useInformation } from '../../../../Data/Hooks/Information';
import { useEffect } from 'react';

/**
 * Renders a Balance component.
 *
 * Is a organisms responsible to have all balance elements.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <Balance />
 * ```
 * ---
 * @category Component
 */
const Balance = () => {
  const { userInfo, information } = useInformation();

  useEffect(() => {
    const unSub = async () => {
      await information();
    };

    unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title title={'Información básica'} />
      <div className={'content-info'}>
        <div className={'info'}>
          <span>
            <strong>Cédula</strong>
          </span>
          <span>{userInfo?.id}</span>
        </div>
        <div className={'info'}>
          <span>
            <strong>Nombre</strong>
          </span>
          <span>{userInfo?.name}</span>
        </div>
      </div>
      <div className={'container-balancec'}>
        <BalanceChart
          balance={userInfo?.balance ?? 0}
          reloadOnClick={() => information()}
        />
      </div>
    </>
  );
};

export { Balance };
