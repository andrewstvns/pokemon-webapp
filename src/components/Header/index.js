import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, HeaderCentering, HeaderList, HeaderContent } from './header.element';

const Header = () => {
  return (
    <HeaderWrapper>
          <HeaderCentering>
            <HeaderList>
              <Link to='/' target='_self'>
                <HeaderContent>Pokemon List</HeaderContent>
              </Link>
              <Link to='pokemon/my-pokemon' target='_self'>
                <HeaderContent>My Pokemon List</HeaderContent>
              </Link>
            </HeaderList>
          </HeaderCentering>
    </HeaderWrapper>
  )
};

export default Header;