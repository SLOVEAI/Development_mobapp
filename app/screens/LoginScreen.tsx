import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react"
import { TextInput, Dimensions, TouchableOpacity, Text, View, Alert, ToastAndroid, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image } from "react-native"
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from '../Redux/Actions/Auth'
import { LOGIN_USER_FAIL } from "../Redux/Constant";
import { rootReducer } from "../Redux/Store";

const { width, height } = Dimensions.get("screen")

export default function LoginScreen({ navigation }) {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch: any = useDispatch()
  const { success, user, loading, error }: any = useSelector((state) => state.Auth)

  useEffect(() => {
    // if (success) {
    //   ToastAndroid.show("Logged Successful !", ToastAndroid.SHORT)
    // }
    if (user) {
      console.log(user)
      if (user?.message === "Incorrect email or password") {
        Alert.alert("", "Incorrect email or password")
        dispatch({ type: LOGIN_USER_FAIL })
      }
      if (user?.id) {
          ToastAndroid.show("Logged Successful !", ToastAndroid.SHORT)
      }
      data()
      
    }
    if (error) {
      console.error(error)
              Alert.alert("", JSON.stringify(error))

    }
  }, [success, error, user, error?.message, user?.message])


const data = async ()=>{
  if (user?.account_type === "Artist") {
    await AsyncStorage.setItem("id", JSON.stringify({ id: user?.id, account_type: user?.account_type }))

     navigation.navigate("BottomNavigator", {
       screen: "ProfileMusic"
     })
   }
  else if (user?.account_type === "Venue") {
   navigation.navigate("VenueBottomNavigator", {
     screen: "ProfileVenue"
   })
 } else if (user?.account_type === "Consumer") {
   ToastAndroid.show('Consumer Screens are Under Development !', ToastAndroid.SHORT);

 }
}


  const login = async () => {
    if (Email !== "" && Password !== "") {
      dispatch(LoginUser(Email, Password))
    } else {
      Alert.alert("", "Email And Password Are Required")
    }
  }





  return (
    <SafeAreaView style={{
      backgroundColor: "#C3F6F980", flex: 1,
    }}>

      <ScrollView style={{ backgroundColor: "#C3F6F980", marginTop: 60 }}>
        <View style={{ alignItems: "center", justifyContent: "center", }} >

          <View style={{ width: width / 1.1, flexDirection: "row" }}>
            <TouchableOpacity style={{ backgroundColor: "transparent", width: width / 2 }} onPress={() => navigation.goBack() || navigation.navigate("HomeScreen")}>
              <Image source={require("../../assets/images/back.png")} style={{ marginTop: 5, width: 35, height: 40, resizeMode: "contain" }} />
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate("CreateAccount")} style={{ color: "black", textDecorationLine: "underline", marginTop: 10, textAlign: "auto", fontSize: 20, fontWeight: "600", textDecorationColor: "black", textDecorationStyle: "solid" }}>Create an account</Text>

          </View>
        </View>
        <View style={{ backgroundColor: "#C3F6F980", paddingBottom: 20 }}>
          <View style={{ alignItems: "center", justifyContent: "center", }}>
            <View >
              <Text style={styles.text}>Log in to your account</Text>
            </View>

          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>

            <TextInput style={styles.textInput}
              value={Email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Enter Email"
              placeholderTextColor={"#6D7173"}
            />

            <TextInput style={styles.textInput}
              value={Password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={false}
              placeholder="Enter Password"
              placeholderTextColor={"#6D7173"}
            />
            <Text style={{ width: width / 1.1, color: "black", fontWeight: "600", marginVertical: 10 }}>
              Forgot your password
            </Text>

          </View>

          <View style={{ alignItems: "center", justifyContent: "center" }}>

            <TouchableOpacity onPress={login} style={styles?.button} disabled={loading}>
              <Text style={{
                color: "#fff", textAlign: "center", fontSize: 20, fontWeight: "600"
              }}>{loading ? "Loading" : "Log in"}</Text>
            </TouchableOpacity>
          </View>


          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{
              fontSize: 20,
              fontWeight: "400",
              width: width,
              textAlign: "center",
              color: "#6D7173",
              marginTop: 10
            }}>OR</Text>




            <TouchableOpacity style={styles?.button2}>
              <Text style={{
                color: "#000", textAlign: "center", fontSize: 20, fontWeight: "600"
              }}>  <Icon name="apple" size={24} color={"black"} /> Continue with Apple</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles?.button2}>
              <Text style={{
                color: "#000", textAlign: "center", fontSize: 20, fontWeight: "600"
              }}> <MaterialCommunityIcons name="facebook" size={30} color={"black"} /> Log in with Facebook</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles?.button2}>
              <Text style={{
                color: "#000", textAlign: "center", fontSize: 20, fontWeight: "600"
              }}> <Icon name="google"
                size={20} color={"black"} /> Log in with Google</Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{ padding: 30 }} /> */}
        </View>

      </ScrollView>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
    fontWeight: "600",
    width: width / 1.2,
    textAlign: "center",
    color: "black",
    marginTop: 20,
    marginBottom: 10,

  }, textInput: {
    width: width / 1.1,
    backgroundColor: "white",
    color: "#6D7173",
    fontWeight: "600",
    fontSize: 16, padding: 12,
    marginTop: 20
  },
  button: {
    padding: 10,
    width: width / 1.1,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 30
  },
  button2: {
    padding: 10,
    width: width / 1.1,
    backgroundColor: "transparent",
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black"
  }
})