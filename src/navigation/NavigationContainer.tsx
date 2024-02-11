import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootStack from './RootStack';
import {navigationRef} from './NavigationUtils';

export default React.memo(() => {
  const routeNameRef = React.useRef<string | undefined>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          // await analytics().logScreenView({
          //   screen_name: currentRouteName,
          //   screen_class: currentRouteName,
          // });
        }

        // Save the current route name for later comparison.
        routeNameRef.current = currentRouteName;
      }}>
      <RootStack />
    </NavigationContainer>
  );
});
