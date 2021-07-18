import React from 'react';
import { useTranslation } from 'next-i18next';
import * as T from './Avatar.types';
import * as S from './Avatar.styles';

const AvatarContainer = ({ src, alt, size }: T.AvatarProps) => {
  const { t } = useTranslation(['common']);

  return (
    <S.Wrapper size={size}>
      <S.Picture>
        {t('common:brand.name')}
        <S.Avatar src={src} alt={alt}/>
      </S.Picture>
    </S.Wrapper>
  )
};

export default AvatarContainer;
