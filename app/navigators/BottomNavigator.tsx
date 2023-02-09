import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// @Screen
import Homemusician from "../screens/Musician/HomeMusician/Homemusician"
import DiscoverMusic from "../screens/Musician/DiscoverMusic/DiscoverMusic"
import InsightMusic from "../screens/Musician/InsightMusic/InsightMusic"
import ProfileMusic from "../screens/Musician/ProfileMusic/ProfileMusic"

// @VenueScreens
import HomeVenue from "../screens/Venue/HomeVenue/HomeVenue"
import DiscoverVenue from "../screens/Venue/DiscoverVenue/DiscoverVenue"
import InsightVenue from "../screens/Venue/InsightVenue/InsightVenue"
import ProfileVenue from "../screens/Venue/ProfileVenue/ProfileVenue"

// @ICONS
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <AntDesign name="home" size={20} color="gray" />
            ) : (
              <Entypo name="home" size={20} color="black" />
            )
          },
          title: "Home",
        }}
        name="Homemusician"
        component={Homemusician}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Fontisto name="stopwatch" size={20} color="gray" />
            ) : (
              <Fontisto name="stopwatch" size={20} color="black" />
            )
          },
          title: "Discover",
        }}
        name="DiscoverMusic"
        component={DiscoverMusic}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Image source={require("../../assets/images/insight.png")} />
            ) : (
              <Entypo name="line-graph" size={20} color="black" />
            )
          },
          title: "Insights",
        }}
        name="InsightMusic"
        component={InsightMusic}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Image source={require("../../assets/images/profileunselect.png")} />
            ) : (
              <Image source={require("../../assets/images/profileSelect.png")} />
            )
          },
          title: "Profile",
        }}
        name="ProfileMusic"
        component={ProfileMusic}
      />
    </Tab.Navigator>
  )
}

const VenueBottomNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <AntDesign name="home" size={20} color="gray" />
            ) : (
              <Entypo name="home" size={20} color="black" />
            )
          },
          title: "Home",
        }}
        name="HomeVenue"
        component={HomeVenue}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Fontisto name="stopwatch" size={20} color="gray" />
            ) : (
              <Fontisto name="stopwatch" size={20} color="black" />
            )
          },
          title: "Discover",
        }}
        name="DiscoverVenue"
        component={DiscoverVenue}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Image source={require("../../assets/images/insight.png")} />
            ) : (
              <Entypo name="line-graph" size={20} color="black" />
            )
          },
          title: "Insights",
        }}
        name="InsightVenue"
        component={InsightVenue}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return !focused ? (
              <Image source={require("../../assets/images/profileunselect.png")} />
            ) : (
              <Image source={require("../../assets/images/profileSelect.png")} />
            )
          },
          title: "Profile",
        }}
        name="ProfileVenue"
        component={ProfileVenue}
      />
    </Tab.Navigator>
  )
}
export default BottomNavigator
export { VenueBottomNavigator }

const styles = StyleSheet.create({})
