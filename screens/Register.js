import React from "react";
import { Text, View, ScrollView, Image, Button, TextInput } from "react-native";
import { RectButton, CircleButton, ButtonLogin } from "../components/Button";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
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
          <TextInput placeholder="Email" style={{ flex: 1 }} />
        </View>
        <View
          style={{
            marginTop:10,
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <TextInput placeholder="No HP" style={{ flex: 1 }} />
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
          <TextInput placeholder="Password" style={{ flex: 1 }} />
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View style={{}}>
          <ButtonLogin
            minWidth={120}
            text={"Register"}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>
            Sudah punya akun?{" "}
            <Text style={{ fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
            >Login</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
