const getStorage = () => (typeof window !== 'undefined' ? window.localStorage : null);

export const getStorageItem = <T>(key: string): T | null => {
  const localStorage = getStorage();
  if (!localStorage) return null;

  const localStorageStr = localStorage.getItem(key);
  if (!localStorageStr) return null;

  return JSON.parse(localStorageStr);
};

export const updateStorageItem = <T>(key: string, data: T, force = false): void => {
  const localStorage = getStorage();
  if (!localStorage) return;

  const localStorageStr = localStorage.getItem(key);
  const localStorageObj = localStorageStr ? JSON.parse(localStorageStr) : {};
  const nextLocalStorageObj = force ? data : { ...localStorageObj, ...data };

  localStorage.setItem(key, JSON.stringify(nextLocalStorageObj));
};
