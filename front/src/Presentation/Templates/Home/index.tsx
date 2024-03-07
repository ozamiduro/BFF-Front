import { useState } from 'react';
import { Header } from '../../Components/Molecules/Header';
import { NavBar } from '../../Components/Organisms/NavBar';
import type { Options } from '../../Components/Organisms/HomeView/type';
import { HomeView } from '../../Components/Organisms/HomeView';

/**
 * Renders a Home template.
 *
 * Is the Home's template. It contains all of the elements for the bank.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <HomeTemplate />
 * ```
 * ---
 * @category Template
 */
const HomeTemplate = () => {
  const [views, setViews] = useState<Options>('balance');

  return (
    <div>
      <Header />
      <NavBar
        options={[
          { name: 'Saldo', option: 'balance' },
          { name: 'Transferencias', option: 'transference' },
        ]}
        onClick={setViews}
      />
      <div>
        <HomeView view={views} />
      </div>
    </div>
  );
};

export { HomeTemplate };
