import React from 'react';
import { View, Text, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/VocabScreenStyles'

export default class VocabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChapter: 1};
  }



  render() {
    return(
      <View style={styles.mainContainer}>
        <View>
          <Picker
            style={{width: 100}}
            selectedValue={this.state.selectedChapter}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedChapter: itemValue})}>
            <Picker.Item label="Chapter 1" value={1} />
            <Picker.Item label="Chapter 2" value={2} />
          </Picker>
        </View>
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
