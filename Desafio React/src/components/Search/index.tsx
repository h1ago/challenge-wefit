import React, { useState } from 'react';
import * as S from './styles';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';
import SearchSvg from '@/assets/images/search.svg';

const Search = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    value.length && navigate(`/search?search-query=${value}`);
  };

  return (
    <S.Container onBlur={handleClick}>
      <S.Input
        type="text"
        placeholder={i18n.t('placeholder')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <S.Wrapper onClick={handleClick}>
        <S.Icon as={SearchSvg} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Search;
