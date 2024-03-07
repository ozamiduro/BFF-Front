import './styles.css';
import { NavBarProps } from './type';

/**
 * Renders a NavBar component.
 *
 * Is a organisms responsible to present the navigation bar. It counts the following props:
 * - **options:** An object, in which presents the navigation bar options.
 * - **onClick:** An optional function.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 * <NavBar options={[name: 'Saldo', option: 'balance']} />
 * ```
 * ---
 * **OnClick property**
 *
 *  ```tsx
 * const [views, setViews] = useState<Options>('balance');
 * <NavBar options={[name: 'Saldo', option: 'balance']} onClick={setViews} />
 * ```
 * ---
 * @category Component
 */
const NavBar = ({ options, onClick }: NavBarProps) => {
  return (
    <nav className={'container-navbar'}>
      {options.map((ops) => {
        return (
          <div className={'options'} onClick={() => onClick(ops.option)}>
            {ops.name}
          </div>
        );
      })}
    </nav>
  );
};

export { NavBar };
