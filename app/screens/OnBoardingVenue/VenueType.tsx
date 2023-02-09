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
import Venue from "./Venue"
import AsyncStorage from "@react-native-async-storage/async-storage"
  const height = Dimensions.get("screen").height
  const width = Dimensions.get("screen").width
  const VenueType = ({ navigation }) => {
  
    const data = [
      {
        value:"Bar",
        id:1
      },
      {
        value:"Night Club",
        id:2
      },
      {
        value:"Lounge",
        id:3
      },
      {
        value:"Arena",
        id:4
      },
      {
        value:"Concert hall",
        id:5
      },
      {
        value:"Festival ",
        id:6
      },
      {
        value:"Amusement park",
        id:7
      },
      {
        value:"Promoters",
        id:8
      },
      {
        value:"Booking agents",
        id:9
      },
      {
        value:"Record Label",
        id:10
      },
      {
        value:"Pubs",
        id:11
      },
      {
        value:"Theaters",
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
  const newData = []
    return (
      <View style={{ backgroundColor: "#E1FBFC", height: height }}>
        <View style={{ flex: 0.7,flexDirection:"row",marginTop:50 }}>
          <Text style={styles.name}>Venue type</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 30,
              height:30,
              padding: 5,
              borderRadius: 50,
           right: 10,
              margin: 15,
              position:"absolute"
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
       <Venue item={item} key={item?.id} data={newData}/>
            ))}
         </View>
          </ScrollView>
  
        </View>
        <TouchableOpacity style={{ flex: 1.3 }}
         onPress={async ()=>{
          await AsyncStorage.setItem("venue",JSON.stringify(newData))
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
            Choose Venue Type
          </Text>
          </TouchableOpacity>
        </View>
     
    )
  }
  
  export default VenueType
  
  const styles = StyleSheet.create({
    name: {
      fontSize: 26,
      textAlign: "center",
      marginTop: 20,
      color: "black",
      fontWeight: "600",
      width:width,  
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
  