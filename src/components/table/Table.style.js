import {StyleSheet} from 'react-native';

const TableStyles = StyleSheet.create({
  tableContainer: {borderTopWidth: 1, borderTopColor: 'gray'},
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
});

export {TableStyles};
