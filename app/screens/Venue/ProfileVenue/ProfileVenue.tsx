import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import React,{useEffect,useState} from "react"
import { colors } from "../../../theme"

// @Components
// import DetailsCard from "../../components/DetailsCard"

import ContactCard from "../../../components/ContactCard"
import ProfileContactCard from "./Components/ProfileContactCard"
import MyButton from "../../../components/MyButton"
import ProfileCard from "./Components/ProfileCard"

// @Vector ICONS
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { useDispatch, useSelector } from "react-redux"
import { LoadUser } from "../../../Redux/Actions/Auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ProfileVenue = ({ navigation }) => {
  const { user } :any = useSelector((state) => state.Auth)

  
  const dispatch:any = useDispatch()
const [Id, setid] = useState("")
  const getdata = async ()=>{
    const id =await AsyncStorage.getItem("id")
    console.log(JSON.parse(id)?.id)  
setid(JSON.parse(id)?.id)
  }
  useEffect(() => {
    dispatch(LoadUser(Id))

    }, [dispatch])
    
  getdata()



  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0,0,0,0.100)" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <Image
            resizeMode="cover"
            // resizeMode="cover"
            style={{
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").width / 1.4,
            }}
            source={
              user?.profile_picture !== null
                ? { uri: user?.profile_picture }
                : require("../../../../assets/images/Frame13.png")
            }
          />

          <View style={styles.locationContainer}>
            <View style={styles.innerLocation}>
              <Image
                style={{ right: 5 }}
                source={require("../../../../assets/images/Vector.png")}
              />
              <Text style={styles.address}>Stockholm, Sweden</Text>
            </View>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <ProfileCard name={user?.venue_name} />
        </View>
        <View
          style={{
            // backgroundColor: "blue",
            padding: 30,
            // marginBottom: 20,
            bottom: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ right: 5, height: 15, width: 15 }}
                source={require("../../../../assets/images/Union.png")}
              />
              <Text style={styles.heading}>
                {user?.specific_user_rating ? user?.specific_user_rating : 1}
              </Text>
            </View>
            <Text style={styles.heading1}>rating</Text>
          </View>
          <Text
            style={[
              styles.heading,
              { fontSize: 25, color: "lightgray", alignItems: "center", justifyContent: "center" },
            ]}
          >
            |
          </Text>
          <View>
            <Text style={[styles.heading, { textAlign: "center" }]}>
              {user?.social_media_followers ? user?.social_media_followers : 1}
            </Text>
            <Text style={styles.heading1}>followers</Text>
          </View>
          <Text
            style={[
              styles.heading,
              { fontSize: 25, color: "lightgray", alignItems: "center", justifyContent: "center" },
            ]}
          >
            |
          </Text>
          <View>
            <Text style={[styles.heading, { textAlign: "center" }]}>0</Text>
            <Text style={styles.heading1}>played gigs</Text>
          </View>
        </View>
        {/* @Contact View */}
        <View style={{ margin: 10 }}>
          <ProfileContactCard email={user?.email} num={user?.mobile_number} />
        </View>
        <MyButton
          onpress={() => navigation.navigate("ArtistBooking")}
          name="Complete your profile"
        />
      </ScrollView>
    </>
  )
}

export default ProfileVenue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    padding: 0,
    margin: 0,
  },
  locationContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 30,
    left: 5,
  },
  innerLocation: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  address: { fontWeight: "bold", color: "gray" },
  heading: {
    fontSize: 18,
  },
  heading1: {
    textAlign: "center",
  },
})
