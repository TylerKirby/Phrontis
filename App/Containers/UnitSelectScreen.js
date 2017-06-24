import React from 'react';
import { View, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

import styles from './Styles/VocabScreenStyles'

export default class UnitSelectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChapter: 1
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  

  onValueChange(itemValue) {
    this.setState({
      selectedChapter: itemValue,
    })
  }

  onPress() {
    console.log(this.state.selectedChapter)
    return this.props.navigation.navigate('VocabScreen', {selectedChapter: this.state.selectedChapter});
  }

  render() {
    const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const unitsButtons = units.map((unit) =>
      <Picker.Item label={`Chapter ${unit}`} value={unit} key={unit} />
    );
    return (
      <View>
        <Picker
          style={{width: 100}}
          selectedValue={this.state.selectedChapter}
          onValueChange={this.onValueChange}>
          {unitsButtons}
        </Picker>
        <RoundedButton
          text="Submit"
          onPress={this.onPress}
        />
      </View>
    )
  }
}
