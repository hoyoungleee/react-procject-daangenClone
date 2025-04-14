import React from 'react';
import styles from './SearchBox.module.scss';
const SearchBox = () => {
  return (
    <div className={styles.side}>
      <form>
        <button>
          중고거래
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-seed-icon='true'
            data-seed-icon-version='0.0.10'
            width='14'
            height='14'
            aria-hidden='true'
          >
            <g>
              <path
                d='M8.17379 8C6.46508 8 5.54326 10.0042 6.65527 11.3016L10.4811 15.765C11.2792 16.6962 12.7199 16.6962 13.5181 15.765L17.3439 11.3016C18.4559 10.0042 17.5341 8 15.8253 8H8.17379Z'
                fill='currentColor'
              ></path>
            </g>
          </svg>
        </button>
        <div>
          <input />
          <button className={styles.ArrowButton}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-seed-icon='true'
              data-seed-icon-version='0.0.10'
              width='24'
              height='24'
              class='_16yrvj59 sprinkles_color_neutralInverted__1byufe8c sprinkles_width_4_base__1byufe836 sprinkles_height_4_base__1byufe85a'
            >
              <g>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11.6507 2.15225C11.1821 2.62088 11.1821 3.38068 11.6507 3.84931L18.1022 10.3008H2.99922C2.33648 10.3008 1.79922 10.8381 1.79922 11.5008C1.79922 12.1635 2.33648 12.7008 2.99922 12.7008H18.1022L11.6507 19.1523C11.1821 19.6209 11.1821 20.3807 11.6507 20.8493C12.1193 21.3179 12.8791 21.3179 13.3477 20.8493L21.8477 12.3493C22.0728 12.1243 22.1992 11.8191 22.1992 11.5008C22.1992 11.1825 22.0728 10.8773 21.8477 10.6523L13.3477 2.15225C12.8791 1.68362 12.1193 1.68362 11.6507 2.15225Z'
                  fill='currentColor'
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </form>
      <div className={styles.showKeyword}></div>
    </div>
  );
};

export default SearchBox;
