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
import React, { useState, useEffect } from "react"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import AsyncStorage from "@react-native-async-storage/async-storage"

const OnBoardingVenue1 = ({ navigation }) => {
  const width = Dimensions.get("screen").width
  const height = Dimensions.get("screen").height
  const [profile_picture, setprofile_picture] = useState("")
  const [organization_name, setOrganization_name] = useState("")
  const [venue_name, setVenue_name] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [account_type, setaccount_type] = useState("")

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const item = await AsyncStorage.getItem("auth")
    setEmail(JSON.parse(item)?.email)
    setPassword(JSON.parse(item)?.password)
    setaccount_type(JSON.parse(item)?.account_type)
  }

  const goForward = async () => {
    if (organization_name !== "" && venue_name !== "" && city !== "" && address !== "" && profile_picture !== '') {
      await AsyncStorage.setItem("auth", JSON.stringify({ email: Email, password: Password, account_type: account_type, organization_name, city, address, profile_picture }))

      navigation.navigate("OnBoardingVenue2")
    } else {
      Alert.alert("", 'organization_name, City, Address, Venue Name And Profile Pic  Are Required !');
    }
  }

  const requestCameraPermission = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      quality: 1
    });
    setprofile_picture(result?.assets[0]?.base64)
  }

  return (
    <ScrollView style={{ backgroundColor: "#E1FBFC", paddingTop: 60 }}>
      <View style={{ backgroundColor: "#E1FBFC", }}>
        <TouchableOpacity style={{ marginTop: 6, left: 10 }} onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/images/back.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 6 }}>
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
            style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "lightgray" }}
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
              marginTop: 6,
              fontWeight: "600",
              fontSize: 18,
              color: "black",
              fontFamily: "ClashDisplay-Bold"
            }}
          >
            We want to know more about you
          </Text>
        </View>
        <TouchableOpacity onPress={requestCameraPermission} style={{
          alignItems: "center",
          justifyContent: "center"
        }}>
          {profile_picture === "" ? <>
            <View
              style={{
                alignSelf: "center",
                marginTop: 20,
                backgroundColor: "white",
                padding: 50,
                borderRadius: 20,
                width: width / 2,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image source={require("../../../assets/images/imageUpload.png")} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#6D7173", marginTop: 10, fontFamily: "Manrope-SemiBold" }}>Choose profile image</Text>
          </> : <View
            style={{
              alignSelf: "center",
              marginTop: 20,
              backgroundColor: "white",
              // padding: 10,
              borderRadius: 100,
              width: width / 3,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image source={{ uri: `data:image/jpeg;base64,${profile_picture}` }} resizeMode="center" style={{
              width: width / 3, height: width / 3, borderRadius: 1000,
            }} />
          </View>}
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>

          <TextInput
            value={organization_name}
            onChangeText={(text) => setOrganization_name(text)}
            placeholder="Organization name"
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

            }}
          />
          <TextInput
            value={venue_name}
            onChangeText={(text) => setVenue_name(text)}
            placeholder="Venue name"
            placeholderTextColor={"#6D7173"}
            style={{
              paddingLeft: 20,
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

            }}
          />
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Adress"
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

            }}
          />
          <TextInput
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholder="City, Country"
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

            }}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: 20,
            borderWidth: 2,
            alignSelf: "center",
            backgroundColor: "black",
          }}
          onPress={goForward}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              alignSelf: "center",
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

            }}
          >
            {" "}
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoardingVenue2")}
          style={{
            padding: 10,
            width: width / 1.1,
            backgroundColor: "transparent",
            borderRadius: 20,
            marginTop: 10,
            borderWidth: 1,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold",

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

export default OnBoardingVenue1

const styles = StyleSheet.create({})
