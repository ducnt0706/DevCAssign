import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    screenContainer:{
        flex:1,
    },
    header: {
        height:75,
        
    },
    textHeader: {

    },
    bodyContainer:{
        flex:1,
        marginTop:10,
        marginBottom:5,
        marginHorizontal:5
    },
    card:{
        backgroundColor:'#fff',
        borderRadius:15,
        elevation:3,
        shadowColor:'#333',
        shadowOpacity:0.2,
        shadowRadius:5,
        shadowOffset:{width:1,height:1},
        padding:5,
        marginHorizontal:5,
        marginVertical:5
    },
    cardContent:{
        margin:5
    },
    textTitle:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Lato-Italic',
    },
    modalButton:{
        padding:5,
        borderWidth:1,
        borderRadius:25,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gold',
        alignSelf:'center',
        marginTop:10
    },alignContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },textInput:{
        width:200,
        borderWidth:1,
        height:50,
        borderColor:'lightblue'
    },
    horizontalContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})