/**
 * The props type for {@link Input}.
 */
interface InputProps {
  /** The id and name of the input. */
  name: string;
  /** The type of input. Defaults to `text`. */
  type?: string;
  /** The placeholder of input. Can be optional. */
  placeholder?: string;
}

export type { InputProps };
