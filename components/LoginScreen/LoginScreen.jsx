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
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocusInput, setIsFocusInput] = useState({
    email: false,
    password: false,
  });
  const [isShowPassword, setIsShowPassword] = useState(true);

  const keyboardHide = () => {
    if (isFocusInput.email === "" || isFocusInput.password === "") {
      alert("Email та Password повинні бути заповнені.");
      return;
    }
    Keyboard.dismiss();
    setIsShowKeyboard(false);
     console.log(state);
     navigation.navigate("Home");
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/bg.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formWrapper,

                ...Platform.select({
                  ios: {
                    marginTop: isShowKeyboard ? 484 : 0,
                  },
                  android: {
                    marginTop: isShowKeyboard ? -20 : 0,
                  },
                }),
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  marginTop: isShowKeyboard ? 24 : 0,
                }}
              >
                Увійти
              </Text>

              <View
                style={{
                  ...styles.form,
                  paddingBottom: isShowKeyboard ? 32 : 111,
                }}
              >
                <View style={styles.inputMail}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.email ? "#FF6C00" : "#F6F6F6",
                      backgroundColor: isFocusInput.email
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    textAlign={"left"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.email}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => {
                      setIsShowKeyboard(true),
                        setIsFocusInput({
                          ...isFocusInput,
                          email: true,
                        });
                    }}
                    onBlur={() => {
                      setIsFocusInput({
                        ...isFocusInput,
                        email: false,
                      });
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />
                </View>

                <View style={styles.inputPassword}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.password
                        ? "#FF6C00"
                        : "#F6F6F6",
                      backgroundColor: isFocusInput.password
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    textAlign={"left"}
                    placeholderTextColor={"#BDBDBD"}
                    value={state.password}
                    secureTextEntry={isShowPassword}
                    placeholder="Пароль"
                    onFocus={() => {
                      setIsShowKeyboard(true),
                        setIsFocusInput({
                          ...isFocusInput,
                          password: true,
                        });
                    }}
                    onBlur={() => {
                      setIsFocusInput({
                        ...isFocusInput,
                        password: false,
                      });
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text
                    style={styles.showPass}
                    onPress={() => {
                      setIsShowPassword((prevState) => !prevState);
                    }}
                  >
                    {isShowPassword ? "Показати" : "Приховати"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.aside}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    paddingLeft: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
  },
  inputMail: {
    marginTop: 32,
  },
  inputPassword: {
    marginTop: 16,
  },
  showPass: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 16,
    position: "absolute",
    top: 16,
    left: 260,
    color: "#1B4371",
  },
  button: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 61,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
  },
  aside: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
