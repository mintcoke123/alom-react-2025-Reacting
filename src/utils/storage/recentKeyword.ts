const RECENT_KEYWORDS_KEY = 'recentKeywords';
const MAX_RECENT_KEYWORDS = 5;

export const getRecentKeywords = (): string[] => {
  const keywords = localStorage.getItem(RECENT_KEYWORDS_KEY);
  return keywords ? JSON.parse(keywords) : [];
};

export const addRecentKeyword = (keyword: string): void => {
  const keywords = getRecentKeywords();
  const filteredKeywords = keywords.filter(k => k !== keyword);
  const updatedKeywords = [keyword, ...filteredKeywords].slice(0, MAX_RECENT_KEYWORDS);
  localStorage.setItem(RECENT_KEYWORDS_KEY, JSON.stringify(updatedKeywords));
};

export const clearRecentKeywords = (): void => {
  localStorage.removeItem(RECENT_KEYWORDS_KEY);
}; 