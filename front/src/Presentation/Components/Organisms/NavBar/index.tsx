import './styles.css';
import { NavBarProps } from './type';

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
