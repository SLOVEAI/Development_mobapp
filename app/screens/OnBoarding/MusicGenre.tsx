import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native"
import React from "react"
import { useState } from "react"
import { Checkbox } from "react-native-paper"
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors"
import Icon from "react-native-vector-icons/AntDesign"
import Music from "./Music"
import AsyncStorage from "@react-native-async-storage/async-storage"
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
const Musicgenre = ({ navigation }) => {
  const data = [
    {
      value: "Pop",
      id: 1,
    },
    {
      value: "Rock",
      id: 2,
    },
    {
      value: "Jazz",
      id: 3,
    },
    {
      value: "Country",
      id: 4,
    },
    {
      value: "Folk",
      id: 5,
    },
    {
      value: "EDM",
      id: 6,
    },
    {
      value: "Hip-Hop",
      id: 7,
    },
    {
      value: "House",
      id: 8,
    },
    {
      value: "Trance",
      id: 9,
    },
    {
      value: "Techno",
      id: 10,
    },
    {
      value: "Retro",
      id: 11,
    },
    {
      value: "Blue",
      id: 12,
    },
    {
      value: "Local music",
      id: 13,
    },
    {
      value: "Genre",
      id: 14,
    },
    {
      value: "Genre",
      id: 15,
    },
  ]
  const newData =[]

  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight/2,}}>
    <ScrollView>
    <View style={{ backgroundColor: "#E1FBFC", minHeight: height, }}>
      <View style={{ height: height/11,marginTop:30 }}>
        <Text style={styles.name}>Music genre</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
            position: "absolute",
            right: 10,
            margin: 15,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={20} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5, flexDirection: "row" }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mainDiv}>
            {data.map((item) => (
              <Music item={item} key={item?.id} data={newData} />
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={{ flex: 1.7,marginBottom:30 }} onPress={async ()=>{
       await AsyncStorage.setItem("newData2",JSON.stringify(newData))
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
          Choose music genre
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Musicgenre

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "black",
    fontWeight: "600",
  },

  mainDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  subDiv: {
    width: width / 3.68,
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
    marginLeft: 5,
  },
})
