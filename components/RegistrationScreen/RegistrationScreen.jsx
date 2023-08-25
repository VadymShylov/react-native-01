import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";



export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [isOnFocus, setIsOnFocus] = useState(false);

//   const keyboardHide = () => {
//     setIsShowKeyboard(!isShowKeyboard);
//     Keyboard.dismiss();
//   };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
      <View style={styles.container}>
        {/* Кнопка уходит под клавиатуру но не возвращается */}
        <View
          style={{ ...styles.form, marginBottom: !isShowKeyboard ? "" : "" }}
        >
          {/* userIcon */}
          <View style={styles.userIconWrapper}>
            <View style={styles.userIcon}></View>
            <EvilIcons
              name="plus"
              size={25}
              color="#FF6C00"
              style={styles.iconPlus}
            />
          </View>

          <Text style={styles.text}>Реєстрація</Text>
          <View style={{ marginTop: 32 }}>
            <TextInput
              placeholder="Логін"
              style={styles.input}
              onFocus={() => {}}
            />
          </View>
          <View>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onFocus={() => {}}
            />
          </View>
          <View style={{ marginBottom: 32 }}>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              style={{ ...styles.input, position: "relative" }}
              onFocus={() => {}}
            />
            <Text
              style={{
                position: "absolute",
                top: 35,
                right: 30,
                color: "#1b4371",
              }}
            >
              Показати
            </Text>
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.textBtn}>Зареєстуватися</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textAccount}> Вже є акаунт? Увійти</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    //  justifyContent: "center",
    //  alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //  paddingTop: 32,
    paddingBottom: 45,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#212121",
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.3,
    marginTop: 82,
  },
  input: {
    borderWidth: 1,
    width: 343,

    borderColor: "#e8e8e8",
    backgroundColor: "#e8e8e8",
    color: "#212121",
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  inputActive: {
    borderColor: "#ff6c00",
    backgroundColor: "#ffffff",
  },
  btn: {
    backgroundColor: "#ff6c00",
    width: 343,
    height: 50,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto-Medium",
  },
  textBtn: {
    color: "#ffffff",
    fontSize: 16,
  },
  textAccount: {
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#1b4371",
  },
  userIconWrapper: {
    position: "absolute",
    height: 132,
    width: 120,
    //  marginBottom: 32,
    alignItems: "center",
    top: -60,
  },
  userIcon: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
  },
  iconPlus: {
    left: 60,
    bottom: 70,
  },
});
