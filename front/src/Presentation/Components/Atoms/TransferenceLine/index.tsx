import './styles.css';

import { format } from '@formkit/tempo';

import { CashConverter } from '../CashConverter';
import { TransferenceLineProps } from './types';

/**
 * Renders a transference line component.
 * Is a reusable component for represent a vertical line with some elements, which counts with the following props:
 *
 * - **data:** Is an array type Transference.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <TransferenceLine data={[{
 *    id: 1,
 *    personName: "Pepito Perez",
 *    amount: 12345543,
 *    date: new Date()
 * }]} />
 * ```
 * ---
 * @category Component
 */
const TransferenceLine = ({ data }: TransferenceLineProps) => {
  return (
    <div className={'container-vertical-line'}>
      {data.map((d) => {
        return (
          <div className={'box'}>
            <h2>
              <CashConverter balance={d.amount} />
            </h2>
            <p>{d.personName}</p>
            <span>
              <i>{format(d.date, { date: 'full', time: 'short' })}</i>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export { TransferenceLine };
