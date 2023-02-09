import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/AntDesign"
const height = Dimensions.get("screen").height
const ChooseToAttend = ({navigation}) => {
  return (
    <View style={{ height: height, backgroundColor: "#E1FBFC" }}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
            position: "absolute",
            top: 30,
            right: 1,
            zIndex: 111111111,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={20} color={"white"} />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/images/frame14.png")}
          style={{ width: "100%", height: height / 3, zIndex: 1 }}
        />
      </View>
      <View
        style={{
          width: 365,
          alignSelf: "center",
          height: 300,
          borderRadius: 30,
          backgroundColor: "white",
          position: "relative",
          bottom: 35,
          padding: 20,
          zIndex: 2,
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
      <TouchableOpacity
        style={{
          alignSelf: "center",
          borderWidth: 1,
          width: 300,
          height: 60,
          borderRadius: 50,
          backgroundColor: "black",
          marginTop:height/11
        }}
      >
        <Text style={{color:"white",fontWeight:"600",fontSize:18,textAlign:"center",marginTop:15}}>Choose to attend</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChooseToAttend

const styles = StyleSheet.create({})
