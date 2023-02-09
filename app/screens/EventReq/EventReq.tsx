import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native"
import React from "react"
import { colors } from "../../theme"
import Icon from "react-native-vector-icons/AntDesign"
const height = Dimensions.get("screen").height
const EventReq = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          height: height,
          backgroundColor: "#E1FBFC",
        }}
      >
        <View style={styles.container}>
          <Image source={require("../../../assets/images/icoIcon.png")} />
          <TouchableOpacity>
            <Text style={styles.headerTitle}>Event Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 30,
              padding: 5,
              borderRadius: 50,
            }}
            onPress={() => navigation.goBack()}
          >
            <Icon name="close" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../../assets/images/frame14.png")} />
        </View>
        <View
          style={{
            width: 325,
            alignSelf: "center",
            height: 250,
            borderRadius: 30,
            backgroundColor: "white",
            position: "relative",
            bottom: 35,
            padding: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "black", lineHeight: 18 }}>
              Live Band: Equinox
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "#E1FBFC",
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#03989E", alignSelf: "center" }}>APRIL</Text>
              <Text
                style={{ color: "#03989E", alignSelf: "center", fontSize: 20, fontWeight: "800" }}
              >
                20
              </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "black", fontFamily: "Manrope", fontSize: 12 }}>
                Café Angelina
              </Text>
              <Text style={{ fontFamily: "Manrope", fontSize: 12 }}>Thu 22:00</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14 }}>Music genre</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 12,
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 12,
                  borderColor: "lightgrey",
                }}
              >
                Bar
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 20,
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 12,
                  borderColor: "lightgrey",
                }}
              >
                Concert Hall
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 14 }}>Music type</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 12,
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 12,
                  borderColor: "lightgrey",
                }}
              >
                Band
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 50,
              width: 300,
              marginBottom: 10,
              borderRadius: 50,
              backgroundColor: "black",
            }}
            onPress={() => navigation.navigate("YourEvent")}
          >
            <Text style={{ alignSelf: "center", marginTop: 13, color: "white" }}>
              Approve Event
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 1, height: 50, width: 300, borderRadius: 50 }}>
            <Text style={{ alignSelf: "center", marginTop: 13, color: "black" }}>Modify Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default EventReq

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    padding: 10,
  },
  headerTitle: {
    color: "#303233",
    fontSize: 17,
    fontWeight: "600",
  },

  item: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 12,
  },
})
