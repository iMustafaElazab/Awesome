import React from 'react';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';
import App from './app/App';

enableScreens();

function AppEntry({isHeadless}: {isHeadless?: boolean}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore.
    return null;
  }

  return (
    <React.Suspense>
      <App />
    </React.Suspense>
  );
}

export default AppEntry;
