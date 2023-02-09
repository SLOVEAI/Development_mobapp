
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
  import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { RegisterUser } from "../../Redux/Actions/Auth"
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const OnboardingConsumer2 = ({navigation}) => {
  const [item, setitem] = useState(Object)
  const [music_genre_all, setmusic_genre_all] = useState("")
  const [venue_type_all , setvenue_type_all ] = useState("")


  const getData =async ()=>{
    const items =  await AsyncStorage.getItem("auth")
    setitem(JSON.parse(items))

  const data2 =  await AsyncStorage.getItem("newData2")
  setmusic_genre_all(JSON.parse(data2))
  console.log(data2)
  const data3 =  await AsyncStorage.getItem("venue")
  setvenue_type_all(JSON.parse(data3))
  console.log(data3)
  // venue
  }
  
  useEffect(() => {
    getData()
    setInterval(getData,2000)

  }, [])
  
  let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dsf5fwzwi/upload'

const data = {
  file: item?.profile_picture,
  upload_preset:"n2um4hfs"
}

  const register = () => {
    if (music_genre_all !== "" && venue_type_all !== "") {
      
      if (item?.profile_picture !== null || item?.profile_picture !== undefined) {

        fetch(CLOUDINARY_URL, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
        }).then(async r => {
          let data = await r.json()
    
          dispatch(RegisterUser(item?.firstname, item?.email, item?.password,  item?.account_type, "",item?.mobile_number, item?.city, item?.address,data?.secure_url,
      "", "", music_genre_all, item?.account_types_all, "", "", "", "" ,"", "", "", "", venue_type_all, "", "","" ))
    
            console.log(data?.secure_url)
           }).catch(err => console.log(err))
          }else{
            dispatch(RegisterUser(item?.firstname, item?.email, item?.password,  item?.account_type, "",item?.mobile_number, item?.city, item?.address,"",
            "", "", music_genre_all,  item?.account_types_all, "", "", "", "" ,"", "", "", "", venue_type_all, "", "","" ))
          }
    }else{
      Alert.alert("","Venue And Music Genre Are Required")
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
  
        dispatch(RegisterUser(item?.firstname, item?.email, item?.password,  item?.account_type, "",item?.mobile_number, item?.city, item?.address, data?.secure_url,
    "", "", music_genre_all,  item?.account_types_all, "", "", "", "" ,"", "", "", "", venue_type_all, "", "","" ))
  
          console.log(data?.secure_url)
         }).catch(err => console.log(err))
        }else{
          dispatch(RegisterUser(item?.firstname, item?.email, item?.password,  item?.account_type, "",item?.mobile_number, item?.city, item?.address, "",
          "", "", music_genre_all,  item?.account_types_all, "", "", "", "" ,"", "", "", "", venue_type_all, "", "","" ))
        }
  }


  const dispatch: any = useDispatch()
  const {error,loading,success,user} = useSelector(state =>state.Auth)
  useEffect(() => {
    getData()


    if (user !== null) {
      Alert.alert("Success","You Are Registered Successfully")
      navigation.replace("Login")
      return
    }

if (error !== undefined ||error !== null) {
  if (error?.email[0] === "user with this email already exists.") {
    Alert.alert("Error","User Already Exists")
return
  }
  // Alert.alert("",JSON.stringify(error))
  console.log(error)
}
  }, [user,error,navigation])


  return (
    <View style={{ backgroundColor: "#E1FBFC",marginTop:50, height: height }}>
     <TouchableOpacity style={{ backgroundColor: "transparent", width: width / 1.3, marginTop: 20, marginLeft:10   }} onPress={() => navigation.goBack()}>
                            <Image source={require("../../../assets/images/back.png")} style={{ width: 40, height: 40, resizeMode: "contain" }} />
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
              style={{ width: width / 2.2, margin: 10, padding: 3, backgroundColor: "#00C2CB" }}
            ></View>
          
          </View>

<View>
    <Text style={{fontSize:20,fontWeight:"600",lineHeight:23,textAlign:"center",marginTop:30,color:"black",marginBottom:100}}>Tell us about your taste</Text>

</View>

<View style={{alignItems:"center",justifyContent:"center"}}>

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
    placeholder="Music genre"
    value={music_genre_all?.toString()}
    style={{
      width: width / 1.3,
    }}
  />
</View>
<TouchableOpacity
  style={{ position: "absolute", right: width / 11, top: height / 30 }}
  onPress={() => navigation.navigate("Musicgenre")}
>
  <Icon name="plus" size={20} color={"black"} />
</TouchableOpacity>



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
    value={venue_type_all?.toString()}
    style={{
      width: width / 1.3,
    }}
  />
</View>
<TouchableOpacity
  style={{ position: "absolute", right: width / 11, top: height / 8.5 }}
  onPress={() => navigation.navigate("VenueType")}
>
  <Icon name="plus" size={20} color={"black"} />
</TouchableOpacity>

</View>


<View  style={{alignItems:"flex-end",justifyContent:"center",flexDirection:"column"}}>
<TouchableOpacity
onPress={register}
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
          style={{
            padding: 10,
            width: width / 1.1,
            backgroundColor: "transparent",
            borderRadius: 20,
            marginTop: 10,
            borderWidth: 1,
            alignSelf: "center",
          }}
          onPress={skipregister}
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

export default OnboardingConsumer2

const styles = StyleSheet.create({
    input:{width:width/1.1,backgroundColor:"white",fontSize:16,fontWeight:"600",color:"black",padding:14,borderRadius:10,marginTop:10}
})