import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native"
import React from "react"
import Icon from "react-native-vector-icons/AntDesign"
import { colors } from "../../theme"
import { StatusBar } from "expo-status-bar"
import { goBack } from "../../navigators"
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
const Contact = ({ navigation }) => {
  const Data = [
    {
      id: "1",
      img: require("../../../assets/images/music.png"),
      title: "Equinox",
      email: "mail@gmail.com",
      img2: require("../../../assets/icons/chat.png"),
    },
    {
      id: "2",
      img: require("../../../assets/images/music.png"),
      title: "Equinox",
      email: "mail@gmail.com",
      img2: require("../../../assets/icons/chat.png"),
    },
    {
      id: "3",
      img: require("../../../assets/images/music.png"),
      title: "Equinox",
      email: "mail@gmail.com",
      img2: require("../../../assets/icons/chat.png"),
    },
    {
      id: "4",
      img: require("../../../assets/images/music.png"),
      title: "Equinox",
      email: "mail@gmail.com",
      img2: require("../../../assets/icons/chat.png"),
    },
    {
      id: "5",
      img: require("../../../assets/images/music.png"),
      title: "Equinox",
      email: "mail@gmail.com",
      img2: require("../../../assets/icons/chat.png"),
    },
  ]
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Image source={item?.img} />
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.mail}>{item.email}</Text>
      </View>
      <View style={styles.image}>
        <Image source={item.img2} />
      </View>
    </View>
  )
  return (
    <View style={{ height: height, backgroundColor: "#E1FBFC" }}>
      <View style={styles.container}>
        <Image source={require("../../../assets/images/icoIcon.png")} />
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.headerTitle}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
          }}
          onPress={()=> navigation.goBack()}
        >
          <Icon name="close" size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: width / 1.1,

            backgroundColor: "white",
            borderRadius: 40,
            marginBottom:20
          }}
        >
          <TextInput placeholder="Search" style={{ paddingLeft: 14 }} />
          <Icon
            name="search1"
            size={20}
            color={"#8F9496"}
            style={{ position: "absolute", marginLeft: "90%", marginTop: "4%" }}
          />
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    padding: 10,
  },
  headerTitle: {
    color: "#303233",
    fontSize: 17,
    fontWeight: "600",
  },

  item: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontFamily: "Clash Display",
    fontWeight: "800",
    color: "black",
    lineHeight: 28.2,
    marginTop: 10,
    marginLeft: 20,
  },
  mail: {
    marginLeft: 20,
    color: "black",
  },
  image: {
    marginLeft: 120,
    marginTop: 20,
  },
})
