import { StyleSheet, Text, View, TextInput } from "react-native"
import React from "react"

// @ICONS
import AntDesign from "react-native-vector-icons/AntDesign"

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search venues" />
      <AntDesign name="search1" size={20} />
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
})
