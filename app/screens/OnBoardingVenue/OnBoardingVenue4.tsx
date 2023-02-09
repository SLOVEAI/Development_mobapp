import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native"
import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { RegisterUser } from "../../Redux/Actions/Auth"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const OnBoardingVenue4 = ({ navigation }) => {
  const [website_link, setWebsite_link] = useState("")
  const [social_media_link, setSocial_media_link] = useState("")
  const [photouri, setphotouri] = useState("")
  const [item, setItem] = useState(Object)

  const dispatch: any = useDispatch()
  const { error, loading, success, user } = useSelector(state => state.Auth)

  useEffect(() => {
    getData()


    if (user !== null) {
      Alert.alert("Success","You Are Registered Successfully")
      navigation.replace("Login")
      return
    }

    if (error) {
      if (error?.email[0] === "user with this email already exists.") {
        Alert.alert("Error", "User Already Exists")
        return
      }
      Alert.alert("", JSON.stringify(error))
    }
  }, [user,error,navigation])

  const getData = async () => {
    const item = await AsyncStorage.getItem("auth")
    setItem(JSON.parse(item))
  }
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsf5fwzwi/upload'

  const data = {
    file: item?.profile_picture,
    upload_preset: "n2um4hfs"
  }


  const register = async () => {
    if (website_link !== "" && social_media_link !== "") {

      if (item?.profile_picture !== null || item?.profile_picture !== undefined) {


        fetch(CLOUDINARY_URL, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
        }).then(async r => {
          let data = await r.json()
          dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, data?.secure_url, item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, item?.spotify_link, social_media_link,
          item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers,
          item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity,
          item?.venue_name, item?.organization_name))

          setphotouri(data?.secure_url);
          console.log(data?.secure_url)
        }).catch(err => console.log(err))
      } else {
        dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, null, item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, item?.spotify_link, social_media_link,
          item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers,
          item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity,
          item?.venue_name, item?.organization_name))

      }
    } else {
      Alert.alert("", 'All Field Are Required !');
    }
  }

  const skipandRegister = async () => {

    if (item?.profile_picture !== null || item?.profile_picture !== undefined) {


      fetch(CLOUDINARY_URL, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
        let data = await r.json()


        setphotouri(data?.secure_url);
        console.log(data?.secure_url)
      }).catch(err => console.log(err))
    } else {
      dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, null, item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, item?.spotify_link, social_media_link,
        item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers,
        item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity,
        item?.venue_name, item?.organization_name))

    }
  }
  return (
    <View style={{ backgroundColor: "#E1FBFC", height: height, marginTop: 50 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "transparent",
          width: width / 1.3,
          marginTop: 20,
          marginLeft: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../../assets/images/back.png")}
          style={{ width: 40, height: 40, resizeMode: "contain" }}
        />
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
          style={{ width: width / 5, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
        ></View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 23,
            textAlign: "center",
            marginTop: 30,
            color: "black",
            marginBottom: 100,
          }}
        >
          Website and social media
        </Text>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          placeholder="Website link"
          placeholderTextColor={"#6D7173"}
          style={styles.input}
          value={website_link}
          onChangeText={(text) => setWebsite_link(text)}
        />
        <TextInput
          placeholder="Social media link"
          placeholderTextColor={"#6D7173"}
          style={styles.input}
          value={social_media_link}
          onChangeText={(text) => setSocial_media_link(text)}
        />
      </View>

      <View style={{ alignItems: "flex-end", justifyContent: "center", flexDirection: "column" }}>
        <TouchableOpacity
          onPress={register}
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: height / 4,
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
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={skipandRegister}
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

export default OnBoardingVenue4

const styles = StyleSheet.create({
  input: {
    width: width / 1.1,
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
})
