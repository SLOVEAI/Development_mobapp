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
import React, { useEffect, useState } from "react"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import AsyncStorage from "@react-native-async-storage/async-storage"

const OnboardingConsumer1 = ({ navigation }) => {
  const width = Dimensions.get("screen").width
  const height = Dimensions.get("screen").height
  const [image, setImage] = useState("")
  const [Name, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [city, setcity] = useState("")
  const [mobile_number, setmobile_number] = useState("")

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [account_type, setaccount_type] = useState("")


  const getData = async () => {
    const item = await AsyncStorage.getItem("auth")
    setEmail(JSON.parse(item)?.email)
    setPassword(JSON.parse(item)?.password)
    setaccount_type(JSON.parse(item)?.account_type)
  }

  useEffect(() => {
    getData()
  }, [])
  const requestCameraPermission = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      quality: 1
    });
    setImage(result?.assets[0]?.base64)
    // console.log(result?.assets[0]?.base64)
  }


  const goForward = async () => {
    if (Name !== "" && mobile_number !== "" && city !== "" && Address !== "" && image !== '') {
      await AsyncStorage.setItem("auth", JSON.stringify({ email: Email, password: Password, account_type: account_type, firstname:Name , mobile_number, city, address: Address, profile_picture: image }))

      navigation.navigate("OnboardingConsumer2")
    } else {
      Alert.alert("", 'Name, City, Address, Mobile Number And Profile Pic  Are Required !');
    }
  }
  return (
    <ScrollView style={{ backgroundColor: "#E1FBFC", marginTop: 40 }}>
      <View style={{ backgroundColor: "#E1FBFC", marginTop: 20 }}>
        <TouchableOpacity style={{ marginTop: 6, left: 10 }} onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/images/back.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 6 }}>
          <View
            style={{
              width: width / 2.2,
              margin: 10,
              padding: 3,
              backgroundColor: "#00C2CB",
              borderColor: "none",
            }}
          ></View>
          <View
            style={{ width: width / 2.2, margin: 10, padding: 3, backgroundColor: "lightgray" }}
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
          {image === "" ? <>
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
            <Image source={{ uri: `data:image/jpeg;base64,${image}` }} resizeMode="center" style={{
              width: width / 3, height: width / 3, borderRadius: 1000,
            }} />
          </View>}
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>

          <TextInput
            placeholder="Name"
            value={Name}
            onChangeText={text =>setName(text)}
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
            placeholder="Adress"
            value={Address}
            onChangeText={text =>setAddress(text)}
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
            placeholder="City, Country"
            value={city}
            onChangeText={text =>setcity(text)}
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
            placeholder="Mobilenumber"
            value={mobile_number}
            onChangeText={text =>setmobile_number(text)}
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
          onPress={
            goForward
          }
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
          style={{
            padding: 10,
            width: width / 1.1,
            backgroundColor: "transparent",
            borderRadius: 20,
            marginTop: 10,
            borderWidth: 1,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("OnboardingConsumer2")
          }
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

export default OnboardingConsumer1

const styles = StyleSheet.create({})
