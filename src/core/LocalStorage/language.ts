import AppLanguages from '../../enums/AppLanguages';
import {getString, removeItem, setString, useLocalStorage} from './MMKVStorage';
import LocalStorageKeys from './keys';

const getLogMessage = (message: string) =>
  `## LocalStorage::language:: ${message}`;

export const useLocalStorageLanguage = () =>
  useLocalStorage(LocalStorageKeys.LANGUAGE);

export const getLanguage = async () => {
  console.info(getLogMessage('getLanguage'));
  const language = await getString(LocalStorageKeys.LANGUAGE);
  console.info(getLogMessage('language'), language);
  return language ? (language as AppLanguages) : null;
};

export const setLanguage = async (language: AppLanguages) => {
  console.info(getLogMessage('setLanguage'), language);
  const languageSaved = await setString(LocalStorageKeys.LANGUAGE, language);
  console.info(getLogMessage('languageSaved'), languageSaved);
  return languageSaved;
};

export const removeLanguage = () => {
  console.info(getLogMessage('removeLanguage'));
  const languageRemoved = removeItem(LocalStorageKeys.LANGUAGE);
  console.info(getLogMessage('languageRemoved'), languageRemoved);
  return languageRemoved;
};
