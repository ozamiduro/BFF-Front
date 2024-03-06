import { BalanceChart } from '../../Molecules/BalanceChart';
import { Title } from '../../Atoms/Title';

import './styles.css';
import { useInformation } from '../../../../Data/Hooks/Information';
import { useEffect } from 'react';

const Balance = () => {
  const { userInfo, information } = useInformation();

  useEffect(() => {
    const unSub = async () => {
      await information();
    };

    unSub();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export { Balance };
