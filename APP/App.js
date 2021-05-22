import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Block, GalioProvider } from 'galio-framework';
import AppLoading from 'expo-app-loading';

import Login from './screens/Login'
import Intro from './screens/Intro'
import PassChange from './screens/PassChange'

import * as Font from 'expo-font';
import { Images, articles, nowTheme } from './constants';

const Stack = createStackNavigator();

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontLoaded: false
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <NavigationContainer>
          <GalioProvider theme={nowTheme}>
            <Block flex>
              <Stack.Navigator>
                <Stack.Screen
                  name="Intro"
                  component={Intro}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                />
                <Stack.Screen
                  name="PassChange"
                  component={PassChange}
                />
              </Stack.Navigator>
            </Block>
          </GalioProvider>
        </NavigationContainer>
      );
    }
  }

_loadResourcesAsync = async () => {
  await Font.loadAsync({
    'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
  });

  this.setState({ fontLoaded: true });
  return Promise.all([...cacheImages(assetImages)]);
};

_handleLoadingError = error => {
  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  console.warn(error);
};

_handleFinishLoading = () => {
  if (this.state.fontLoaded) {
    this.setState({ isLoadingComplete: true });
  }
};
}