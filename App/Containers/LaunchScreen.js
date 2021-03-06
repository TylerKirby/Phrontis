import React from 'react'
import { Text, View, Alert } from 'react-native'
import RoundedButton from '../Components/RoundedButton'

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
        <Text style={styles.subtitle}>
          An Ancient Greek Study Companion App
        </Text>
        <View>
          <RoundedButton
            text='BEGIN'
            onPress={() => this.props.navigation.navigate('UnitSelectScreen')}
          />
        </View>
      </View>
    )
  }
}
