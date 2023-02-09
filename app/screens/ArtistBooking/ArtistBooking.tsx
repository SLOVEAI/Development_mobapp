import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Modal,
  ScrollView,
} from "react-native"
import React, { useState } from "react"
import { colors } from "../../theme"

// @Vector ICONS
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

import MyButton from "../../components/MyButton"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import CalendarPicker from "react-native-calendar-picker"

// import DateTimePickerModal from "@react-native-community/datetimepicker"

const ArtistBooking = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [thnksModal, setThnksModal] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date)
    hideDatePicker()
  }
  return (
    <>
      <StatusBar backgroundColor={"black"} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.secoundContainer}>
          <View style={styles.firstComp}>
            <Text></Text>

            <Text style={styles.title}>Artist booking request</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossbtn}>
              <EvilIcons name="close" size={20} color="white" />
              {/* <Text style={{ color: "white" }}>X</Text> */}
            </TouchableOpacity>
          </View>
          {/* //Secound Comp */}
          <View style={styles.secoundComp}>
            <TouchableOpacity style={styles.secoundInnerBox}>
              <Image source={require("../../../assets/images/imageUpload.png")} />
            </TouchableOpacity>
            <Text>Choose event image</Text>
          </View>
          {/* //Secound Comp END*/}

          {/* 3rd Comp */}
          <View style={{ flex: 1 }}>
            <View style={styles.bigTxtInput}>
              <TextInput placeholder="Enter your message" />
            </View>

            <TextInput
              placeholder="Event Name"
              placeholderTextColor={"#6D7173"}
              style={{
                width: Dimensions.get("screen").width / 1.1,
                alignSelf: "center",
                backgroundColor: "white",
                margin: 10,
                paddingLeft: 20,
                fontSize: 16,
                fontWeight: "600",
              }}
            />
            <View
              style={{
                width: Dimensions.get("screen").width / 1.1,
                alignSelf: "center",
                backgroundColor: "white",
                margin: 10,
                paddingLeft: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput placeholder="Music type" />
              <TouchableOpacity onPress={() => navigation.navigate("MusicType")}>
                <AntDesign size={25} style={{ right: 10 }} name="plus" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: Dimensions.get("screen").width / 1.1,
                alignSelf: "center",
                backgroundColor: "white",
                margin: 10,
                paddingLeft: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput placeholder="Select date" />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign size={25} style={{ right: 10 }} name="plus" />
              </TouchableOpacity>

              {/* <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              /> */}
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <View
                style={{
                  flex: 1,

                  backgroundColor: "rgba(0,0,0,0.30)",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                >
                  <CalendarPicker
                    allowRangeSelection={false}
                    // onDateChange={this.onDateChange}
                    // todayBackgroundColor="blue"

                    nextComponent={<NextButton name="right" />}
                    previousComponent={<NextButton name="left" />}
                    selectedDayColor="#03989E"
                    selectedDayTextColor="#FFFFFF"
                    todayBackgroundColor="#03989E"
                    monthTitleStyle={{ color: "black", marginTop: 10 }}
                    yearTitleStyle={{ color: "white" }}
                    // textStyle={{ color: "blue" }}
                    dayLabelsWrapper={{
                      borderWidth: 0,

                      color: "blue",
                      borderColor: "white",
                      marginTop: 40,

                      // fontSize: "#03989E",
                    }}
                    // monthTitleStyle={{ colors: "blue" }}
                  />
                  <MyButton onpress={() => setThnksModal(true)} name="Choose date" />
                </View>
              </View>
            </Modal>
            <Modal
              statusBarTranslucent={true}
              animationType="slide"
              transparent={true}
              visible={thnksModal}
              onRequestClose={() => {
                setModalVisible(!thnksModal)
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0,0,0,0.70)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#C3F6F9",
                    margin: 20,
                    borderRadius: 30,
                    justifyContent: "center",
                    paddingVertical: 40,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: 45,
                      fontFamily:"ClashDisplay-Bold"

                    }}
                  >
                    Your booking request is sent
                  </Text>
                  <View style={{ marginHorizontal: 5 }}>
                    <Text style={{ textAlign: "center", paddingVertical: 20, color: "black" }}>
                      Your bio here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Condimentum dolor congue ipsum aliquam elementum pellentesque. Nec pretium
                      urna sit.
                    </Text>
                    <MyButton
                      onpress={() => {
                        setModalVisible(false), setThnksModal(false)
                      }}
                      name="OK"
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          {/* 3rd Comp END */}
          <View style={{ marginTop: 30 }}>
            <MyButton name="Continue" />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const customDatesStyles = [
  {
    date: "2022-05-01",
    style: { backgroundColor: "green" },
  },
  {
    date: "2022-05-02",
    style: { backgroundColor: "purple" },
  },
]

function NextButton({ name }) {
  return <AntDesign name={name} size={20} color="#03989E" />
}

export default ArtistBooking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.backgroundColor,
    // backgroundColor: "blue",
  },
  secoundContainer: {
    // flex: 1,

    margin: 10,
    marginVertical: 20,
    marginTop: 30,
  },
  firstComp: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },
  title: {
    color: "black",
  },
  crossbtn: {
    // width: "100%",
    justifyContent: "center",

    height: 30,
    width: 30,
    borderRadius: 35,
    backgroundColor: "black",
    // alignItems: "center",

    padding: 5,
    alignItems: "center",
  },
  secoundComp: {
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    marginVertical: 20,
  },
  secoundInnerBox: {
    padding: 30,
    borderRadius: 15,
    backgroundColor: "white",
  },
  bigTxtInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: "30%",
    borderColor: "lightgray",
    alignItems: "flex-start",
  },
  placeholder: {
    alignItems: "center",
    color: "blue",
  },
})
