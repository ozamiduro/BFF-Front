/**
 * The Transference interface.
 */
export interface Transference {
  /** The Transference's ID. */
  id: number;
  /** The person name who did the transference. */
  personName: string;
  /** The amount of the transference. */
  amount: number;
  /** The date when the transference was done. */
  date: Date;
}

/**
 * The SendTransference interface.
 */
export interface SendTransference {
  /** The SendTransference's ID. */
  id: number;
  /** The User's ID who will received the amount. */
  idToSend: number;
  /** The amount of the transference. */
  amount: number;
}
