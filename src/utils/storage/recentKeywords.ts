import { STORAGE_KEYS } from '../../constants/storage';

export const getRecentKeywords = (): string[] => {
  const keywords = localStorage.getItem(STORAGE_KEYS.RECENT_KEYWORDS);
  return keywords ? JSON.parse(keywords) : [];
};

export const addRecentKeyword = (keyword: string): void => {
  const keywords = getRecentKeywords();
  
  // 이미 존재하는 키워드 제거
  const filteredKeywords = keywords.filter(k => k !== keyword);
  
  // 새로운 키워드를 앞에 추가
  filteredKeywords.unshift(keyword);
  
  // 최대 개수 3개로 유지
  const trimmedKeywords = filteredKeywords.slice(0, STORAGE_KEYS.MAX_RECENT_KEYWORDS);
  
  localStorage.setItem(STORAGE_KEYS.RECENT_KEYWORDS, JSON.stringify(trimmedKeywords));
};

export const removeRecentKeyword = (keyword: string): void => {
  const keywords = getRecentKeywords();
  const filteredKeywords = keywords.filter(k => k !== keyword);
  localStorage.setItem(STORAGE_KEYS.RECENT_KEYWORDS, JSON.stringify(filteredKeywords));
}; 