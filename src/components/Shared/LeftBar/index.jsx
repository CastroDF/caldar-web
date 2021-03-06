import React from 'react';
import { Link } from 'react-router-dom';
import style from './LeftBar.module.css';

const LeftBar = () => {
  return (
    <div className={style.leftBar}>
      <section className={style.header}>
        <h2 className={style.title}>
          CaldAR
        </h2>
      </section>
      <ul className={style.links}>
        <li>
          <Link className={style.home} to="/home">HOME</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/boilertypes">BOILER  TYPES</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/appointments">APPOINTMENTS</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/buildings">BUILDINGS</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/boilers">BOILERS</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/customers">CUSTOMERS</Link>
        </li>
        <li>
          <Link className={style.linkNav} to="/technicians">TECHNICIANS</Link>
        </li>
      </ul>

    </div>
  );
};

export default LeftBar;
