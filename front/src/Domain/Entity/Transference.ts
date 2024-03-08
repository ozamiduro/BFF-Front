/**
 * The Transference interface.
 */
export interface Transference {
  /** The Transference's ID. */
  id: number;
  /** The person name who did the transference. */
  name: string;
  /** The amount of the transference. */
  amount: number;
  /** The date when the transference was done. */
  createdAt: Date;
}

/**
 * The SendTransference interface.
 */
export interface SendTransference {
  /** The name who will receive the transference. */
  name: string;
  /** The User's ID who do the transference. */
  userId: number;
  /** The amount of the transference. */
  amount: number;
}
