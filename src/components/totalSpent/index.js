import React from 'react';

import { FlagFillSvg, WaveTwo } from '../../assets/svg';
import './styles.scss';

const totalSpent = () => {
  return (
    <div className="total_spent">
      <div className="total_spent__heading">
        <span>
          <FlagFillSvg />
        </span>

        <h2>Total spent</h2>
      </div>

      <div className="total_spent__info">
        <div className="_info_left">
          <h3>$300.30</h3>
          <p>01 - 23 September 2021</p>
        </div>

        <div className="_info_divider"></div>

        <div className="_info_right">
          <span>
            <WaveTwo />
          </span>

          <p>
            <span>3% less</span> than last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default totalSpent;
