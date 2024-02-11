import React from 'react';
import {RootStackScreenProps} from '../../../navigation';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import AppImages from '../../../enums/AppImages';
import Screen from '../../../compoent/Screen';

export default React.memo((props: RootStackScreenProps<'splash'>) => {
  // #region Logger
  const getLogMessage = (message: string) => {
    return `## Splash Screen: ${message}`;
  };

  // #endregion

  // #region Redux

  // #region Variables
  const {navigation} = props;
  const opacity = React.useRef(new Animated.Value(1));
  const translateY = React.useRef(new Animated.Value(0));
  // #endregion

  // #region State
  const [bootSplashIsVisible, setBootSplashIsVisible] =
    React.useState<boolean>(true);

  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] =
    React.useState<boolean>(false);

  // #region Setup
  React.useEffect(() => {
    if (bootSplashLogoIsLoaded) {
    }
  }, [bootSplashLogoIsLoaded]);

  React.useEffect(() => {
    const hideSplash = async () => {
      console.info(getLogMessage('hideSplash'));

      try {
        await RNBootSplash.hide();

        Animated.stagger(250, [
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: -50,
          }),
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: Dimensions.get('window').height,
          }),
        ]).start();

        Animated.timing(opacity.current, {
          useNativeDriver: true,
          toValue: 0,
          duration: 150,
          delay: 350,
        }).start(() => {
          setBootSplashIsVisible(false);
          openNextScreen();
        });
      } catch (error) {
        console.warn(
          getLogMessage('Error while calling "RNBootSplash.hide"'),
          error,
        );

        setBootSplashIsVisible(false);
        openNextScreen();
      }
    };

    const openNextScreen = () => {
      console.info(getLogMessage('openNextScreen'));
      navigation.replace('login');
    };

    // Check if register visibility, language and user loaded then:
    // - If user available in state then:
    //   - Open home screen.
    // - Else:
    //   - Open login screen.
    if (true) {
      hideSplash();
    }
  }, [navigation]);

  return (
    <Screen>
      {bootSplashIsVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.bootSplash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={AppImages.BOOT_SPLASH_LOGO}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              {transform: [{translateY: translateY.current}]},
            ]}
          />
        </Animated.View>
      )}
    </Screen>
  );
});
const styles = StyleSheet.create({
  bootSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 89,
    width: 100,
  },
});
