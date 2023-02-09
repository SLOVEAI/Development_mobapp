import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { useState } from "react"
import { Checkbox } from "react-native-paper"
import Icon from "react-native-vector-icons/AntDesign"
import Music from "./Artist"
import AsyncStorage from "@react-native-async-storage/async-storage"
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
const ArtistType = ({ navigation }) => {
  const [press, setPress] = useState([])

  const data = [
    {
      value:"Band",
      id:1
    },
    {
      value:"Solo Artist",
      id:2
    },
    {
      value:"DJ",
      id:3
    },
    {
      value:"Audio engineer",
      id:4
    },
    {
      value:"Instrument player",
      id:5
    },
    {
      value:"Singer",
      id:6
    },
    {
      value:"Song writer",
      id:7
    },
    {
      value:"Composer",
      id:8
    },
    {
      value:"Music producer",
      id:9
    },
    {
      value:"Type",
      id:10
    },
    {
      value:"Type",
      id:11
    },
    {
      value:"Type",
      id:12
    },
    {
      value:"Type",
      id:13
    },
    {
      value:"Type",
      id:14
    },
    {
      value:"Type",
      id:15
    },
  ]
const newData =[]
  return (
    <View style={{ backgroundColor: "#E1FBFC", height: height }}>
      <View style={{ flex: 1,marginTop:40,flexDirection:"row",width }}>
        <Text style={styles.name}>Artist Type</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
            position: "absolute",
            right: 20,
            marginTop: 25,

          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={20} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
<ScrollView style={{ flex: 1 }}>
        <View style={styles.mainDiv}>

          {data.map((item)=>(
     <Music item={item} key={item?.id} press={press} setPress={setPress} data={newData}/>
          ))}
       </View>
        </ScrollView>

      </View>
      <TouchableOpacity style={{ flex: 1.2 }} onPress={async ()=>{
       await AsyncStorage.setItem("newData",JSON.stringify(newData))
        navigation.goBack()}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "white",
            marginTop: 20,
            borderWidth: 1,
            width: width / 1.1,
            alignSelf: "center",
            borderRadius: 50,
            height: 50,
            paddingTop: 10,
            fontWeight: "600",
            backgroundColor: "black",
          }}
        >
          Choose Artist Type
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ArtistType

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    textAlign: "center",
    marginTop: 20,
    color: "black",
    fontWeight: "600",
    width
  },

  mainDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    flexWrap:"wrap"
  },
  subDiv: {
    width: width / 3.5,
    backgroundColor: "white",
    margin: 12,
    height: 120,
    borderRadius: 12,
  },
  button: {
    padding: 10,
    width: width / 1.1,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 4,
  },
  text1: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    marginTop: 45,
    marginLeft: 5
  }
})
