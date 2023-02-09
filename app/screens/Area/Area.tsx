import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React from "react"
import { RadioButton } from "react-native-paper"
import { Button } from "../../components"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Area = ({ route,navigation }) => {
  const [checked, setChecked] = React.useState("Artist")
  const {  Email,Password } = route.params;

  const height = Dimensions.get("screen").height
  const width = Dimensions.get("screen").width
  const moveOn = async ()=>{
   const data =  await AsyncStorage.getItem("auth")
   await AsyncStorage.setItem("auth",JSON.stringify({email: JSON.parse(data).email,password:JSON.parse(data).password,account_type:checked}))
   navigation.navigate(checked === "Artist"? "Onboarding1":checked === "Venue"?"OnBoardingVenue1":"OnboardingConsumer1")
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#E1FBFC", height,paddingTop:20
     }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              lineHeight: 22.14,
              width: width,
              alignSelf: "center",
              fontFamily: "ClashDisplay-Semibold",
              top: 56,
              color: "black",
              textAlign: "center",
            }}
          >
            Choose your area
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            top: 85,
            width: width / 1.2,
            textAlign: "center",
            height: 41,
            lineHeight: 20,
            color: "black",
            fontFamily:"Manrope-Medium",
            
          }}
        >
          Connect, promote, network with music lovers and get a gig at live performance venue today!
        </Text>
      </View>
      <View style={{ bottom: 35, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgrey",
            height: 110,
            top: 164,
            width: width / 1.1,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <View></View>
            <View style={{ left: 20, flexDirection: "column", marginTop: 20 }}>
              <RadioButton
                value="Artist"
                status={checked === "Artist" ? "checked" : "unchecked"}
                onPress={() => setChecked("Artist")}
                color="#000"
              />
              <Text style={{ fontWeight: "600", color: "black", fontSize: 15, marginTop: 20,fontFamily: "ClashDisplay-Semibold",
 }}>
                Artist
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{ top: 30, zIndex: 22, right: 20 }}
              source={require("../../../assets/images/rr.png")}
            />
            <Image
              style={{ bottom: 40, right: 70, zIndex: 1 }}
              source={require("../../../assets/images/rr1.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 110,
            top: 174,
            width: width / 1.1,

            borderRadius: 10,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightgrey",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <View></View>
            <View style={{ left: 20, flexDirection: "column", marginTop: 20 }}>
              <RadioButton
                value="Venue"
                status={checked === "Venue" ? "checked" : "unchecked"}
                onPress={() => setChecked("Venue")}
                color="#000"
              />
              <Text style={{ fontWeight: "600", color: "black", fontSize: 15, marginTop: 20,fontFamily: "ClashDisplay-Semibold",
 }}>
                Venue
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{ top: 30, zIndex: 22, right: 60 }}
              source={require("../../../assets/images/rr.png")}
            />
            <Image
              style={{ zIndex: 2, right: 50 }}
              source={require("../../../assets/images/rr3.png")}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 110,
            top: 184,
            width: width / 1.1,
            borderRadius: 10,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightgrey",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <View></View>
            <View style={{ left: 20, flexDirection: "column", marginTop: 20 }}>
              <RadioButton
                value="Consumer"
                status={checked === "Consumer" ? "checked" : "unchecked"}
                onPress={() => setChecked("Consumer")}
                color="#000"
              />
              <Text style={{ fontWeight: "600", color: "black", fontSize: 15, marginTop: 20,fontFamily: "ClashDisplay-Semibold",
 }}>
                Consumer
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{ top: 55, zIndex: 22, left: 60 }}
              source={require("../../../assets/images/rr.png")}
            />
            <Image
              style={{ zIndex: 2, bottom: 25 }}
              source={require("../../../assets/images/rr4.png")}
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          style={{
            width: width / 1.1,
            alignSelf: "center",
            marginTop: 200,
            backgroundColor: "black",
            borderRadius: 50,
          }}
          onPress={moveOn}
        >
          <Text style={{ color: "white",fontFamily:"Manrope-SemiBold"
}}>Continue</Text>
        </Button>
      </View>
    </ScrollView>
  )
}

export default Area

const styles = StyleSheet.create({})
