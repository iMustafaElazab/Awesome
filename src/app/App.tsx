import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useAppTheme} from '../utils/Theme';
import AppContent from './AppContent';

export default React.memo(() => {
  const theme = useAppTheme();

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={StyleSheet.compose(styles.container, {
          backgroundColor: theme.colors.background,
        })}>
        <AppContent />
      </View>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
