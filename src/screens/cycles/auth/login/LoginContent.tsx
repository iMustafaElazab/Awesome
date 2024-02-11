import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {AppColors} from '../../../../enums';
import {Text} from 'react-native-paper';
import {TextInput as PaperInput} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

export default React.memo(() => {
  const {t: translate} = useTranslation();

  return (
    <View style={styles.container}>
      {iconHeader()}
      {textContent()}
    </View>
  );
});

const iconHeader = () => {
  return (
    <Image
      source={require('../../../../assets/imgs/mtc.png')}
      style={styles.app_icon}
    />
  );
};

const textContent = () => {
  return (
    <>
      <Text
        style={StyleSheet.compose(styles.textContent, {
          marginTop: ms(16),
        })}>
        {translate('app_name')}
      </Text>

      <Text
        style={StyleSheet.compose(styles.textContent, {
          marginTop: ms(8),
          fontSize: 16,
        })}>
        Don`t Have Account?
        <Text
          style={StyleSheet.compose(styles.textContent, {
            marginTop: ms(8),
            fontSize: 16,
            color: AppColors.THEME_LIGHT_PRIMARY,
          })}
          onPress={() => {
            /*your on press event here */
          }}>
          {' '}
          Create account
        </Text>
      </Text>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: ms(16),
    marginVertical: ms(8),
    backgroundColor: AppColors.BACKGROUND,
  },
  app_icon: {
    width: ms(80),
    height: ms(50),
    marginTop: ms(16),
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
