import React from 'react';
import * as S from '../styles/searchPage.style';
import SearchContainer from './SearchContainer';
import SearchTitleContainer from './SearchTitleContainer';

const SearchPage: React.FC = () => {

  return (
    <S.SearchPageContainer>
      <SearchTitleContainer />
      <SearchContainer />
    </S.SearchPageContainer>
  );
};

export default SearchPage;
