import React from 'react';

import {
  LogoSvg,
  BarChartSvg,
  OffersSvg,
  BillingSvg,
  HelpCircleSvg,
  PrixtelSvg,
  MenuVerticalSvg,
} from '../../../assets/svg';

import './styles.scss';

const nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="/" aria-label="brand logo">
          <LogoSvg />
        </a>
      </div>

      <ul>
        <li>
          <a href="/#">
            <BarChartSvg />
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/#">
            <OffersSvg />
            <span>Offers</span>
          </a>
        </li>

        <li>
          <a href="/#">
            <BillingSvg />
            <span>Billing</span>
          </a>
        </li>

        <li>
          <a href="/#">
          <HelpCircleSvg />
          <span>Help</span>
          </a>
        </li>
      </ul>

      <div className="nav__admin">
        <div className="admin_left">
          <PrixtelSvg />
          <span>Prixtel admin</span>
        </div>

        <div className="admin_right">
          <button aria-label="admin menu button">
            <MenuVerticalSvg />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default nav;
