import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput, Alert
} from "react-native"
import React, { useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const OnBoardingVenue3 = ({ navigation }) => {

  const [preferred_genre, setPreferred_genre] = useState("")
  const [average_musician_exposure, setAverage_musician_exposure] = useState("")
  const [social_media_followers, setSocial_media_followers] = useState("")
  const [price_per_gig, setPrice_per_gig] = useState("")
  const [specific_user_rating, setSpecific_user_rating] = useState("")
  const [item, setItem] = useState(Object)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const item = await AsyncStorage.getItem("auth")
    setItem(JSON.parse(item))
  }

  const goForward = async () => {
    if (preferred_genre !== "" && price_per_gig !== "" && average_musician_exposure !== "" && social_media_followers !== "" && specific_user_rating !== "") {
      await AsyncStorage.setItem("auth", JSON.stringify({
        email: item?.email, password: item?.password, account_type: item?.account_type, organization_name: item?.organization_name, city: item?.city, address: item?.address, profile_picture: item?.profile_picture,
        venue_type_all: item?.venue_type_all, venue_capacity: item?.venue_capacity, live_performance_per_month: item?.live_performance_per_month, peak_season: item?.peak_season,
        preferred_genre, price_per_gig, average_musician_exposure, social_media_followers, specific_user_rating
      }))

      navigation.navigate("OnBoardingVenue4")
    } else {
      Alert.alert("", 'All Field Are Required !');
    }
  }
  return (
    <View style={{ backgroundColor: "#E1FBFC", height: height, marginTop: 50 }}>
      <TouchableOpacity style={{ backgroundColor: "transparent", width: width / 1.3, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.goBack()}>
        <Image source={require("../../../assets/images/back.png")} style={{ width: 40, height: 40, resizeMode: "contain" }} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
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
          style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
        ></View>
        <View
          style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "lightgray" }}
        ></View>
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "600", lineHeight: 23, textAlign: "center", marginTop: 30, color: "black", marginBottom: 30 }}>Your criteria for artists</Text>

      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>

        <TextInput placeholder="Preferred genre"
          value={preferred_genre}
          onChangeText={(text) => setPreferred_genre(text)}
          placeholderTextColor={"#6D7173"} style={styles.input} />

        <TextInput placeholder="Average musician exposure"
          value={average_musician_exposure}
          onChangeText={(text) => setAverage_musician_exposure(text)}
          placeholderTextColor={"#6D7173"} style={styles.input} />

        <TextInput placeholder="Social media followers"
          value={social_media_followers}
          onChangeText={(text) => setSocial_media_followers(text)}
          placeholderTextColor={"#6D7173"} style={styles.input} />

        <TextInput placeholder="Price per gig"
          value={price_per_gig}
          onChangeText={(text) => setPrice_per_gig(text)}
          placeholderTextColor={"#6D7173"} style={styles.input} />

        <TextInput placeholder="Specific user rating"
          value={specific_user_rating}
          onChangeText={(text) => setSpecific_user_rating(text)}
          placeholderTextColor={"#6D7173"} style={styles.input} />

      </View>


      <View style={{ alignItems: "flex-end", justifyContent: "center", flexDirection: "column" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: height / 12,
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
            }}
          >
            {" "}
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OnBoardingVenue4")}
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
            }}
          >
            {" "}
            Skip this step now{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoardingVenue3

const styles = StyleSheet.create({
  input: { width: width / 1.1, backgroundColor: "white", fontSize: 16, fontWeight: "600", color: "black", padding: 14, borderRadius: 10, marginTop: 10 }
})