import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './src/screens/SignInScreen';
import BackupScreen from './src/screens/BackupScreen';
import CounterScreen from './src/screens/CounterScreen';
import ModeScreen from './src/screens/ModeScreen';

const navigator = createStackNavigator(
  {
    Signin: SignInScreen,
    Backup: BackupScreen,
    Counter: CounterScreen,
    Mode: ModeScreen
  },
  {
    initialRouteName: 'Mode',
    defaultNavigationOptions: {
      title: 'Testing'
    }
  }
);

export default createAppContainer(navigator);
