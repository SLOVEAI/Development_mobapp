import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native"
import React from "react"
import { colors } from "../../theme"

// @Components
import DetailsCard from "../../components/DetailsCard"
import ContactCard from "../../components/ContactCard"
import MyButton from "../../components/MyButton"

// @Vector ICONS
import EvilIcons from "react-native-vector-icons/EvilIcons"
const width = Dimensions.get("screen").width
const DetailScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="rgba(0,0,0,0.100)" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{width:width}}>
          <Image resizeMode="cover" source={require("../../../assets/images/bgbg.png")} style={{width:width}} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              // width: "100%",
              justifyContent: "center",
              left: "87%",
              height: 40,
              width: 40,
              borderRadius: 35,
              backgroundColor: "black",
              // alignItems: "center",
              marginTop: 40,
              padding: 5,
              alignItems: "center",

              position: "absolute",
            }}
          >
            <EvilIcons name="close" size={30} color="white" />
            {/* <Text style={{ color: "white" }}>X</Text> */}
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <View style={styles.innerLocation}>
              <Image style={{ right: 5 }} source={require("../../../assets/images/Vector.png")} />
              <Text style={styles.address}>Stockholm, Sweden</Text>
            </View>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <DetailsCard />
        </View>
        <View
          style={{
            // backgroundColor: "blue",
            padding: 30,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ right: 5, height: 15, width: 15 }}
                source={require("../../../assets/images/Union.png")}
              />
              <Text style={styles.heading}>4.5</Text>
            </View>
            <Text style={styles.heading1}>rating</Text>
          </View>
          <Text
            style={[
              styles.heading,
              { fontSize: 30, alignItems: "center", justifyContent: "center" },
            ]}
          >
            |
          </Text>
          <View>
            <Text style={[styles.heading, { textAlign: "center" }]}>35K</Text>
            <Text style={styles.heading1}>followers</Text>
          </View>
        </View>
        {/* @Contact View */}
        <View style={{ margin: 10 }}>
          <ContactCard />
        </View>
        <MyButton name="Venue booking request" />
      </ScrollView>
    </>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    padding: 0,
    margin: 0,
  },
  locationContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 30,
    left: 5,
  },
  innerLocation: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  address: { fontWeight: "bold", color: "gray" },
  heading: {
    fontSize: 18,
  },
  heading1: {
    textAlign: "center",
  },
})
