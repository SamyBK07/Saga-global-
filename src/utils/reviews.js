const STORAGE_KEY = "saga_reviews";

const readAll = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeAll = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getReviews = (productId) => {
  const all = readAll();
  return all[productId] || [];
};

export const addReview = (productId, review) => {
  const all = readAll();
  const list = all[productId] || [];
  const newReview = { ...review, date: new Date().toISOString() };
  all[productId] = [newReview, ...list];
  writeAll(all);
  return all[productId];
};
