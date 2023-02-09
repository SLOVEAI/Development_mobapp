import { StyleSheet, Text, View } from "react-native"
import React from "react"

const DetailsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstComp}>
        <Text style={{    fontWeight: "bold",
    fontSize: 19,
    color: "#000",}}>Café Angelina</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>chat</Text>
          <Text>Account</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.percentage}>98,5%</Text>
        <Text style={styles.percentageTxt}> venue profile match your criteria</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>
          Your bio here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum dolor
          congue ipsum aliquam elementum pellentesque. Nec pretium urna sit.
        </Text>
      </View>
    </View>
  )
}

export default DetailsCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    zIndex: 10,
    bottom: 30,
    borderRadius: 20,
  },
  firstComp: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  percentage: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#03989E",
  },
  percentageTxt: {
    color: "#03989E",
  },
})
