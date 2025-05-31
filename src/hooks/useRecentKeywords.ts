import { useState, useEffect } from 'react';
import { getRecentKeywords, addRecentKeyword, clearRecentKeywords } from '../utils/storage/recentKeyword';

export const useRecentKeywords = () => {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    setKeywords(getRecentKeywords());
  }, []);

  const addKeyword = (keyword: string) => {
    addRecentKeyword(keyword);
    setKeywords(getRecentKeywords());
  };

  const clearKeywords = () => {
    clearRecentKeywords();
    setKeywords([]);
  };

  return {
    keywords,
    addKeyword,
    clearKeywords,
  };
}; 