import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"

const DetailsCard = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstComp}>
      <Text style={{fontFamily:"ClashDisplay-Semibold",fontWeight:"600",fontSize:18,color:"black"}}>
          {name}</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            height: 5,
            backgroundColor: "#CACDCF",
            width: "100%",
          }}
        >
          <View style={{ backgroundColor: "#00C2CB", height: 5, width: "50%" }}></View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Get better matches?</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Complete profile</Text>
            <Text>Edit</Text>
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: "black", fontSize: 17 }}>Bio</Text>
        <Text style={{ color: "black" }}>
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
