import React from 'react';
import Button from '../components/Button';
import Link from '../components/Link';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import PancakeLogo from '../assets/pancakeswap-cake-logo.svg'
import BackgroundImage from '../assets/micro-shiba-background-2.svg'

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40 bg-primary-lightest">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Micro Shiba Inu
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Micro Shiba Inu (MSI) is the successor of Shiba Inu. The bone has been passed over in order to improve the lift off and create new opportunities for the ones who missed the first. 
          </p>
          <p className="mt-8 md:mt-12">
            <Link size="lg" url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x310484b650190355539c8d4cccc7d06e3d1314be">
              <PancakeLogo style={{width: '22', height: '22', marginRight: '1rem'}} />
              Buy on Pancake Swap
            </Link>
          </p>
          <p className="mt-4 text-gray-800">Set slippage to 10-12% and use 20-100 gwei</p>
        </div>
        <div className="lg:w-1/2 px-8 pt-8 lg:py-0">
          <BackgroundImage />
        </div>
      </div>
    </section>
    <section id="about" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About $MSI</h2>
        <p className="text-xl mt-8 md:mt-12">
        The mission of Micro Shiba Inu is to travel to the Moon and beyond. What is beyond? <br/>
        Let's find out together as a community. One thing is for sure; Earth's civilians will thrive to accumulate Micro Shiba Inu and keep it as their ticket for a never ending travel.
        </p>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Chart</p>
              <p className="mt-4">
                You can find our chart on <a href="https://poocoin.app/tokens/0x310484b650190355539c8d4cccc7d06e3d1314be" target="_blank">Poocoin</a>
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Purchase</p>
              <p className="mt-4">
                You can buy our tokens on <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x310484b650190355539c8d4cccc7d06e3d1314be" target="_blank">Pancake Swap</a>
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">LP & Ownership</p>
              <p className="mt-4">
                <a href="https://bscscan.com/tx/0x0ff89d471bb649482d8e56b31d9e2e5376cd05d25553695c70c3762f2bdc1bc0" target="_blank">LP locked</a> <br/>
                <a href="https://bscscan.com/tx/0x2bea2d123ab504e17f4b0110f441f126b3b3107920d40911b26b0fe13891d543" target="_blank">Ownership renounced</a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to buy Micro Shiba Inu?</h3>
      <p className="mt-8">
      <Link size="lg" url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x310484b650190355539c8d4cccc7d06e3d1314be">
        <PancakeLogo style={{width: '22', height: '22', marginRight: '1rem'}} />
        Buy on Pancake Swap
      </Link>
      </p>
    </section>
  </Layout>
);

export default Index;
