import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Micro Shiba Inu - Coin</title>
        <meta name="description" content="Decentralized Meme Tokens that grew into a vibrant ecosystem" />
        <meta name="keywords" content="shib, shiba, shiba inu, doge, bitcoin, ethereum, vitalik, elon musk, crypto, money, dog, nft, shibaswap, micro"></meta>
        <meta property="og:title" content="Micro Shiba Inu - Coin"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:description" content="Decentralized Meme Tokens that grew into a vibrant ecosystem"></meta>
      
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
