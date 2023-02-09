import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import React from "react"

const ProfileContactCard = ({email,phone}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstComp}>
        <Text style={styles.contactTitle}>Contact</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Image source={require("../../../../../assets/images/mail.png")} />
          <Text style={{ left: 10 }}>{email ? email: "email"}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../../../../assets/images/Vector11.png")} />
          <Text style={{ left: 10 }}>{phone ?phone: "Contact Number"}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileContactCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    zIndex: 10,
    bottom: 30,
    borderRadius: 20,
  },
  firstComp: {
    marginVertical: 10,
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
  contactTitle: {
    color: "black",
    fontSize: 18,
  },
})
