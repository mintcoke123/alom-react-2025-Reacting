const SEARCH_RESULTS_KEY = 'searchResults';

export function saveSearchResult(keyword: string, data: any) {
  const prev = JSON.parse(localStorage.getItem(SEARCH_RESULTS_KEY) || '{}');
  prev[keyword] = data;
  localStorage.setItem(SEARCH_RESULTS_KEY, JSON.stringify(prev));
}

export function getSearchResult(keyword: string) {
  const all = JSON.parse(localStorage.getItem(SEARCH_RESULTS_KEY) || '{}');
  return all[keyword];
}

export function logAllSearchResults() {
  const all = JSON.parse(localStorage.getItem(SEARCH_RESULTS_KEY) || '{}');
  console.log('All search results:', all);
} 