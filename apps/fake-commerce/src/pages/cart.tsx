import dynamic from 'next/dynamic';

const ShoppingCart = dynamic(() => import('shared/src/components/ShoppingCart'), { ssr: false });

export default ShoppingCart;
