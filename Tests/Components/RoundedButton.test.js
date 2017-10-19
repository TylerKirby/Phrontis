import 'react-native';
import React from 'react';
import RoundedButton from '../../App/Components/RoundedButton';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('RoundedButton component renders correctly', () => {
  const tree = renderer.create(<RoundedButton text='test' onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
