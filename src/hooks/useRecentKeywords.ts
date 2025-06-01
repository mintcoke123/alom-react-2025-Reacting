import { useState, useEffect } from 'react';
import { getRecentKeywords, addRecentKeyword, removeRecentKeyword } from '../utils/storage/recentKeywords';

export const useRecentKeywords = () => {
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    setKeywords(getRecentKeywords());
  }, []);

  const addKeyword = (keyword: string) => {
    addRecentKeyword(keyword);
    setKeywords(getRecentKeywords());
  };

  const clearKeywords = (keyword: string) => {
    removeRecentKeyword(keyword);
    setKeywords([]);
  };

  return {
    keywords,
    addKeyword,
    clearKeywords,
  };
};
