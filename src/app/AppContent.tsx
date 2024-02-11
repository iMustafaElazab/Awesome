import React from 'react';
import {useAppTheme} from '../utils/Theme';
import {PaperProvider} from 'react-native-paper';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '../utils/queryClient';
import NavigationContainer from '../navigation/NavigationContainer';

export default React.memo(() => {
  const theme = useAppTheme();

  // #region UI
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer />
      </QueryClientProvider>
    </PaperProvider>
  );
  // #endregion
});
