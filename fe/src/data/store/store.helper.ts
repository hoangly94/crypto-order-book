import storage from "redux-persist/lib/storage";

export const getPersistConfig = (name: string) => ({
  key: name,
  storage,
});
