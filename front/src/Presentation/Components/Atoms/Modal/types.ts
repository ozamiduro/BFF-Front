import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  title?: string;
  children?: JSX.Element;
}

export type { ModalProps };
