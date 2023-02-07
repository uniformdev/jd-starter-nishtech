import React, { FC, useMemo } from 'react';
import Container from './Container';
import CurrencyFormatter from './CurrencyFormatter';
import ButtonAction from './atoms/ButtonAction';
import InformationContent from './atoms/InformationContent';
import ShoppingCartItem from './ShoppingCartItem';
import useCart from '../hooks/useCart';
import IconCart from './icons/IconCart';

const ShoppingCart: FC = () => {
  const { cart, cartAmount, updateItemQuantity, removeItemFromCart } = useCart();

  const cartItems = useMemo(() => Object.values(cart).map(cartItem => cartItem), [cart]);

  const hasItems = Boolean(cartItems.length);

  return (
    <Container>
      <div className="md:pt-14 lg:mb-28">
        {hasItems && (
          <div className="md:flex flex-row font-bold border-b pb-4 hidden">
            <div className="basis-3/5">ITEM</div>
            <div className="basis-1/5">QTY</div>
            <div className="basis-1/5 text-right">Price</div>
          </div>
        )}
        {hasItems ? (
          cartItems.map(cartItem => (
            <ShoppingCartItem
              updateItemQuantity={updateItemQuantity}
              removeItemFromCart={removeItemFromCart}
              key={cartItem.product.id}
              quantity={cartItem.quantity}
              product={cartItem.product}
            />
          ))
        ) : (
          <InformationContent
            title="Your shopping cart is empty"
            text="Products added to the cart will appear here."
            imageComponent={<IconCart width={75} height={75} />}
          />
        )}
        {hasItems && (
          <div className="pt-9">
            <div className="flex flex-row justify-end font-bold text-2xl">
              <span className="pr-4">Subtotal:</span>
              <CurrencyFormatter amount={cartAmount} />
            </div>
            <div className="flex flex-row justify-end">
              <ButtonAction
                className="border-2 mt-9 h-12 group lg:mb-32 sm:justify-center sm:mx-0 mx-auto"
                styleType="primary"
                disabled
              >
                <span className="group-hover:text-white text-black font-bold text-sm tracking-wider">
                  Proceed to Checkout
                </span>
              </ButtonAction>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ShoppingCart;
