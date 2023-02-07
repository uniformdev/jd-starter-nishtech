import { FC } from 'react';
import NavigationHeader from 'shared/src/components/NavigationHeader';
import NavigationLink from 'shared/src/components/NavigationLink';
import { AppNavigation } from '@/constants';

const Header: FC = () => (
  <NavigationHeader>
    {AppNavigation.map(({ title, link }) => (
      <NavigationLink key={title} title={title} link={link} />
    ))}
  </NavigationHeader>
);

export default Header;
