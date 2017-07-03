import React from 'react';
import { View, Picker } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/UnitSelectScreenStyles';

export default class UnitSelectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChapter: '1'
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log(this.state.selectedChapter)
    return this.props.navigation.navigate('VocabScreen', {selectedChapter: `unit${this.state.selectedChapter}`});
  }

  render() {
    const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const unitsButtons = units.map((unit) =>
      <Picker.Item 
        label={`Unit ${unit}`} 
        value={unit} 
        key={unit} 
        style={styles.text}
      />
    );
    return (
      <View style={styles.container}>
        <Picker
          itemStyle={styles.text}
          style={styles.picker}
          selectedValue={this.state.selectedChapter}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedChapter: itemValue })}
        >
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
