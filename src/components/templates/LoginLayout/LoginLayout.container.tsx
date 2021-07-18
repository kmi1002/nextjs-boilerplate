import React from 'react';
import Header from '@/organisms/Header';
import * as T from './LoginLayout.type';
import * as S from './LoginLayout.style';

const LoginLayoutContainer = ({ children }: T.LoginLayoutProps) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
};

export default LoginLayoutContainer;
