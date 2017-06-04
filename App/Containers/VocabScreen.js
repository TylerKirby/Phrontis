import React from 'react';
import { View, Text } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/VocabScreenStyles'

export default class VocabScreen extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Cards go here</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton text="✔️"/>
          <RoundedButton text="❌"/>
        </View>
      </View>
    )
  }
}
