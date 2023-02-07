import React, { ReactElement, FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { BaseContainer } from './Container';
import IconHeaderLogo from './icons/IconHeaderLogo';
import IconArrow from './icons/IconArrow';
import IconHamburger from './icons/IconHamburger';
import { togglePageScroll } from '../utils';
import { AppPages } from '../constants';

interface Props {
  children: ReactElement[];
  cartIcon?: ReactElement;
}

const AppLogo = () => (
  <Link href={AppPages.Home} className="cursor-pointer" passHref aria-label="Home">
    <IconHeaderLogo />
  </Link>
);

const NavigationHeader: FC<Props> = ({ children, cartIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRouteChangeStart = useCallback(() => {
    setIsOpen(false);
    togglePageScroll(true);
  }, []);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
    togglePageScroll();
  }, []);

  useEffect(() => {
    router?.events.on('routeChangeStart', handleRouteChangeStart);
    return () => router?.events.off('routeChangeStart', handleRouteChangeStart);
  }, [router?.events, handleRouteChangeStart]);

  return (
    <header className="relative border-b" role="navigation" aria-label="main-navigation">
      <BaseContainer className="w-full hidden lg:flex lg:flex-row lg:items-center lg:place-content-between lg:py-4">
        <div className={classNames('flex justify-between', { 'w-full': Boolean(cartIcon) })}>
          <div className="min-w-[400px]">
            <AppLogo />
          </div>

          <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:pl-50 pb-10 lg:pb-0">
            {children}
          </div>
          {cartIcon && <div className="flex min-w-[40px]">{cartIcon}</div>}
        </div>
      </BaseContainer>
      <div className="w-full lg:hidden flex h-20 flex-row items-center px-5 justify-between ">
        <div className="basis-3/6">
          <AppLogo />
        </div>
        <div className="flex flex-row justify-between items-center">
          <button
            type="button"
            aria-label="mobile navigation"
            className="w-6 h-6 inline-flex focus:outline-none"
            onClick={toggleIsOpen}
          >
            {isOpen ? <IconArrow fill="black" /> : <IconHamburger fill="black" />}
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        {isOpen && (
          <div className="absolute bg-white flex flex-col items-center w-full h-screen z-[999] pt-16">
            <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:pl-5 pb-10 lg:pb-0">
              {children}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;
