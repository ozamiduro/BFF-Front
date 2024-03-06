import type { TitleProps } from './type';

const Title = ({ title, color = 'black', styles }: TitleProps) => {
  return (
    <h1 style={{ color: color, fontFamily: 'Montserrat', ...styles }}>
      {title}
    </h1>
  );
};

export { Title };
