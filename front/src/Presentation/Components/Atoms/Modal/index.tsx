import { Button } from '../Button';
import './styles.css';
import { ModalProps } from './types';

/**
 * Renders a modal component.
 * Is a reusable component for Modal component, which counts with the following props:
 *
 * - **setModal:** This is a `Dispatch<SetStateAction<boolean>>` option, responsible for close the modal.
 * - **title:** Optional props type string, which is the title of the modal.
 * - **children:** Optional props type JSX element, which is the children of the modal.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * const [openModal, setOpenModal] = useState<boolean>(false);
 * <Modal setModal={setOpenModal} title={'Realizar transferencia'}></Modal>;
 * ```
 * ---
 * **Title property**
 *
 * ```tsx
 * const [openModal, setOpenModal] = useState<boolean>(false);
 * <Modal setModal={setOpenModal} title={"This is my modal's title"}></Modal>;
 * ```
 * ---
 * **Children property**
 *
 * ```tsx
 * const [openModal, setOpenModal] = useState<boolean>(false);
 * <Modal setModal={setOpenModal}>
 *   <>
 *     <p>I'm an its children</p>
 *   </>
 * </Modal>;
 * ```
 * ---
 * @category Component
 */

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
