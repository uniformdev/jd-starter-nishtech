import React, { FC } from 'react';
import Link from 'next/link';
import { BaseContainer } from './Container';
import IconFooterLogo from './icons/IconFooterLogo';
import IconUniformLogo from './icons/IconUniformLogo';
import { AppPages } from '../constants';

const NavigationFooter: FC = () => (
  <footer className="bg-black mt-auto">
    <BaseContainer className="w-full flex lg:flex-row flex-col items-center lg:justify-between py-6 lg:py-11">
      <div className="flex flex-col items-center lg:items-start pb-4 lg:pb-0">
        <div className="w-48 pb-2">
          <Link href={AppPages.Home} passHref className="cursor-pointer" aria-label="Home">
            <IconFooterLogo />
          </Link>
        </div>
        <p className="text-white font-bold text-center lg:text-start">
          JavaDrip is a fictitious website for demo purposes only.
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-white font-bold">Powered by</p>
        <Link href={AppPages.Home} passHref className="inline-flex mx-4" aria-label="Home">
          <IconUniformLogo />
        </Link>
      </div>
    </BaseContainer>
  </footer>
);

export default NavigationFooter;
