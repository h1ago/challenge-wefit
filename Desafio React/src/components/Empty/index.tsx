import React from 'react';
import * as S from './styles';
import * as C from '../styles';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import WomanSvg from '@/assets/images/woman.svg';

interface Props {
  isReload?: boolean;
}

const Empty = ({ isReload = true }: Props) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <C.MessageText>{i18n.t('empty')}</C.MessageText>
      <S.Wrapper>
        <WomanSvg />
      </S.Wrapper>
      {isReload ? (
        <S.Button onClick={() => window.location.reload()}>
          {i18n.t('pageReload')}
        </S.Button>
      ) : (
        <S.Button onClick={() => navigate('/')}>{i18n.t('back')}</S.Button>
      )}
    </S.Container>
  );
};

export default Empty;
