import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native"
import React from "react"

const MyButton = ({ onpress, name }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 15,
        width: Dimensions.get("screen").width / 1.1,
        borderRadius: 30,
        marginVertical: 20,

        alignSelf: "center",
        backgroundColor: "black",
      }}
      onPress={onpress}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 17,
          alignSelf: "center",
          fontWeight: "600",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({})
