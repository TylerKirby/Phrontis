import 'react-native';
import React from 'react';
import UnitSelectScreen from '../../App/Containers/UnitSelectScreen';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('UnitSelectScreen component renders correctly', () => {
  const tree = renderer.create(<UnitSelectScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
