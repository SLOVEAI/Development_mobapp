import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/AntDesign"
// import Music from "../OnBoarding/Music"
import Music from "../OnBoarding/Artist"

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
const MusicType = ({ navigation, route }) => {
  const { title } = route?.params
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

  return (
    <>
      <FlatList
        key={Math.random() * 1000}
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={{ flex: 0.9, marginVertical: 20 }}>
              <Text style={styles.name}>{title}</Text>
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
          </>
        }
        numColumns={3}
        style={{ margin: 2, height: height, backgroundColor: "#E1FBFC" }}
        renderItem={(item) => {
          console.log("VALEEES", item.item.value)

          return (
            <>
              <Music item={item.item.value} key={item.item.id} />
            </>
          )
        }}
      />
    </>
  )
}

export default MusicType

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
