/**
 * The props type for {@link BalanceChart}.
 */
interface BalanceChartProps {
  /** The amount of money. */
  balance: number;
  /** Void function, which is request a last balance update. */
  reloadOnClick?: () => void;
}

export type { BalanceChartProps };
