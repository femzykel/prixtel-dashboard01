import React from 'react';

import { FlagFillSvg, WaveOne } from '../../assets/svg';
import './styles.scss';

const dealsClosed = () => {
  return (
    <div className="deals_closed">
      <div className="deals_closed__heading">
        <span>
          <FlagFillSvg />
        </span>

        <h2>Deals closed</h2>
      </div>

      <div className="deals_closed__info">
        <div className="_info_left">
          <h3>240</h3>
          <p>01 - 23 September 2021</p>
        </div>

        <div className="_info_divider"></div>

        <div className="_info_right">
          <span>
            <WaveOne />
          </span>

          <p>
            <span>24 more</span> than last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default dealsClosed;
