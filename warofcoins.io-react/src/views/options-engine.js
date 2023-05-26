import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './options-engine.css'

const OptionsEngine = (props) => {
  return (
    <div className="options-engine-container">
      <Helmet>
        <title>Options-Engine - WarofCoins.io</title>
        <meta
          name="description"
          content="Learn about War of Coins's options engine and model."
        />
        <meta property="og:title" content="Options-Engine - WarofCoins.io" />
        <meta
          property="og:description"
          content="Learn about War of Coins's options engine and model."
        />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="options-engine-container01">
        <h1 className="options-engine-text">Options Engine</h1>
        <div className="options-engine-container02">
          <h1 className="options-engine-text001 Heading">Overview</h1>
          <span className="options-engine-text002">
            <span>
              Options trading is typically considered complex by many people. It
              comes with obscure terminology and is generally reserved for the
              most sophisticated traders who can digest the literature on the
              subject peppered with complex formulas. Despite all of that,
              buying an options contract is a remarkably straightforward
              proposition ‑ pay a small amount upfront in hopes of getting a big
              payout in case the price of the underlying asset changes
              favourably.
            </span>
            <br></br>
            <br></br>
            <span>
              The War of Coins game takes this simplicity one step further by
              offering a ladder of fixed payouts of up to 100 times the options
              purchase price. The user will only need to decide whether the
              price of the underlying asset (for example, ETH / USD rate) goes
              up or down and what amount of coin they want to pay. The system
              will calculate and produce the ladder of price points which will
              trigger one of the possible payouts, from payouts equal to the
              amount of purchase all the way to the payouts 100 times higher.
              The main advantage of War of Coins game is that unlike traditional
              options trades, the user does not have to decide on the price
              point ‑ all they have to do is to choose direction they believe
              the price is going towards. If the price changes in the way they
              anticipated, then they can collect their reward. But that&apos;s
              not all, because the further the price goes in the direction of
              their choice, the higher their reward will be.
            </span>
            <br></br>
            <br></br>
            <span>
              To make the War of Coins game more exciting and accessible, it
              focuses on ultra‑short timeframes. The options will mature every
              hour and the trading will be open 90 minutes before maturity and
              closes 30 minutes (possibly even less, pending improvement) on
              maturity time.
            </span>
            <br></br>
            <br></br>
            <span>
              This concept is illustrated by the following chart. The example
              shows the case where the user believes that the current ETH price
              ($1,400 in this case) is going to go up. The curve shows the
              probability density graph of the underlying model, and the shaded
              area under the curve represents the probability of the price to
              rich particular level. The probabilities are calculated in
              accordance with payout ladder. For example, in order to qualify
              for the payout 5 times higher than the purchase price, the price
              of ETH at maturity (which in this example is 2 hours away) must
              reach at least $1,430.53. If the price goes beyond $1,467.03 then
              the payout will be 20 times the purchase price, and so on.
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="War_of_Coins_Payouts_Logarithmic_Example"
            src="/eth%20usd%20payout%20example-1300w.png"
            className="options-engine-image"
          />
          <span className="options-engine-text016">
            The following table shows how the price ladder is going to change
            over the lifespan of the particular option. When the options trading
            opens, the prices are going to be at the highest. To qualify for the
            5x payout, the price would need to reach $1,437.48, (i.e.,
            appreciate by $37.48) in three hours. After one hour of trading this
            price will fall to $1,430.53, and by the time the trading closes 30
            minutes prior to maturity it will reach $1,415.18.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="options-engine-container03">
            <div className="options-engine-container04">
              <div className="options-engine-container05"></div>
              <div className="options-engine-container06">
                <span className="options-engine-text017 Content">3 hours</span>
              </div>
              <div className="options-engine-container07">
                <span className="options-engine-text018 Content">2 hours</span>
              </div>
              <div className="options-engine-container08">
                <span className="options-engine-text019 Content">1 hour</span>
              </div>
              <div className="options-engine-container09">
                <span className="options-engine-text020 Content">30 mins</span>
              </div>
            </div>
            <div className="options-engine-container10">
              <div className="options-engine-container11">
                <span className="options-engine-text021">100x</span>
              </div>
              <div className="options-engine-container12">
                <span className="options-engine-text022 Content">1602.55</span>
              </div>
              <div className="options-engine-container13">
                <span className="options-engine-text023 Content">1563.31</span>
              </div>
              <div className="options-engine-container14">
                <span className="options-engine-text024 Content">1513.59</span>
              </div>
              <div className="options-engine-container15">
                <span className="options-engine-text025 Content">1479.40</span>
              </div>
            </div>
            <div className="options-engine-container16">
              <div className="options-engine-container17">
                <span className="options-engine-text026">50x</span>
              </div>
              <div className="options-engine-container18">
                <span className="options-engine-text027 Content">1530.20</span>
              </div>
              <div className="options-engine-container19">
                <span className="options-engine-text028 Content">1505.43</span>
              </div>
              <div className="options-engine-container20">
                <span className="options-engine-text029 Content">1473.75</span>
              </div>
              <div className="options-engine-container21">
                <span className="options-engine-text030 Content">1451.76</span>
              </div>
            </div>
            <div className="options-engine-container22">
              <div className="options-engine-container23">
                <span className="options-engine-text031">20x</span>
              </div>
              <div className="options-engine-container24">
                <span className="options-engine-text032 Content">1482.53</span>
              </div>
              <div className="options-engine-container25">
                <span className="options-engine-text033 Content">1467.03</span>
              </div>
              <div className="options-engine-container26">
                <span className="options-engine-text034 Content">1447.07</span>
              </div>
              <div className="options-engine-container27">
                <span className="options-engine-text035 Content">1433.12</span>
              </div>
            </div>
            <div className="options-engine-container28">
              <div className="options-engine-container29">
                <span className="options-engine-text036">10x</span>
              </div>
              <div className="options-engine-container30">
                <span className="options-engine-text037 Content">1456.59</span>
              </div>
              <div className="options-engine-container31">
                <span className="options-engine-text038 Content">1446.04</span>
              </div>
              <div className="options-engine-container32">
                <span className="options-engine-text039 Content">1432.40</span>
              </div>
              <div className="options-engine-container33">
                <span className="options-engine-text040 Content">1422.83</span>
              </div>
            </div>
            <div className="options-engine-container34">
              <div className="options-engine-container35">
                <span className="options-engine-text041">5x</span>
              </div>
              <div className="options-engine-container36">
                <span className="options-engine-text042 Content">1437.48</span>
              </div>
              <div className="options-engine-container37">
                <span className="options-engine-text043 Content">1430.53</span>
              </div>
              <div className="options-engine-container38">
                <span className="options-engine-text044 Content">1421.52</span>
              </div>
              <div className="options-engine-container39">
                <span className="options-engine-text045 Content">1415.18</span>
              </div>
            </div>
            <div className="options-engine-container40">
              <div className="options-engine-container41">
                <span className="options-engine-text046">2x</span>
              </div>
              <div className="options-engine-container42">
                <span className="options-engine-text047 Content">1417.19</span>
              </div>
              <div className="options-engine-container43">
                <span className="options-engine-text048 Content">1414.02</span>
              </div>
              <div className="options-engine-container44">
                <span className="options-engine-text049">1409.90</span>
              </div>
              <div className="options-engine-container45">
                <span className="options-engine-text050 Content">1406.99</span>
              </div>
            </div>
            <div className="options-engine-container46">
              <div className="options-engine-container47">
                <span className="options-engine-text051">1x</span>
              </div>
              <div className="options-engine-container48">
                <span className="options-engine-text052 Content">1405.21</span>
              </div>
              <div className="options-engine-container49">
                <span className="options-engine-text053 Content">1404.25</span>
              </div>
              <div className="options-engine-container50">
                <span className="options-engine-text054 Content">1403.00</span>
              </div>
              <div className="options-engine-container51">
                <span className="options-engine-text055 Content">1402.12</span>
              </div>
            </div>
          </div>
        </div>
        <div className="options-engine-container52">
          <h1 className="options-engine-text056">
            <span className="Heading options-engine-text057">
              Data and Model
            </span>
            <br></br>
          </h1>
          <span className="options-engine-text059">
            <span>
              To offer high payouts in such a short period, we need a good
              volatility model. This model was developed using a 1-minute
              historical ETH/USD rate data snippet from coincompare.com. The
              data were analyzed over the period from July 27, 2002, to
              September 22, 2002.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span>
              Let&apos;s first check how the standard deviation absolute returns
              behave over various periods.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span>
              Absolute return is defined as r(t) = ln(S(t)/S(0)), where S(t) is
              the asset price over time t.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <br className="Content"></br>
            <span>
              For this analysis, changes over various periods from 5 minutes to
              90 minutes are calculated and then the standard deviation was
              determined for each of those series. The expectation is that the
              standard deviation is proportional to the square root of the
              period. The table below shows that the standard deviation
              normalized by the square root of the period is very close to a
              constant, and we will be using this assumption in our model.
            </span>
            <br className="Content"></br>
          </span>
          <div className="options-engine-container53">
            <div className="options-engine-container54">
              <div className="options-engine-container55">
                <span className="options-engine-text071 Content">Period</span>
              </div>
              <div className="options-engine-container56">
                <span className="options-engine-text072 Content">
                  Min Sigma
                </span>
              </div>
              <div className="options-engine-container57">
                <span className="options-engine-text073 Content">
                  Normalized Sigma
                </span>
              </div>
            </div>
            <div className="options-engine-container58">
              <div className="options-engine-container59">
                <span className="options-engine-text074 Content">5</span>
              </div>
              <div className="options-engine-container60">
                <span className="options-engine-text075">
                  <span className="Content">0.00263</span>
                  <br></br>
                </span>
              </div>
              <div className="options-engine-container61">
                <span className="options-engine-text078 Content">0.00118</span>
              </div>
            </div>
            <div className="options-engine-container62">
              <div className="options-engine-container63">
                <span className="options-engine-text079 Content">10</span>
              </div>
              <div className="options-engine-container64">
                <span className="options-engine-text080 Content">0.00369</span>
              </div>
              <div className="options-engine-container65">
                <span className="options-engine-text081 Content">0.00117</span>
              </div>
            </div>
            <div className="options-engine-container66">
              <div className="options-engine-container67">
                <span className="options-engine-text082 Content">15</span>
              </div>
              <div className="options-engine-container68">
                <span className="options-engine-text083 Content">0.00454</span>
              </div>
              <div className="options-engine-container69">
                <span className="options-engine-text084">0.00117</span>
              </div>
            </div>
            <div className="options-engine-container70">
              <div className="options-engine-container71">
                <span className="options-engine-text085 Content">30</span>
              </div>
              <div className="options-engine-container72">
                <span className="options-engine-text086 Content">0.00641</span>
              </div>
              <div className="options-engine-container73">
                <span className="options-engine-text087">0.00117</span>
              </div>
            </div>
            <div className="options-engine-container74">
              <div className="options-engine-container75">
                <span className="options-engine-text088 Content">45</span>
              </div>
              <div className="options-engine-container76">
                <span className="options-engine-text089 Content">0.00783</span>
              </div>
              <div className="options-engine-container77">
                <span className="options-engine-text090">0.00117</span>
              </div>
            </div>
            <div className="options-engine-container78">
              <div className="options-engine-container79">
                <span className="options-engine-text091 Content">60</span>
              </div>
              <div className="options-engine-container80">
                <span className="options-engine-text092 Content">0.00872</span>
              </div>
              <div className="options-engine-container81">
                <span className="options-engine-text093">0.00113</span>
              </div>
            </div>
            <div className="options-engine-container82">
              <div className="options-engine-container83">
                <span className="options-engine-text094 Content">90</span>
              </div>
              <div className="options-engine-container84">
                <span className="options-engine-text095 Content">0.01127</span>
              </div>
              <div className="options-engine-container85">
                <span className="options-engine-text096">0.00119</span>
              </div>
            </div>
          </div>
          <span className="options-engine-text097">
            <span>
              While the standard deviation over a long period of time is useful,
              we need to have an estimate of the standard deviation (volatility)
              for the upcoming period in short-term pricing models. We are using
              a 2-period model where the short-term historical volatility (over
              a few hours) is combined with long-term historical volatility, in
              this case, over 2 months.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <span>
              We have compared the behaviour of the standard deviation
              calculated over 2, 4 and 6 hours over time. The chart below shows
              that there is too much noise in 2- and 4-hour data, so we have
              chosen the 6-hour period for short-term volatility evaluation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="War_of_Coins_Standard_Deviation_Calculation_Example"
            src="/standarad%20deviation%20volatility%20example-1300w.png"
            className="options-engine-image1"
          />
          <span className="options-engine-text103">
            <span>
              The next chart shows a 6‑hour volatility over a period of 16 days.
              There is still much noise in this data because most of the changes
              in volatility are quickly reversed, which indicates that they were
              caused by a one‑off event and have little predictive value.
              Therefore, we have chosen to use combined volatility estimate that
              includes 33% of 6‑hour volatility data and 67% of 2‑month
              volatility data.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="War_of_Coins_Volatility_Example"
            src="/6%20hour%20volatility%20example-1300w.png"
            className="options-engine-image2"
          />
          <span className="options-engine-text107">
            <span>
              The next challenge is to find a proper model that describes the
              distribution of fluctuations in absolute returns r. Many commonly
              used models (such as Black‑Sholes) use geometric random walk
              assumption, which implies normal distribution of the r. It is not
              unreasonable to expect that for longer periods, the distribution
              will converge on normal, because longer-period changes in r are a
              sum of many changes over smaller periods, and the central limit
              theorem postulates that the resulting distribution converges on
              normal.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              The assumption of normality does not work well for short periods
              that we are interested in. Instead, we found Student&apos;s
              t-distribution is more appropriate to build a volatility model due
              to the small number of meaningful events driving price changes. It
              also addresses the &quot;fat tails&quot; effect that is crucial in
              the calculation of probabilities of higher payouts for short
              periods.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="options-engine-container86">
          <h1 className="options-engine-text114 Heading">Summary</h1>
          <span className="options-engine-text115">
            <span>
              We’ve accomplished a pricing model for short-term crypto asset
              options trading.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="Content"></br>
            <span>
              It constantly gives out better RTP than targeted ones, and it has
              the potential to extend the trading period to a shorter time
              before the maturity from the current 30 minutes. The model has a
              set of parameters regarding overall data sampling and volatility
              calculations that are tunable in real-time to best fit real market
              movements.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default OptionsEngine
