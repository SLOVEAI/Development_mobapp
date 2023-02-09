import { StyleSheet, Text, View, Image,TouchableOpacity,StatusBar } from "react-native"
import React from "react"
import { colors } from "../theme"


const AppHeader = ({navigation,title}) => {

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icoIcon.png")} />
      <Text style={styles.headerTitle}>{title}</Text>
      {/* <Text>settiing</Text> */}
      <TouchableOpacity onPress={
        ()=>navigation.navigate("Settings")
      }>
      <Image source={require("../../assets/images/setting.png")} />
      </TouchableOpacity>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  container: {
    marginTop:(StatusBar.currentHeight)/1.6,
    backgroundColor: colors.palette.backgroundColor,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingVertical: 40,
    padding: 10,
    flex:1
    // marginVertical: 15,
  },
  headerTitle: {
    color: "#303233",
    fontSize: 17,
  },
})
