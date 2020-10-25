import React from 'react';
import {View, Text, Image} from 'react-native';
import Table from '../../components/table/Table';
import Styles from './MainScreen.style';
import {getIcons} from '../../utils/helperMethods';

export default function MainScreen() {
  const tableInfo = [
    {temp: '34', time: '3.30PM', icon: 'Sunny'},
    {temp: '35', time: '3.30PM', icon: 'Sunny'},
  ];
  return (
    <View style={Styles.mainContainer}>
      <Text>Location</Text>
      <Text>Summary</Text>
      <Text>Temprature</Text>
      <Image style={Styles.iconImg} source={getIcons('clear-day')} />
      <Table tableData={tableInfo} />
    </View>
  );
}
