import {
    StyleSheet, Text, View, StatusBar, TouchableOpacity,
    Dimensions, Image
} from 'react-native'
import React, { useState } from 'react'
import { colors } from "../../theme"
import Icon from "react-native-vector-icons/AntDesign"
import Arrow from "react-native-vector-icons/Ionicons"

const { height, width } = Dimensions.get("screen")

const HelpCenter = ({ navigation }) => {
    const [display, setdisplay] = useState(false)
    const [display2, setdisplay2] = useState(false)
    const [display3, setdisplay3] = useState(false)
    const [display4, setdisplay4] = useState(false)

    return (
        <View style={{
            backgroundColor: colors.palette.backgroundColor,
            marginTop: (StatusBar.currentHeight) / 2,minHeight:height
        }}>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor={colors.palette.backgroundColor}
            />
            <View style={styles.container}>
                <TouchableOpacity style={{
                    backgroundColor: "black",
                    width: 30,
                    padding: 5,
                    borderRadius: 50,

                }} onPress={() => navigation.goBack()}>
                    <Arrow name="arrow-back" size={20} color={"white"} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help center</Text>
                <TouchableOpacity style={{
                    backgroundColor: "black",
                    width: 30,
                    padding: 5,
                    borderRadius: 50,
                }} onPress={() => navigation.goBack()}>
                    <Icon name="close" size={20} color={"white"} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center",}}>
             
              <View style={{flexDirection:"row",backgroundColor: "white", width: width / 1.1, borderRadius: 20, marginTop: 14, padding: 10}}> 
                 <View style={{width:"90%"}}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>Contact us</Text>
                    <View style={{ display: display ? "flex" : "none" }}>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 14, paddingLeft: 10 }}>Email: slove@gmail.com</Text>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 14, paddingLeft: 10 }}>Phonenumber: 00-00000000</Text>
                    </View>

                </View>
                <TouchableOpacity  style={{width:"10%"}} onPress={()=>{setdisplay(!display)}}> 
                    <Icon name={display ? `up` :`down`} size={20}/>
                </TouchableOpacity>
                </View>
            

                <View style={{flexDirection:"row",backgroundColor: "white", width: width / 1.1, borderRadius: 20, marginTop: 14, padding: 10}}> 
                 <View style={{width:"90%"}}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>FAQ</Text>
                </View>
                <TouchableOpacity  style={{width:"10%"}} onPress={()=>{setdisplay2(!display2)}}> 
                    <Icon name={display2 ? `up` :`down`} size={20}/>
                </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row",backgroundColor: "white", width: width / 1.1, borderRadius: 20, marginTop: 14, padding: 10}}> 
                 <View style={{width:"90%"}}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>Terms & Privacy policy</Text>


                </View>
                <TouchableOpacity  style={{width:"10%"}} onPress={()=>{setdisplay3(!display3)}}> 
                    <Icon name={display3 ? `up` :`down`} size={20}/>
                </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row",backgroundColor: "white", width: width / 1.1, borderRadius: 20, marginTop: 14, padding: 10}}> 
                 <View style={{width:"90%"}}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 18, paddingLeft: 10 }}>App info</Text>
                </View>
                <TouchableOpacity  style={{width:"10%"}} onPress={()=>{setdisplay4(!display4)}}> 
                    <Icon name={display4 ? `up` :`down`} size={20}/>
                </TouchableOpacity>
                </View>



            </View>

        </View>
    )
}

export default HelpCenter

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
        fontWeight: "600"
    },
})