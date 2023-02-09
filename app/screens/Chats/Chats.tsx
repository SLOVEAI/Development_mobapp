import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/AntDesign"
import { colors } from "../../theme"
import { StatusBar } from "expo-status-bar"
import { Button } from "../../components"
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
const Chats = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../../assets/images/icoIcon.png")} />
        <Text style={styles.headerTitle}>Messages</Text>
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
      <ScrollView style={{ backgroundColor: "white", height: height }}>
        <View>
          {/* ===================================Chat 1===================================== */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "600", fontFamily: "Manrope", fontSize: 11 }}>
                May05, 2022
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.8,
                width: "80%",
                height: 0.5,
                marginTop: 7,
                borderColor: "#CACDCF",
              }}
            ></View>
          </View>
          <View style={{ position: "absolute", left: 30, top: 38 }}>
            <Image source={require("../../../assets/icons/triangle.png")} />
          </View>
          <View style={styles.chat1}>
            <Text
              style={{
                position: "absolute",
                right: 10,
                fontSize: 14,
                color: "white",
                fontWeight: "600",
              }}
            >
              9:45
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 18.2,
                width: 220,
              }}
            >
              Hello, how are you? I have an event you might be interested in?
            </Text>
          </View>
          {/* //================================chat 2======================================= */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View
              style={{
                borderWidth: 0.8,
                width: "80%",
                height: 0.5,
                marginTop: 7,
                borderColor: "#CACDCF",
              }}
            ></View>
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontWeight: "600", fontFamily: "Manrope", fontSize: 11 }}>
                May05, 2022
              </Text>
            </View>
          </View>
          <View style={styles.chat2}>
            <Text
              style={{
                position: "absolute",
                right: 10,
                fontSize: 14,
                color: "white",
                fontWeight: "600",
              }}
            >
              9:45
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 18.2,
                width: 220,
              }}
            >
              Okay, nice
            </Text>
          </View>
          <View style={{ position: "absolute", right: 33, bottom: -7 }}>
            <Image source={require("../../../assets/icons/triangle2.png")} />
          </View>
        </View>
        <View>
          {/* ===================================Chat 3===================================== */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "600", fontFamily: "Manrope", fontSize: 11 }}>
                May05, 2022
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.8,
                width: "80%",
                height: 0.5,
                marginTop: 7,
                borderColor: "#CACDCF",
              }}
            ></View>
          </View>

          <View style={{ position: "absolute", left: 30, top: 38 }}>
            <Image source={require("../../../assets/icons/triangle.png")} />
          </View>
          <View style={styles.chat1}>
            <Text
              style={{
                position: "absolute",
                right: 10,
                fontSize: 14,
                color: "white",
                fontWeight: "600",
              }}
            >
              9:45
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 18.2,
                width: 220,
              }}
            >
              Hello, how are you? I have an event you might be interested in?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 110,
                backgroundColor: "black",
                height: 40,
                borderRadius: 50,
                right: 90,
                top: -20,
                position: "absolute",
              }}
              onPress={() => navigation.navigate("EventReq")}
            >
              {/* <TouchableOpacity> */}
              <Text style={{ color: "white", fontSize: 13, textAlign: "center", marginTop: 10 }}>
                Open event
              </Text>
              {/* </TouchableOpacity> */}
            </TouchableOpacity>
          </View>
          {/* //================================chat 4======================================= */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View
              style={{
                borderWidth: 0.8,
                width: "80%",
                height: 0.5,
                marginTop: 7,
                borderColor: "#CACDCF",
              }}
            ></View>
            <View style={{ marginRight: 10 }}>
              <Text style={{ fontWeight: "600", fontFamily: "Manrope", fontSize: 11 }}>
                May05, 2022
              </Text>
            </View>
          </View>
          <View style={styles.chat2}>
            <Text
              style={{
                position: "absolute",
                right: 10,
                fontSize: 14,
                color: "white",
                fontWeight: "600",
              }}
            >
              9:45
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 18.2,
                width: 220,
              }}
            >
              Okay, nice
            </Text>
          </View>
          <View style={{ position: "absolute", right: 33, bottom: -7 }}>
            <Image source={require("../../../assets/icons/triangle2.png")} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          // marginTop: 40,
          height: height / 10,
          backgroundColor: "#E1FBFC",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 50,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            marginRight: 8,
            marginLeft:30
          }}
        >
          <Image source={require("../../../assets/icons/SmileFace.png")} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 50,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            marginRight: 20,
          }}
        >
          <Image source={require("../../../assets/icons/Mic.png")} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 250,
            borderRadius: 50,
            justifyContent: "center",
            marginRight:30,
            height: 50,
          }}
        >
          <TextInput multiline placeholder="Write a meesage here" style={{ width: 160 }} />
          <Image
            style={{ position: "absolute", right: 19 }}
            source={require("../../../assets/icons/arrow.png")}
          />
        </View>
      </View>
    </>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  chat1: {
    width: 290,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 13,
    backgroundColor: "#03989E",
    padding: 12,
  },
  chat2: {
    width: 290,
    marginLeft: 100,
    marginTop: 10,
    borderRadius: 13,
    backgroundColor: "#5CE1E6",
    padding: 12,
  },
})
