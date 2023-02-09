import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import React from "react"

const ContactCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstComp}>
        <Text>Contact</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row",margin:4,alignItems: "center" }}>
          <Image source={require("../../assets/images/mail.png")} />
          <Text style={{ left: 10,fontWeight:"600",fontSize:16  }}>artist@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row",margin:4,alignItems: "center" }}>
          <Image source={require("../../assets/images/Vector11.png")} />
          <Text style={{left: 10,fontWeight:"600",fontSize:16  }}>070-542 08 32</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center",margin:4 }}>
          <Image source={require("../../assets/images/clock.png")} />
          <Text style={{ left: 10,fontWeight:"600",fontSize:16 }}>10:00-16:00</Text>
          <TouchableOpacity
            style={{
              marginLeft: 30,
              backgroundColor: "#03989E",
              padding: 5,
              paddingHorizontal: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white",fontWeight:"bold",fontSize:16 }}>Open now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ContactCard

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
