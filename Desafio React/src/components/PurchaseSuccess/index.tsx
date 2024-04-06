import React from 'react';
import * as S from './styles';
import * as C from '../styles';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import ManSvg from '@/assets/images/man.svg';

const PurchaseSuccess = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <C.MessageText>{i18n.t('purchaseCompleted')}</C.MessageText>
      <ManSvg />
      <C.Button onClick={() => navigate('/')}>{i18n.t('back')}</C.Button>
    </S.Container>
  );
};

export default PurchaseSuccess;
