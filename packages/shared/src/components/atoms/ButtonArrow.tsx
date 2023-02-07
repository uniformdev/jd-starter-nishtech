import React, { FC } from 'react';
import classNames from 'classnames';
import IconArrow from '../icons/IconArrow';

interface Props {
  direction: 'left' | 'right';
  isDark?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonArrow: FC<Props> = ({ direction, isDark = false, onClick, disabled }) => (
  <button
    className={classNames(
      'flex items-center group justify-center w-12 h-12 border-2 cursor-pointer disabled:pointer-events-none disabled:opacity-60',
      { 'border-white hover:bg-white': isDark },
      { 'border-black bg-white hover:bg-black': !isDark }
    )}
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction} slide`}
    type="button"
  >
    <IconArrow
      direction={direction}
      fill={isDark ? 'white' : 'black'}
      className={isDark ? 'group-hover:fill-black' : 'group-hover:fill-white'}
    />
  </button>
);

export default ButtonArrow;
