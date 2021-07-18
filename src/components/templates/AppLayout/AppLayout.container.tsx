import React from 'react';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/stores';
import { AuthStateType } from '@/stores/auth/type';
import { logEvent } from '@/helpers/GAHelper';
import useAccount from '@/hooks/useAccount';
import Header from '@/organisms/Header';
import * as T from './AppLayout.type';
import * as S from './AppLayout.style';

const AppLayoutContainer = ({ children }: T.AppLayoutProps) => {
  const { authState } = useSelector((state: RootState) => state.auth);

  if (authState !== AuthStateType.LOGGED_IN) {
    Router.push('/login');
    return <></>;
  }

  return (
    <S.Wrapper>
      <S.Appbar>sidebar</S.Appbar>
      <S.Container>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default AppLayoutContainer;
