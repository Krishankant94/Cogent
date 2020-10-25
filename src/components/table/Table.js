import React from 'react';
import {View, Text} from 'react-native';
import {TableStyles} from './Table.style';

export default function Table({tableData}) {
  const getTableRow = (rowData) => {
    const row = Object.keys(rowData);
    return (
      row && (
        <View style={TableStyles.tableRow}>
          {row.map((cellKey) => (
            <View style={TableStyles.tableCell}>
              <Text>{rowData[cellKey]}</Text>
            </View>
          ))}
        </View>
      )
    );
  };
  return (
    <View style={TableStyles.tableContainer}>
      {tableData && tableData.map((row) => getTableRow(row))}
    </View>
  );
}
