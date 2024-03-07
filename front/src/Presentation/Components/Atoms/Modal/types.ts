import { Dispatch, SetStateAction } from 'react';

/**
 * The props type for {@link Modal}.
 */
interface ModalProps {
  /** A function to update a state the modal to false, it is, close the modal. */
  setModal: Dispatch<SetStateAction<boolean>>;
  /** A title of the modal. Can be optional. */
  title?: string;
  /** The JSX Element as a children of the Modal. Can be optional. */
  children?: React.ReactElement<any>;
}

export type { ModalProps };
