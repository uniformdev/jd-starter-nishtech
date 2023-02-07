import { useCallback, useMemo } from 'react';
import useStorage from './useStorage';

// FixMe. Must be reworked to Context, isModalCartOpen must be in state
const useCart = () => {
  const [cart, setCart] = useStorage<Type.Cart>('user-cart', {});
  const [isModalCartOpen, setIsModalCartOpen] = useStorage<boolean>('user-cart-open', false);

  const setModalCartOpen = useCallback(
    (isOpen: boolean): void => setIsModalCartOpen(isOpen, { force: true }),
    [setIsModalCartOpen]
  );

  const addItemToCart = useCallback(
    (item: Type.CartItem) => {
      const cartItem = cart[item.product.id];

      if (cartItem) {
        setCart({
          [item.product.id]: {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          },
        });
      } else {
        setCart({ [item.product.id]: item });
      }

      setModalCartOpen(true);
    },
    [cart, setModalCartOpen, setCart]
  );

  const removeItemFromCart = useCallback(
    (productId: string) => {
      const updatedCart = Object.entries(cart).reduce<Type.Cart>((acc, [key, value]) => {
        if (key !== productId) acc[key] = value;
        return acc;
      }, {});
      if (!Object.keys(updatedCart).length) setModalCartOpen(false);
      setCart(updatedCart, { force: true });
    },
    [cart, setCart, setModalCartOpen]
  );

  const updateItemQuantity = useCallback(
    (productId: string, quantity: number) => {
      const cartItem = cart[productId];
      if (!cartItem) return;
      setCart({ [productId]: { ...cartItem, quantity } });
    },
    [cart, setCart]
  );

  const totalCartItemsCount = useMemo(
    () => Object.values(cart).reduce((acc, cartItem) => acc + cartItem.quantity, 0),
    [cart]
  );

  const cartAmount = useMemo(
    () => Object.values(cart).reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.product.price, 0),
    [cart]
  );

  return {
    cart,
    cartAmount,
    totalCartItemsCount,
    isModalCartOpen,
    setModalCartOpen,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
  };
};

export default useCart;
