import { CashConverterProps } from './type';

const CashConverter = ({ balance, ISOcode = 'COP' }: CashConverterProps) => {
  return (
    <span>
      {new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: ISOcode,
      }).format(balance)}
    </span>
  );
};

export { CashConverter };
