import './styles.css';

import { format } from '@formkit/tempo';

import { CashConverter } from '../CashConverter';
import { TransferenceLineProps } from './types';

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
