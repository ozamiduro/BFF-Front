import { Button } from '../Button';
import './styles.css';
import { ModalProps } from './types';

const Modal = ({ setModal, children, title }: ModalProps) => {
  return (
    <div className="container-modal">
      <div className="content-modal">
        <header>
          <span>{title}</span>
          <Button onClick={() => setModal(false)} text={'X'} />
        </header>
        <hr />
        {children}
      </div>
    </div>
  );
};

export { Modal };
