import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { RegisterUser } from "../../Redux/Actions/Auth"

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const OnBoarding3 = ({ navigation }) => {

  const [website_link, setWebsite_link] = useState("")
  const [social_media_link, setSocial_media_link] = useState("")
  const [spotify_link, setSpotify_link] = useState("")
  const [item, setitem] = useState(Object)
const [photouri, setphotouri] = useState("")
  const getData = async () => {
    const items = await AsyncStorage.getItem("auth")
    setitem(JSON.parse(items))
  }
  const dispatch:any = useDispatch()
  const {error,loading,success,user} = useSelector(state=>state.Auth)
  useEffect(() => {
    getData()

    if (user !== null) {
      Alert.alert("Success","You Are Registered Successfully")
      navigation.replace("Login")
      return
    }


if (error) {
  if (error?.email[0] === "user with this email already exists.") {
    Alert.alert("Error","User Already Exists")
    return
  }
console.log(error)
}

  }, [user,error,navigation])

  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsf5fwzwi/upload'

const data = {
  file: item?.profile_picture,
  upload_preset:"n2um4hfs"
}



  const register = () => {
    if (website_link !== "" && spotify_link !== "" && social_media_link !== "") {
     
      if (item?.profile_picture !== null || item?.profile_picture !== undefined) {

    fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    }).then(async r => {
      let data = await r.json()

      dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, data?.secure_url, item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, spotify_link, social_media_link,
        item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers, 
        item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity, 
        item?.venue_name, item?.organization_name))

        setphotouri(data?.secure_url);
        console.log(data?.secure_url)
       }).catch(err => console.log(err))
      }else{
        dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, "", item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, spotify_link, social_media_link,
          item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers, 
          item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity, 
          item?.venue_name, item?.organization_name))
  
      }

    }else{
      Alert.alert("","Website , Spotify and Social Media Link Are Required")
    }
  }
  const skipregister = () => {
    if (item?.profile_picture !== null || item?.profile_picture !== undefined) {

      fetch(CLOUDINARY_URL, {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(async r => {
        let data = await r.json()
  
        dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, data?.secure_url, item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, spotify_link, social_media_link,
          item?.live_performance_per_month, item?.average_musician_exposure, item?.social_media_followers, 
          item?.specific_user_rating, item?.peak_season, item?.venue_type_all, item?.venue_capacity, 
          item?.venue_name, item?.organization_name))
  
          setphotouri(data?.secure_url);
          console.log(data?.secure_url)
         }).catch(err => console.log(err))
        }else{
          dispatch(RegisterUser(item?.firstname, item?.email, item?.password, item?.account_type, item?.brand_name, item?.mobile_number, item?.city, item?.address, "", item?.preferred_genre, item?.price_per_gig, item?.music_genres_all, item?.account_types_all, website_link, spotify_link, social_media_link,
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
            width: width / 3.5,
            margin: 10,
            padding: 3,
            backgroundColor: "#00C2CB",
            borderColor: "none",
          }}
        ></View>
        <View
          style={{ width: width / 3.5, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
        ></View>
        <View
          style={{ width: width / 3.5, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
        ></View>
      </View>

      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            lineHeight: 23,
            textAlign: "center",
            marginTop: 30,
            color: "black",
            marginBottom: 100,
            fontFamily: "ClashDisplay-Bold"
          }}
        >
          Website and social media
        </Text>
      </TouchableOpacity>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          placeholder="Website link"
          value={website_link}
          onChangeText={(text) => setWebsite_link(text)}
          placeholderTextColor={"#6D7173"}
          style={styles.input}
        />
        <TextInput
          placeholder="Social media link"
          value={social_media_link}
          onChangeText={(text) => setSocial_media_link(text)}
          placeholderTextColor={"#6D7173"}
          style={styles.input}
        />
        <TextInput
          value={spotify_link}
          onChangeText={(text) => setSpotify_link(text)}
          placeholder="Link to spotify"
          placeholderTextColor={"#6D7173"}
          style={styles.input}
        />
      </View>

      <View style={{ alignItems: "flex-end", justifyContent: "center", flexDirection: "column" }}>
        <TouchableOpacity
          onPress={register}
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: height / 7,
            borderWidth: 2,
            alignSelf: "center",
            backgroundColor: "black",
          }}
          disabled={loading}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              alignSelf: "center",
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold"

            }}
          >
            {loading ? "please Wait": "Continue"}

            
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={skipregister}
          style={{
            padding: 10,
            width: width / 1.1,
            backgroundColor: "transparent",
            borderRadius: 20,
            marginTop: 10,
            borderWidth: 1,
            alignSelf: "center",
          }}
          disabled={loading}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold"

            }}
          >
            
            {loading ? "please Wait": "Skip this step now"}


          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoarding3

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
    fontFamily: "Manrope-SemiBold"

  },
})
