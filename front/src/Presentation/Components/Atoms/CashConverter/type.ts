/**
 * The props type for {@link CashConverter}.
 */
interface CashConverterProps {
  /** The amount in number. */
  balance: number;
  /** The ISO code. Defaults to `COP`. */
  ISOcode?: string;
}

export type { CashConverterProps };
