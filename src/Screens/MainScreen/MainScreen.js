import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Table from '../../components/table/Table';
import Styles from './MainScreen.style';
import {getIcons} from '../../utils/helperMethods';
import {weatherDetails} from '../../mockData/weatherDetails';

export default function MainScreen() {
  const getHourlyDetails = () => {
    const weatherHourly = weatherDetails['hourly'].data.slice(0, 7);
    return weatherHourly.map((obj) => {
      return {time: obj.time, icon: obj.icon, temperature: obj.temperature};
    });
  };
  return (
    <View style={Styles.mainContainer}>
      <Text>Location</Text>
      <Text>Summary</Text>
      <Text>Temprature</Text>
      <Image style={Styles.iconImg} source={getIcons('clear-day')} />
      <ScrollView>
        <Table tableData={getHourlyDetails()} />
      </ScrollView>
    </View>
  );
}
