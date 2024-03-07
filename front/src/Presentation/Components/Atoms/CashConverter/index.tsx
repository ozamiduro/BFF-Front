import { CashConverterProps } from './type';

/**
 * Renders a cash converter component.
 *
 * Is a reusable component, responsable to converter a value to a coin format depending of the coin code. This one counts with the following props:
 * - **balance:** Props type number, which is the number of the amount to be converted
 * - **ISOcode:** Optional string props with the ISO code of the coin, default option COP
 *
 * **Usage example**
 *
 * **Default properties**
 *
 * ```tsx
 * <CashConverter balance={20000} />
 * ```
 * ---
 * **ISOcode property**
 *
 * ```tsx
 * <CashConverter balance={20000} ISOcode={'EUR'} />
 * ```
 * ---
 * @category Component
 */

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
