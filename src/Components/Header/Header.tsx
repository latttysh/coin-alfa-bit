import React, { FunctionComponent } from 'react';
// @ts-ignore
import s from "./header.module.scss"

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
      <div className={s.header}>
        <div className={s.logo}>CoinAlfaBit</div>
          <div className={s.menu}>
              <div className={s.item}>Home</div>
              <div className={s.item}>Available</div>
              <div className={s.item}>Advantages</div>
              <div className={s.item}>Our valute</div>
              <div className={s.item}>Contact</div>
          </div>
          <button className={s.change}>Change crypto</button>
      </div>
  );
};

export default Header;
