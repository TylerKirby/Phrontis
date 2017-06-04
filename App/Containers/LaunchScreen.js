import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>
          Phrontis
        </Text>
        <View>
          <RoundedButton
            text="Vocabulary"
            onPress={() => this.props.navigation.navigate('VocabScreen')}
          />
        </View>
      </View>
    )
  }
}
