import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/searchPage.style';
import { getRecentKeywords, addRecentKeyword } from '../utils/storage/recentKeywords';
import { SearchPageConstant } from '../constants/search.constant';
import { getKeywordToObject } from '../utils/getKeywordToObject';
import { saveSearchResult } from '../utils/storage/searchResults';

const SearchRecentContainer = () => {
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const navigate = useNavigate();
  const { placeholder, emptyMessage } = SearchPageConstant.SearchRecentContainer;

  useEffect(() => {
    setRecentKeywords(getRecentKeywords());
  }, []);

  const handleKeywordClick = async (keyword: string) => {
    try {
      const result = await getKeywordToObject(keyword);
      if (result) {
        addRecentKeywordAndResult(keyword, result);
        navigate('/mapPage', { state: { searchValue: keyword } });
      } else {
        alert('검색 결과가 없습니다.');
      }
    } catch (e) {
      alert('API 호출 실패');
    }
  };

  const searchResults = JSON.parse(localStorage.getItem('searchResults') || '{}');
  const matchedResults = recentKeywords.map((keyword) => searchResults[keyword]);
  console.log(matchedResults);

  return (
    <S.RecentContainer>
      <S.RecentRow>
        <S.RecentLabel>{placeholder}</S.RecentLabel>
        <S.RecentKeywords>
          {recentKeywords.length > 0 ? (
            recentKeywords.map((keyword, index) => (
              <S.Keyword key={index} onClick={() => handleKeywordClick(keyword)}>
                {keyword}
              </S.Keyword>
            ))
          ) : (
            <S.EmptyMessage>{emptyMessage}</S.EmptyMessage>
          )}
        </S.RecentKeywords>
      </S.RecentRow>
    </S.RecentContainer>
  );
};

export default SearchRecentContainer;

export function addRecentKeywordAndResult(keyword: string, data: any) {
  // 1. recentKeywords 관리 (최신 3개)
  let keywords = JSON.parse(localStorage.getItem('recentKeywords') || '[]');
  keywords = [keyword, ...keywords.filter((k: string) => k !== keyword)].slice(0, 3);
  localStorage.setItem('recentKeywords', JSON.stringify(keywords));

  // 2. searchResults 관리 (recentKeywords에 있는 것만 남김)
  const prev = JSON.parse(localStorage.getItem('searchResults') || '{}');
  prev[keyword] = data;
  const trimmedResults: Record<string, any> = {};
  keywords.forEach((k: string) => {
    if (prev[k]) trimmedResults[k] = prev[k];
  });
  localStorage.setItem('searchResults', JSON.stringify(trimmedResults));
}
