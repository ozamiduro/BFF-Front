import { useState } from 'react';
import { Header } from '../../Molecules/Header';
import { HomeView } from '../../Organisms/HomeView';
import { NavBar } from '../../Organisms/NavBar';
import { Options } from '../../Organisms/HomeView/type';

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
