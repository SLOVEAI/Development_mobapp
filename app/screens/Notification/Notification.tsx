import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native"
import React from "react"
import { colors } from "../../theme"
import Icon from "react-native-vector-icons/AntDesign"
import Arrow from "react-native-vector-icons/Ionicons"

const { height, width } = Dimensions.get("screen")

const Notification = ({ navigation }) => {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
  ]

  return (
    <View
      style={{
        backgroundColor: colors.palette.backgroundColor,
        marginTop: StatusBar.currentHeight / 2,
      }}
    >
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={colors.palette.backgroundColor}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Arrow name="arrow-back" size={20} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 30,
            padding: 5,
            borderRadius: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={20} color={"white"} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          backgroundColor: colors.palette.backgroundColor,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center", marginBottom: "6%" }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "white",
                  height: height / 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: width / 1.1,
                  borderRadius: 20,
                  flexDirection: "row",
                  marginTop: 14,
                }}
              >
                <View style={{ flexDirection: "column", width: "80%" }}>
                  <Text
                    style={{ color: "black", fontWeight: "800", fontSize: 16, paddingLeft: 10 }}
                  >
                    Notification heading
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: 14,
                      paddingLeft: 10,
                      lineHeight: 18,
                    }}
                  >
                    Write your notification message here on a few rows.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "18%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={require("../../../assets/icons/bell.png")} />
                </View>
              </View>
            )}
            keyExtractor={(item) => item?.id}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Notification

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
})
