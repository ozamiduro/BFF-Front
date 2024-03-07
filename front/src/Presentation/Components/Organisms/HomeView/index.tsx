import { Transferences } from '../Transferences';
import { Balance } from '../Balance';
import { HomeViewProps } from './type';

/**
 * Renders a Home component.
 *
 * Is a organisms responsible to present the current view.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <HomeView />
 * ```
 *
 * **View property**
 *  ```tsx
 * <HomeView view={'balance'}/>
 * ```
 * ---
 * @category Component
 */
const HomeView = ({ view = 'balance' }: HomeViewProps) => {
  return <div>{view === 'balance' ? <Balance /> : <Transferences />}</div>;
};

export { HomeView };
