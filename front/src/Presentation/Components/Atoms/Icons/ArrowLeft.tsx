/**
 * The props type for {@link ArrowLeft}.
 */
interface Props {
  /** A void function. Can be optional. */
  onClick?: () => void;
}

/**
 * Renders a component with ArrowLeft icon.
 *
 * **Usage example**
 *
 * **Default properties**
 *  ```tsx
 *  <ArrowLeft />
 *  ```
 *  ---
 * **OnClick Property**
 *
 *  ```tsx
 *  <ArrowLeft onClick={() => console.log('hey')} />
 *  ```
 * ---
 * @category Icon
 */

const ArrowLeft = ({ onClick }: Props) => {
  return (
    <div
      className="container-icon arrow-left"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M10 12H20M20 12L17 9M20 12L17 15"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
          <path
            d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{' '}
        </g>
      </svg>
    </div>
  );
};

export { ArrowLeft };
