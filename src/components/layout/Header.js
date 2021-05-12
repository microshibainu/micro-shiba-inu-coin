import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../assets/logo-micro-shiba-inu.svg';
import PancakeLogo from '../../assets/pancakeswap-cake-logo.svg';
import Link from '../../components/Link';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Logo />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#home">
          Home
        </AnchorLink>
        <AnchorLink className="px-4" href="#about">
          About
        </AnchorLink>
        <a href="https://poocoin.app/tokens/0x310484b650190355539c8d4cccc7d06e3d1314be" target="_blank" className="px-4">
          Chart
        </a>
        <a href="https://bscscan.com/address/0x310484b650190355539c8d4cccc7d06e3d1314be" target="_blank" className="px-4">
          Contract
        </a>
      </div>
      <div className="hidden md:block">
        <Link url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x310484b650190355539c8d4cccc7d06e3d1314be">
          <PancakeLogo style={{width: '22', height: '22', marginRight: '1rem'}} />
          Buy $MSI
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
