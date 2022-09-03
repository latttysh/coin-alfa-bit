import React, { FunctionComponent } from 'react';
// @ts-ignore
import s from "./order.module.scss"

interface OwnProps {}

type Props = OwnProps;

const Order: FunctionComponent<Props> = (props) => {
  return (
      <div className={s.order}>
        <div className={s.title}>
          Your transaction
        </div>
        <div className={s.subtitle}>
          Thank you! Your new application has been successfully created!
        </div>
        <div className={s.status}>
          Transaction status: <span>Waiting for payment</span>
        </div>
        <div className={s.block}>
          <div className={s.qr}>
            CODE
          </div>
          <div className={s.info}>
            <div className={s.amount}>
              Amount: <span>0.02 (BTC)</span>
            </div>
            <div className={s.wallet}>Wallet for payment: <span>bc1qs3lhu5muwuxxhufkdsmynaflt37uw5qexd485q</span></div>
          </div>
        </div>
      </div>
  );
};

export default Order;
