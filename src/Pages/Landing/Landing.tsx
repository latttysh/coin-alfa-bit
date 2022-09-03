import React, { FunctionComponent } from 'react';
// @ts-ignore
import s from "./landing.module.scss"
import axios from "axios"

interface OwnProps {}

type Props = OwnProps;

const Landing: FunctionComponent<Props> = (props) => {
    const [wallets, setWallets] = React.useState([{
        name: "",
        address: ""
    }])


    const [amount, setAmount] = React.useState("")
    const [depositValute, setDepositValute] = React.useState("XTZ")
    const [withdrawValute, setWithdrawValute] = React.useState("BTC")
    const [convertValue, setConvertValue]=React.useState(0)


    React.useEffect(()=>{
        axios.get("http://localhost:4444/api/wallet").then((res)=>setWallets(res.data))
    }, [])

    React.useEffect(()=>{
        if (depositValute !== "XTZ"){
            calculateValute(amount)
        }
    }, [depositValute, withdrawValute])


    const calculateValute = async (valute:any) => {
        console.log("calculate!!!")
        console.log("DEPOSIT", depositValute)
        console.log("WITHDRAW", withdrawValute)
        let res = await axios.post("http://localhost:4444/api/wallet/convert", {deposit: depositValute, withdraw: withdrawValute, amount: valute})
        const result = Object.values(res.data)
        console.log(res.data)
        // @ts-ignore
        setConvertValue(result[result.length-1])
    }

  return (
      <div className={s.landing}>
          <section className={s.hero}>
              <div className={s.hero_info}>
                  <div className={s.hero_info__title}>
                      Make <br/> cryptocurrencies
                      exchanged easily
                  </div>
                  <div className={s.hero_info__subtitle}>Fast processing of the transactions. Low commissions. <br/>Best conditions.</div>
                  <button className={s.hero_info__button}>Change crypto</button>
              </div>
              <img src="./img/hero.png" alt="hero"/>
          </section>
          <section className={s.action}>
              <div className={s.action__title}>
                  Immediate crypto exchange
              </div>
              <div className={s.action__subtitle}>
                  Just choose a coin from the list and enter the amount
              </div>
              <form className={s.form}>
                  <div className={s.valute__input}>
                      <label>Send crypto</label>
                      <div className={s.inputs}>
                          <select onChange={(e)=> setDepositValute(e.target.value)}>
                              {wallets && wallets.map((wallet,i) => {
                                  return <option value={wallet.name}>{wallet.name}</option>
                              })}
                          </select>
                          <input type="text" placeholder={"1000"} onChange={(e)=> setAmount(e.target.value)} onBlur={(e)=> calculateValute(e.target.value)}/>
                      </div>
                  </div>
                  <div className={s.valute__input}>
                      <label>Recieve crypto</label>
                      <div className={s.inputs}>
                          <select onChange={(e) => setWithdrawValute(e.target.value)}>
                              {wallets && wallets.reverse().map((wallet,i) => {
                                  return <option value={wallet.name}>{wallet.name}</option>
                              })}
                          </select>
                          <div className={s.convert_block}>{convertValue}</div>
                      </div>
                  </div>
                  <div className={s.valute__input}>
                      <label>My crypto wallet address</label>
                      <div className={s.inputs}>
                          <input type="text" placeholder={"example@gmail.com"} style={{width: "100%"}}/>
                      </div>
                  </div>
                  <div className={s.valute__input}>
                      <label>Email for tracking the status of the application (optional)</label>
                      <div className={s.inputs}>
                          <input type="text" placeholder={"example@gmail.com"} style={{width: "100%"}}/>
                      </div>
                  </div>
                  <button>Change crypto</button>
              </form>
          </section>
          <section className={s.available}>
              <div className={s.available__title}>Available coins</div>
              <div className={s.available__subtitle}>
                  Coins you can exchange with us
              </div>
          </section>
          <section className={s.advantages}>
              <div className={s.advantages__title}>
                  Why should you choose our service?
              </div>
              <div className={s.advantages__subtitle}>
                  You can always make a fast exchange with crypto you need by using hit-exchange.com.
              </div>
              <div className={s.block}>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
                  <div className={s.item}>
                      <img src="./img/clock.png" alt="clock"/>
                      <div className={s.info}>
                          <div className={s.info__title}>Best exchange rate of cryptocurrency</div>
                          <div className={s.info__subtitle}>Automated system for processing applications. Tools for controlling status and time of the converting.</div>
                      </div>
                  </div>
              </div>
          </section>
          <section className={s.valutes}>
              <div className={s.valutes__title}>A wide range of cryptocurrencies to exchange.</div>
              <div className={s.valutes__subtitle}>Our service provides operations with a wide selection of cryptocurrencies.
              </div>
              <div className={s.valutes_block}>
                  <img src="./img/p1.png" alt="valute"/>
                  <img src="./img/p2.png" alt="valute"/>
                  <img src="./img/p3.png" alt="valute"/>
                  <img src="./img/p4.png" alt="valute"/>
                  <img src="./img/p5.png" alt="valute"/>
                  <img src="./img/p6.png" alt="valute"/>
                  <img src="./img/p7.png" alt="valute"/>
                  <img src="./img/p8.png" alt="valute"/>
              </div>
          </section>
          <section className={s.contact}>
              <div className={s.contact__title}>Contacts</div>
              <div className={s.contact__subtitle}>Fill the form and we will answer all your questions</div>
              <div className={s.contact_block}>
                  <form>
                      <input type="text" placeholder={"Name"}/>
                      <input type="text" placeholder={"Email or mobile"}/>
                      <button>Send</button>
                  </form>
                  <div className={s.contact_info}>
                      <div className={s.contact_info__title}>
                          We are always happy to help our clients!
                      </div>
                      <div className={s.contact_info__subtitle}>
                          Are you left with any questions or faced any troubles while using our service, please let us know!
                          Contact our support we will do our best to help you! <br/>
                          Telegram: @hitexchange_support
<br/> <br/>
                          Email: support@hit-exchange.com
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Landing;
