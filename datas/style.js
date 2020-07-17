import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize:20,
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 30,
    shadowRadius: 5,
    paddingBottom: 20,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: "center",
  },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
  header:{
    height:75,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  textHeader:{
    fontSize:25,
    fontWeight:'bold',
    color: "coral"
  },
  textContent:{
    fontSize:20,
    fontWeight:'normal',
  }
});
