import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import VocabScreen from '../Containers/VocabScreen'
import UnitSelectScreen from '../Containers/UnitSelectScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
  },
  UnitSelectScreen: {
    screen: UnitSelectScreen,
    navigationOptions: { title: 'Unit Select' }
  },
  VocabScreen: {
    screen: VocabScreen,
    navigationOptions: { title: 'Vocabulary' }
  },
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default PrimaryNav
