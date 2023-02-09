import React, { useEffect, useState } from "react"
import { TextInput, Dimensions, TouchableOpacity, Text, View,Alert, StyleSheet, SafeAreaView,ToastAndroid, StatusBar, ScrollView, Image } from "react-native"
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Checkbox } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { width, height } = Dimensions.get("screen")

export function SignUpScreen({ navigation }) {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [press, setPress] = useState(true)


    const dispatch:any = useDispatch()

    const { success,error,loading } = useSelector(state => state?.Auth)
  
    useEffect(() => {
    //   if (success) {
    //     ToastAndroid.show('Registration Completed !', ToastAndroid.SHORT);
    //     navigation.navigate("Login")
    //   }
      if (error) {
        console.error(error)
      }
    }, [error,success])
  
  
    const register = async () => {
      if (Email !== "" && Password !== "") {
        await AsyncStorage.setItem("auth",JSON.stringify({email:Email,password:Password}))
        navigation.navigate("Area",{
            Email,Password
        })
      } else {
        Alert.alert("", "Email And Password Are Required")
      }
    }


    return (
      <SafeAreaView
        style={{
          backgroundColor: "#C3F6F980",
          flex: 1,
        }}
      >
        <ScrollView style={{ backgroundColor: "#C3F6F980", paddingTop: 50, flex: 1 }}>
          <View style={{ alignItems: "center", justifyContent: "center", }}>
            <View style={{ width: width / 1.1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ backgroundColor: "transparent", width: width / 1.3 }}
                onPress={() => navigation.goBack() || navigation.navigate("HomeScreen")}
              >
                <Image
                  source={require("../../assets/images/back.png")}
                  style={{ width: 40, height: 40, resizeMode: "contain" }}
                />
              </TouchableOpacity>

              <Text
                onPress={() => navigation.navigate("Login")}
                style={{
                  color: "black",
                  textDecorationLine: "underline",
                  marginTop: 10,
                  textAlign: "auto",
                  fontSize: 20,
                  fontWeight: "600",
                  textDecorationColor: "black",
                  textDecorationStyle: "solid",
                  fontFamily: "Manrope-SemiBold",
                }}
              >
                Login
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#C3F6F980", paddingBottom: 20 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.text}>Create your account</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TextInput
                style={styles.textInput}
                value={Email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Enter Email"
                placeholderTextColor={"#6D7173"}
              />

              <TextInput
                style={styles.textInput}
                value={Password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Enter Password"
                placeholderTextColor={"#6D7173"}
              />
              <Text
                style={{
                  width: width / 1.1,
                  color: "black",
                  fontWeight: "600",
                  marginVertical: 10,
                  fontFamily: "Manrope-SemiBold",
                }}
              >
                Forgot your password
              </Text>

              <Text
                style={{
                  width: width / 1.4,
                  fontSize: 16,
                  textAlign: "center",
                  color: "#6D7173",
                  marginVertical: 8,
                  fontFamily: "Manrope-SemiBold",
                }}
              >
                In order to start using Slove, please first agree to our
                <Text style={{ fontWeight: "700" }}> Terms & Conditions. </Text>
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}
              >
                <Checkbox
                  onPress={() => setPress(!press)}
                  status={press ? "checked" : "unchecked"}
                  color={"black"}
                />
                <Text style={{ fontWeight: "600", color: "black", fontFamily: "Manrope-SemiBold" }}>
                  I agree to Slove’s Terms & Conditions
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity onPress={register} style={styles?.button} disabled={loading}>
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    fontFamily: "Manrope-SemiBold",
                  }}
                >
                  {loading ? "Loading" : "Create account"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  width: width,
                  textAlign: "center",
                  color: "#6D7173",
                  marginTop: 6,
                  fontFamily: "Manrope-SemiBold",
                }}
              >
                OR
              </Text>

              <TouchableOpacity style={styles?.button2}>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    fontFamily: "Manrope-SemiBold",
                  }}
                >
                  {" "}
                  <Icon name="apple" size={24} color={"black"} /> Continue with Apple
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles?.button2}>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    fontFamily: "Manrope-SemiBold",
                  }}
                >
                  {" "}
                  <MaterialCommunityIcons name="facebook" size={30} color={"black"} /> Log in with
                  Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles?.button2}>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    fontFamily: "Manrope-SemiBold",
                  }}
                >
                  {" "}
                  <Icon name="google" size={20} color={"black"} /> Log in with Google
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ padding: 30 }} />
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
        marginTop: 10,
        fontFamily:"ClashDisplay-Bold"
    }, textInput: {
        width: width / 1.1,
        backgroundColor: "white",
        color: "#6D7173",
        fontWeight: "600",
        fontSize: 16, padding: 12,
        marginTop: 20,fontFamily:"Manrope-SemiBold"
    },
    button: {
        padding: 10,
        width: width / 1.1,
        backgroundColor: "#000",
        borderRadius: 20,
        marginTop: 4
    },
    button2: {
        padding: 10,
        width: width / 1.1,
        backgroundColor: "transparent",
        borderRadius: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor:"black"
    }
})