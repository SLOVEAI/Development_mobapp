/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import { SignUpScreen } from "../screens/SignUp"
// import {
//   LoginScreen, // @demo remove-current-line
// SignUpScreen
// } from "../screens"
import Area from "../screens/Area/Area"
import HomeScreen from "../screens/HomeSliderScreen/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import Onboarding1 from "../screens/OnBoarding/Onboarding1"
import Onboarding2 from "../screens/OnBoarding/Onboarding2"
import ArtistType from "../screens/OnBoarding/ArtistType"
import MusicGenre from "../screens/OnBoarding/MusicGenre"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import OnBoarding3 from "../screens/OnBoarding/onBoarding3"
import OnBoardingVenue1 from "../screens/OnBoardingVenue/OnBoardingVenue1"
import OnBoardingVenue4 from "../screens/OnBoardingVenue/OnBoardingVenue4"
import OnBoardingVenue3 from "../screens/OnBoardingVenue/OnBoardingVenue3"
import OnboardingConsumer1 from "../screens/OnboardingConsumer/OnboardingConsumer1"
import OnboardingConsumer2 from "../screens/OnboardingConsumer/OnboardingConsumer2"
import OnBoardingVenue2 from "../screens/OnBoardingVenue/OnBoardingVenue2"
import VenueType from "../screens/OnBoardingVenue/VenueType"
import Contact from "../screens/Contact/Contact"
import Chats from "../screens/Chats/Chats"
import EventReq from "../screens/EventReq/EventReq"
import YourEvents from "../screens/YourEvents/YourEvents"
import ChooseToAttend from "../screens/ChooseToAttend/ChooseToAttend"
// @BottomTabScreen
import Homemusician from "../screens/Musician/HomeMusician/Homemusician"
import DetailScreen from "../screens/DetailScreen/DetailScreen"
import MoreReviews from "../screens/MoreReviews/MoreReviews"
import Settings from "../screens/Settings/Settings"
import ArtistBooking from "../screens/ArtistBooking/ArtistBooking"
import MusicType from "../screens/MusicType/MusicType"
import Notification from "../screens/Notification/Notification"
import Notification2 from "../screens/Notification2/Notification2"
import HelpCenter from "../screens/HelpCenter/HelpCenter"

// @Venue Screens
import LivePerfomance from "../screens/Venue/Screens/LivePerfomance/LivePerfomance"

// @Navigator
import BottomNavigator from "./BottomNavigator"
import { VenueBottomNavigator } from "./BottomNavigator"
import Gigs from "../screens/Gigs/Gigs"
import Messages from "../screens/Message/Message"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  CreateAccount: undefined
  HomeScreen: undefined
  Area: undefined
  Onboarding1: undefined
  onBoarding3: undefined
  OnBoardingVenue1: undefined
  OnBoardingVenue3: undefined
  OnBoardingVenue4: undefined
  OnboardingConsumer1: undefined
  OnboardingConsumer2: undefined
  Musicgenre: undefined
  OnBoardingVenue2: undefined
  Artisttype: undefined
  Onboarding2: undefined
  VenueType: undefined
  Homemusician: undefined
  DetailScreen: undefined
  BottomNavigator: undefined
  Settings: undefined
  MoreReviews: undefined
  ArtistBooking: undefined
  MusicType: undefined
  Notification: undefined
  Notification2: undefined
  HelpCenter: undefined
  Contact: undefined
  VenueBottomNavigator: undefined
  LivePerfomance: undefined
  Chats: undefined
  EventReq: undefined
  YourEvent: undefined
  Gigs: undefined
  ChooseToAttend: undefined
  Messages:undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"HomeScreen"}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateAccount" component={SignUpScreen} />

      <Stack.Screen name="onBoarding3" component={OnBoarding3} />

      <Stack.Screen name="OnBoardingVenue1" component={OnBoardingVenue1} />
      <Stack.Screen name="OnBoardingVenue2" component={OnBoardingVenue2} />
      <Stack.Screen name="OnBoardingVenue3" component={OnBoardingVenue3} />
      <Stack.Screen name="OnBoardingVenue4" component={OnBoardingVenue4} />
      <Stack.Screen name="Artisttype" component={ArtistType} />
      <Stack.Screen name="Musicgenre" component={MusicGenre} />

      <Stack.Screen name="OnboardingConsumer1" component={OnboardingConsumer1} />

      <Stack.Screen name="OnboardingConsumer2" component={OnboardingConsumer2} />

      {/* Notification */}

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Area" component={Area} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="VenueType" component={VenueType} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="Gigs" component={Gigs} />
      <Stack.Screen name="Messages" component={Messages} />

      {/* Messages */}
      {/* @bottomTabStack */}
      {/* {/* <Stack.Screen name="Homemusician" component={Homemusician} /> */}

      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      {/* setting */}

      <Stack.Screen name="Contact" component={Contact} />

      <Stack.Screen
        // options={{ headerShown: false }}
        options={{ headerShown: false }}
        name="BottomNavigator"
        component={BottomNavigator}
      />
      <Stack.Screen name="MoreReviews" component={MoreReviews} />
      <Stack.Screen name="ArtistBooking" component={ArtistBooking} />
      <Stack.Screen name="MusicType" component={MusicType} />

      <Stack.Screen
        // options={{ headerShown: false }}
        options={{ headerShown: false }}
        name="VenueBottomNavigator"
        component={VenueBottomNavigator}
      />

      {/* @Venue Screens */}
      <Stack.Screen name="LivePerfomance" component={LivePerfomance} />

      {/* @chats */}
      <Stack.Screen name="Chats" component={Chats} />
      {/* // @event request */}
      <Stack.Screen name="EventReq" component={EventReq} />
      <Stack.Screen name="YourEvent" component={YourEvents} />
      <Stack.Screen name="ChooseToAttend" component={ChooseToAttend} />
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
