export type Options = 'balance' | 'transference';

/**
 * The props type for {@link HomeView}.
 */
interface HomeViewProps {
  /**
   * Implement a type of Options. Default is `Balance`
   * @type {Options}
   *
   */
  view?: Options;
}

export type { HomeViewProps };
