import React, { FunctionComponent } from 'react';
// @ts-ignore
import s from "./order.module.scss"
import {useParams} from "react-router-dom";
import axios from "axios"
import QRCodeSVG from "qrcode.react";

interface OwnProps {}

type Props = OwnProps;

const Order: FunctionComponent<Props> = (props) => {
    const params = useParams()
    console.log(params)

    const [wallet, setWallet] = React.useState("")

    React.useEffect(()=>{
        axios.post("http://localhost:4444/api/wallet/check", {name: params.deposit}).then(res => setWallet(res.data.address))
    },[])
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
              <QRCodeSVG value="https://reactjs.org/" />
          </div>
          <div className={s.info}>
            <div className={s.amount}>
              Amount: <span>{params.amount} ({params.deposit})</span>
            </div>
            <div className={s.wallet}>Wallet for payment: <span>{wallet}</span></div>
          </div>
        </div>
      </div>
  );
};

export default Order;
