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
    const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const unitsButtons = units.map((unit) =>
      <Picker.Item label={`Chapter ${unit}`} value={unit} key={unit} />
    );
    return(
      <View style={styles.mainContainer}>
        <View>
          <Picker
            style={{width: 100}}
            selectedValue={this.state.selectedChapter}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedChapter: itemValue}, console.log(this.state))}>
            {unitsButtons}
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
