import type { TitleProps } from './type';

/**
 * Renders a title component.
 * Is a reusable component for Title component, which counts with the following props:
 *
 * - **title:** A string props for the title.
 * - **color:** An optional string props for the color of the title.
 * - **styles:** An optional `CSSProperties` props for the styles of the title.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 * <Title title={'title'} />
 * ```
 * ---
 * **Color property**
 * ```tsx
 * <Title title={'title'} color={'white'}/>
 * ```
 * ---
 * **CSSProperties property**
 * ```tsx
 * <Title title={'title'} styles={{ backgroundColor: 'red' }}/>
 * ```
 * ---
 * @category Component
 */

const Title = ({ title, color = 'black', styles }: TitleProps) => {
  return (
    <h1 style={{ color: color, fontFamily: 'Montserrat', ...styles }}>
      {title}
    </h1>
  );
};

export { Title };
