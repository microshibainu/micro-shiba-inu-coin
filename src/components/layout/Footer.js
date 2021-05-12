import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8">
    <div class="text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">Follow us on Social Media</h2>
    </div>
      <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
          <a href="https://t.me/microshibainu" title="Micro Shiba Inu on Telegram" target="_blank"
            class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Telegram</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://twitter.com/microshibainu" title="Micro Shiba Inu on Twitter" target="_blank"
            class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Twitter</span>
          </a>
        </div>
        <div class="m-3">
          <a href="https://www.instagram.com/microshibainu/" title="Micro Shiba Inu on Instragram" target="_blank"
            class="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            <span class="mx-auto">Instagram</span>
          </a>
        </div>
      </div>
  </footer>
);

export default Footer;
