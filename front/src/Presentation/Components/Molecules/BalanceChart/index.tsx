import type { BalanceChartProps } from './type';

import './styles.css';
import { Button } from '../../Atoms/Button';
import { Reload } from '../../Atoms/Icons/Reload';
import { CashConverter } from '../../Atoms/CashConverter';

/**
 * Renders a Balance Chart component.
 *
 * Is a molecule, in which include all elements for balance chart. This counts with the following props:
 *
 * - **balance:** A number props for the amount of money.
 * - **reloadOnClick:** Is an optional void function, in which, is responsible to do a new request for new balance.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * <BalanceChart balance={200000} />
 * ```
 * ---
 * **ReloadOnClick property**
 *
 * ```tsx
 * <BalanceChart balance={200000} />
 * ```
 * ---
 * @category Component
 */
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
