import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Modal,
} from "react-native"
import React, { useState } from "react"
import { colors } from "../../theme"
import Icon from "react-native-vector-icons/AntDesign"
import { Switch } from "react-native-paper"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGOUT_USER } from "../../Redux/Constant"
import { useDispatch } from "react-redux"

const { height, width } = Dimensions.get("screen")

const Settings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false)

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
  const [modalVisible, setModalVisible] = useState(false)
const dispatch = useDispatch()
  return (
    <ScrollView
      style={{
        backgroundColor: colors.palette.backgroundColor,
      }}
    >
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
          <Image source={require("../../../assets/images/icoIcon.png")} />
          <Text style={styles.headerTitle}>Setting</Text>
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
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: width / 1.1, backgroundColor: "white", borderRadius: 40 }}>
            <TextInput placeholder="Search" style={{ paddingLeft: 14 }} />
            <Icon
              name="search1"
              size={20}
              color={"#8F9496"}
              style={{ position: "absolute", marginLeft: "90%", marginTop: "4%" }}
            />
          </View>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center", marginTop: "6%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={{
              backgroundColor: "white",
              height: height / 14,
              alignItems: "center",
              justifyContent: "center",
              width: width / 1.1,
              borderRadius: 20,
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ flexDirection: "row", width: "80%" }}>
              <Image source={require("../../../assets/icons/bell.png")} />
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>
                Notifications
              </Text>
            </View>
            <View style={{ flexDirection: "row", width: "10%" }}>
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={"#03989E"} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Messages")}
            style={{
              backgroundColor: "white",
              height: height / 14,
              alignItems: "center",
              justifyContent: "center",
              width: width / 1.1,
              borderRadius: 20,
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ flexDirection: "row", width: "90%" }}>
              <Image source={require("../../../assets/icons/chat.png")} />
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>
                Messages
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Gigs")}
            style={{
              backgroundColor: "white",
              height: height / 14,
              alignItems: "center",
              justifyContent: "center",
              width: width / 1.1,
              borderRadius: 20,
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ flexDirection: "row", width: "90%" }}>
              <Image source={require("../../../assets/icons/Music.png")} />
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>
                Gigs
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("HelpCenter")}
            style={{
              backgroundColor: "white",
              height: height / 14,
              alignItems: "center",
              justifyContent: "center",
              width: width / 1.1,
              borderRadius: 20,
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            <View style={{ flexDirection: "row", width: "90%" }}>
              <Image source={require("../../../assets/icons/help.png")} />
              <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>
                Help
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            backgroundColor: "white",
            marginTop: height / 3.9,
            height: height / 12,
            paddingLeft: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../../../assets/icons/Logout.png")} />

          <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>
            Log out
          </Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles?.centeredView}>
              <View style={styles?.modalView}>
                <Text style={styles?.modalText}>Are you sure you want to log out?</Text>
                <TouchableOpacity
                  style={[styles?.button, { marginTop: 60 }]}
                  onPress={async () => {
                    await AsyncStorage.setItem("id", "")
                    dispatch({ type: LOGOUT_USER })
                    navigation.navigate("HomeScreen")
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    Yes, log out
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles?.button}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  )
}

export default Settings

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
  centeredView: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height / 4,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#C3F6F9",
    borderRadius: 20,
    padding: 35,
    height: height / 2,
    width: width / 1.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
  },
  modalText: {
    color: "black",
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    fontFamily:"ClashDisplay-Bold"

  },
  button: {
    padding: 10,
    width: width / 1.3,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 10,
  },
})
