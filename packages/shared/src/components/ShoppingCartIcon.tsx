import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import IconCart from './icons/IconCart';
import useCart from '../hooks/useCart';

interface Props {
  cartUrl: string;
}

const ShoppingCartIcon: FC<Props> = ({ cartUrl }) => {
  const { totalCartItemsCount } = useCart();

  return (
    <Link
      aria-label="header-cart"
      className={classNames('flex items-center cursor-pointer justify-end', {
        'justify-between': Boolean(totalCartItemsCount),
      })}
      href={cartUrl}
    >
      {Boolean(totalCartItemsCount) && (
        <div className="full pr-1.5 navbar-item font-extrabold">{totalCartItemsCount}</div>
      )}
      <IconCart width={24} height={24} />
    </Link>
  );
};

export default ShoppingCartIcon;
