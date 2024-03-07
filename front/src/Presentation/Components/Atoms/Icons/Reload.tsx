/**
 * The props type for {@link Reload}.
 */
interface Props {
  /** The width of the icon. Defaults to `50`. */
  width?: number;
  /** The height of the icon. Defaults to `50`. */
  height?: number;
}

/**
 * Renders a component with Reload icon.
 *
 * **Usage example**
 *
 * **Default properties**
 *
 *  ```tsx
 *  <Reload />
 *  ```
 *  ---
 * **Width and height Properties**
 *
 *  ```tsx
 *  <Reload height={20} width={20} />
 *  ```
 * ---
 * @category Icon
 */

const Reload = ({ height = 50, width = 50 }: Props) => {
  return (
    <svg
      fill="#000000"
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 472.615 472.615"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g>
            {' '}
            <path d="M236.308,0C168.221,0,103.915,29.376,59.324,79.742V0.357H40.048v116.907h116.907V97.989H69.176 c41.066-49.558,102.195-78.713,167.131-78.713c119.674,0,217.032,97.358,217.032,217.032S355.982,453.34,236.308,453.34 S19.276,355.982,19.276,236.308c0-18.081,2.231-36.071,6.635-53.47l-18.692-4.725C2.429,197.055,0,216.636,0,236.308 c0,130.3,106.008,236.308,236.308,236.308s236.308-106.008,236.308-236.308S366.608,0,236.308,0z"></path>{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export { Reload };
