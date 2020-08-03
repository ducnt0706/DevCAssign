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
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalContainer: {
    flexDirection:'row',
    padding:5,
    alignItems: 'center',
    justifyContent:'center'
  },
  textInput:{
    borderColor:'lightblue',
    borderWidth:1,
    width:200,
    height:50,
    margin:5,
    borderRadius:20
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
  title:{
    fontSize:20,
    fontWeight: 'bold',
    padding:2
  },card:{
    borderWidth:1,
    borderColor:'coral',
  }
});
