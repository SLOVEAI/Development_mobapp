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
} from "react-native"
import React,{useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Onboarding2 = ({route, navigation }) => {

// const press = route.params?.newData
// const press2 = route.params?.newData

const [press, setpress] = useState("")
const [press2, setpress2] = useState("")

const [expectedPrice, setExpectedPrice] = useState("")
const [PreferredVenue, setPreferredVenue] = useState("")
const [Experience, setExperience] = useState("")
const [NoOfGigs, setNoOfGigs] = useState("")

const [item, setitem] = useState(Object)
const getData =async ()=>{
  const items =  await AsyncStorage.getItem("auth")
  setitem(JSON.parse(items))
const data =  await AsyncStorage.getItem("newData")
setpress(JSON.parse(data))
console.log(data)
const data2 =  await AsyncStorage.getItem("newData2")
setpress2(JSON.parse(data2))
console.log(data2)
console.log(press)
console.log(press2)
}


useEffect(() => {
  getData()

  setInterval(getData,2000)

}, [])


 const width = Dimensions.get("screen").width
  const height = Dimensions.get("screen").height
  return (
    <ScrollView style={{ height: height, marginTop: 50, backgroundColor: "#E1FBFC" }}>
      <View style={{ backgroundColor: "#E1FBFC" }}>
        <TouchableOpacity style={{ top: 20, left: 10 }} onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/images/back.png")} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", top: 20 }}>
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
            style={{
              width: width / 3.5,
              margin: 10,
              padding: 3,

              borderColor: "none",
              backgroundColor: "#00C2CB",
            }}
          ></View>
          <View
            style={{ width: width / 3.5, margin: 10, padding: 3, backgroundColor: "lightgray" }}
          ></View>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              top: 30,
              // fontWeight: "bold",
              fontSize: 20,
              fontFamily: "ClashDisplay-Bold",
              color: "black",
            }}
          >
            Tell us about your music{" "}
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
              placeholder="Artist type"
              placeholderTextColor={"#6D7173"}
value={press?.toString()}
// editable={false}
              style={{
                width: width / 1.3,
                fontWeight: "600",
                fontFamily: "Manrope-SemiBold"

              }}
            />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", right: width / 12, top: height / 32 }}
            onPress={() => navigation.navigate("Artisttype", { title: "Artist Type" })}
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
            <TextInput placeholder="Music genre"
              placeholderTextColor={"#6D7173"}
              value={press2 !=="" ? press2?.toString():""}
              // editable={false}
              style={{
                width: width / 1.3, fontWeight: "600", fontFamily: "Manrope-SemiBold"

              }} />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", right: width / 12, top: height / 8.4 }}
            onPress={() => navigation.navigate("Musicgenre", { title: "Music Genre" })}
          >
            <Icon name="plus" size={20} color={"black"} />
          </TouchableOpacity>

          <TextInput
            placeholder="How long have you been active?"
            placeholderTextColor={"#6D7173"}
            value={Experience}
            onChangeText={(text)=>setExperience(text)}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold"

            }}
          />

          <TextInput
            placeholder="Overall gigs?"
            placeholderTextColor={"#6D7173"}
            value={NoOfGigs}
            onChangeText={(text)=>setNoOfGigs(text)}
            
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600", 
              fontFamily: "Manrope-SemiBold"
            }}
          />
          <TextInput
            placeholder="Preferred venue"
            placeholderTextColor={"#6D7173"}
            value={PreferredVenue}
            onChangeText={(text)=>setPreferredVenue(text)}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold"

            }}
          />
          <TextInput
            placeholder="Expected booking price"
            value={expectedPrice}
            onChangeText={(text)=>setExpectedPrice(text)}
            placeholderTextColor={"#6D7173"}
            style={{
              width: width / 1.1,
              alignSelf: "center",
              backgroundColor: "white",
              margin: 12,
              paddingLeft: 20,
              fontWeight: "600",
              fontFamily: "Manrope-SemiBold"

            }}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            width: width / 1.1,
            borderRadius: 20,
            marginTop: height / 26,
            borderWidth: 2,
            alignSelf: "center",
            backgroundColor: "black",
          }}
          onPress={async() =>{ 
                  await AsyncStorage.setItem("auth",JSON.stringify({email:item?.email,password:item?.password,account_type:item?.account_type,brand_name:item?.brand_name, mobile_number:item?.mobile_number, city: item?.city, address: item?.address,profile_picture:item?.profile_picture,
                  PreferredVenue,expectedPrice,NoOfGigs,Experience,MusicGenre:press2,Artist:press
                  }))

            navigation.navigate("onBoarding3")
          }} 
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
            // marginBottom: 20,
          }}
          onPress={() =>{ navigation.navigate("onBoarding3")}}
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
            {" "}
            Skip this step now{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Onboarding2

const styles = StyleSheet.create({})