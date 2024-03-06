import { Transferences } from '../Transferences';
import { Balance } from '../Balance';
import { HomeViewProps } from './type';

const HomeView = ({ view }: HomeViewProps) => {
  return <div>{view === 'balance' ? <Balance /> : <Transferences />}</div>;
};

export { HomeView };
