import type { BalanceChartProps } from './type';

import './styles.css';
import { Button } from '../../Atoms/Button';
import { Reload } from '../../Atoms/Icons/Reload';
import { CashConverter } from '../../Atoms/CashConverter';

const BalanceChart = ({ balance, reloadOnClick }: BalanceChartProps) => {
  return (
    <div className={'container-balance'}>
      <CashConverter balance={balance} />
      <div className={'container-button-balance'}>
        <Button text={''} type={'button'} onClick={reloadOnClick}>
          <Reload width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

export { BalanceChart };
