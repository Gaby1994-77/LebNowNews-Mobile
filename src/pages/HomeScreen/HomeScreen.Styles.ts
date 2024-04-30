import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    flex: 1,
    paddingVertical: 6,
    marginLeft: 10,
    marginRight: 6,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  paginationButton: {
    backgroundColor: '#689F38',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  paginationButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
