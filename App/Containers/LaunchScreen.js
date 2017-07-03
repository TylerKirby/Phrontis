import React from 'react';
import { Text, View } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>
          Phrontis
        </Text>
        <View>
          <RoundedButton
            text="VOCABULARY"
            onPress={() => this.props.navigation.navigate('UnitSelectScreen')}
          />
        </View>
      </View>
    )
  }
}
