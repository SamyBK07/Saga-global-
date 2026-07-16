const STORAGE_KEY = "saga_search_history";
const MAX_HISTORY = 5;

export const getSearchHistory = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const addToSearchHistory = (query) => {
  const trimmed = query.trim();
  if (!trimmed) return getSearchHistory();

  const current = getSearchHistory().filter(
    (q) => q.toLowerCase() !== trimmed.toLowerCase()
  );
  const updated = [trimmed, ...current].slice(0, MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
