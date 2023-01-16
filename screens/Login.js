import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput } from "react-native";
import { RectButton, CircleButton, ButtonLogin } from "../components/Button";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
      });
      const [status, setStatus] = useState({
        hasil: "false"
      });

  const formsChange = (event) => {
    const { text } = event;
    let processedData = text;
    setState({
      username : processedData
    })
 }

 const submitForms = () => {
    if(state.username === "Ryuza"){
        navigation.navigate("Home")
    }else{
        alert("User Not Found")
    }
    // let data = this.state.teks;
    // this.setState({
    //   submitteks : data
    // })
 }

 const text = status.hasil
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "#202020", flex: 1, justifyContent: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 230, height: 100 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/1200px-CGV_logo.svg.png",
          }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <TextInput
            placeholder="Username"
            style={{ flex: 1}}
            onChangeText={text => formsChange({ text })}
            value={state.teks}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <TextInput placeholder="Password" secureTextEntry={true} style={{ flex: 1 }} />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View style={{}}>
          <ButtonLogin
            minWidth={120}
            text={"Login"}
            fontSize={SIZES.font}
            handlePress={submitForms}
          />
        </View>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>
            Belum punya akun?{" "}
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Regiter Sekarang!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
