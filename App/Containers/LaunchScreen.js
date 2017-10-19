import React from 'react'
import { Text, View, Alert } from 'react-native'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
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
