import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: 'grey',
  },
});
