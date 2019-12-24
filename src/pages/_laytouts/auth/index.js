import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content, ContentSignIn } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <ContentSignIn>{children}</ContentSignIn>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
