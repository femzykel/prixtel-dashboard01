import React, { useState } from 'react';

import Header from '../components/ui/header';
import DealsClosed from '../components/dealsClosed';
import TotalSpent from '../components/totalSpent';
import Chart from '../components/chart';
import { HamburgerIcon } from '../assets/svg';

import './styles.scss';

const Layout = () => {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(!show);

    document.documentElement.classList.toggle('_fixed');
    document.body.classList.toggle('_fixed');
  };

  return (
    <div className="app_layout _max_width">
      <Header isOpen={show} />

      <div className="hamburger">
        <button onClick={showSidebar} aria-label="menu button">
          <HamburgerIcon />
        </button>
      </div>

      <div
        className={`backdrop ${show ? '_show' : ''}`}
        onClick={showSidebar}
      ></div>

      <main className="main">
        <div className="main__heading">
          <div className="_heading_text">
            <h1>September 2021</h1>
            <p>
              Export a report to see a full statistics of your choice of
              duration
            </p>
          </div>

          <div className="_heading_btn">
            <button>Export report</button>
          </div>
        </div>

        <div className="main__grid">
          <DealsClosed />
          <TotalSpent />
          <Chart />
        </div>
      </main>
    </div>
  );
};

export default Layout;
