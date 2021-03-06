import {Platform as _Platform} from 'react-native';

function isElectron() {
  // Renderer process
  if (
    typeof window !== 'undefined' &&
    typeof window.process === 'object' &&
    window.process.type === 'renderer'
  ) {
    return true;
  }

  // Main process
  if (
    typeof process !== 'undefined' &&
    typeof process.versions === 'object' &&
    !!process.versions.electron
  ) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to true
  if (
    typeof navigator === 'object' &&
    typeof navigator.userAgent === 'string' &&
    navigator.userAgent.indexOf('Electron') >= 0
  ) {
    return true;
  }

  return false;
}

export const Platform = {
  ..._Platform,
  isElectron: isElectron(),
  isNative: _Platform.OS === 'android' || _Platform.OS === 'ios' || _Platform.OS === 'macos',
  isWeb: _Platform.OS === 'web',
};
