import React from 'react';
import { FiSearch } from 'react-icons/fi';
import * as S from '../styles/mapPage.style';
import { addRecentKeywordAndResult } from './SearchRecentContainer';
import { getKeywordToObject } from '../utils/getKeywordToObject';

type SearchOnMapContainerProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchOnMapContainer: React.FC<SearchOnMapContainerProps> = ({ searchValue, setSearchValue }) => {
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      const result = await getKeywordToObject(searchValue.trim());

      if (result) {
        addRecentKeywordAndResult(searchValue.trim(), result);
        setSearchValue(searchValue.trim());
      } else {
        alert('검색 결과가 없습니다.');
      }
    }
  };

  return (
    <S.SearchContainer>
      <S.InputWrapper>
        <S.SearchIcon>
          <FiSearch size={20} color="#688CEC" strokeWidth={3} />
        </S.SearchIcon>
        <S.InputSearch
          placeholder={searchValue}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </S.InputWrapper>
    </S.SearchContainer>
  );
};

export default SearchOnMapContainer;
