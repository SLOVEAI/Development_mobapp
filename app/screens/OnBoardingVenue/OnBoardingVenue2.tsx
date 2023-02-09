import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Alert
} from "react-native"
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
const OnBoardingVenue2 = ({ navigation }) => {
  const width = Dimensions.get("screen").width
  const height = Dimensions.get("screen").height
  const [venue_type_all, setVenues] = useState("")
  const [venue_capacity, setVenue_capacity] = useState("")
  const [live_performance_per_month, setlive_performance_per_month] = useState("")
  const [peak_season, setPeak_season] = useState("")
  const [item, setItem] = useState(Object)


  const getVenue = async () => {
    const venue = await AsyncStorage.getItem("venue")
    setVenues(JSON.parse(venue))
  }

  useEffect(() => {
    getVenue()
    setInterval(getVenue,2000)

  }, [])

  useEffect(() => {
    getData()
  setInterval(getData,2000)

  }, [])

  const getData = async () => {
    const item = await AsyncStorage.getItem("auth")
    setItem(JSON.parse(item))
  }

  const goForward = async () => {
    if (venue_type_all !== "" && venue_capacity !== "" && live_performance_per_month !== "" && peak_season !== "") {
      await AsyncStorage.setItem("auth", JSON.stringify({ email: item?.email, password: item?.password, account_type: item?.account_type, organization_name: item?.organization_name, city: item?.city, address: item?.address, profile_picture: item?.profile_picture,
      venue_type_all,venue_capacity,live_performance_per_month,peak_season }))

      navigation.navigate("OnBoardingVenue3")
    } else {
      Alert.alert("", 'All Field Are Required !');
    }
  }
  return (
    <ScrollView style={{ height: height, backgroundColor: "#E1FBFC", marginTop: 50 }}>
      <View style={{ backgroundColor: "#E1FBFC" }}>
        <TouchableOpacity style={{ top: 20, left: 10 }} onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/images/back.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", top: 20 }}>
          <View
            style={{
              width: width / 5,
              margin: 10,
              padding: 3,
              backgroundColor: "#00C2CB",
              borderColor: "none",
            }}
          ></View>
          <View
            style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
          ></View>
          <View
            style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "lightgray" }}
          ></View>
          <View
            style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "lightgray" }}
          ></View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              top: 30,
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Clash Display",
              color: "black",
            }}
          >
            Tell us about your venue
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
            }}
          >
            <TextInput
              placeholder="Venue type"
              placeholderTextColor={"#6D7173"}
              value={venue_type_all?.toString()}
              style={{
                width: width / 1.3,
                fontWeight: "600",
                fontFamily: "Manrope-SemiBold",

              }}
            />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", right: width / 12, top: height / 32 }}
            onPress={() => navigation.navigate("VenueType")}
          >
            <Icon name="plus" size={20} color={"black"} />
          </TouchableOpacity>
          <View
            style={{
              paddingLeft: 20,
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
            }}
          >
            <TextInput placeholder="Venues capacity"
              value={venue_capacity}
              onChangeText={(text) => setVenue_capacity(text)}
              placeholderTextColor={"#6D7173"}
              style={{
                width: width / 1.3, fontWeight: "600", fontFamily: "Manrope-SemiBold",

              }} />
          </View>

          <TextInput
            value={live_performance_per_month}
            onChangeText={(text) => setlive_performance_per_month(text)}
            placeholder="Live performances per month"
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600"
            }}
          />

          <TextInput
            value={peak_season}
            onChangeText={(text) => setPeak_season(text)}
            placeholder="Peak season"
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600"
            }}
          />


        </View>
        <TouchableOpacity
        onPress={goForward}
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: height / 5,
            borderWidth: 2,
            alignSelf: "center",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              alignSelf: "center",
              fontWeight: "600",
            }}
          >
            {" "}
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoardingVenue3")}
          style={{
            padding: 10,
            width: width / 1.1,
            backgroundColor: "transparent",
            borderRadius: 20,
            marginTop: 10,
            borderWidth: 1,
            alignSelf: "center",
            marginBottom:30
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {" "}
            Skip this step now{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default OnBoardingVenue2

const styles = StyleSheet.create({})