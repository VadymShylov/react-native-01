import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const formatDate = (date) => {
  return format(Date.parse(date), "dd MMMM, yyyy | HH:mm:ss", {
    locale: en,
  });
};

export const CommentsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [comment, setComment] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          // style={styles.postWrapper}
          style={{
            ...styles.postWrapper,

            ...Platform.select({
              ios: {
                // marginTop: isShowKeyboard ? -300 : 0,
                marginBottom: isShowKeyboard ? 145 : 0,
              },
              android: {
                marginTop: isShowKeyboard ? -290 : -32,
              },
            }),
          }}
        >
          <ScrollView>
            <Image
              source={require("../../assets/images/comment.jpg")}
              style={styles.post}
            />
            <SafeAreaView style={styles.wrapper}>
              <View style={styles.wrapperComment}>
                <Image
                  style={styles.avatar}
                  source={require("../../assets/images/avatar.png")}
                />
                <View style={styles.commentContainer}>
                  <Text style={styles.userComment}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>

                  <Text style={styles.userPostedDate}>
                    09 червня, 2020 | 08:40
                  </Text>
                </View>
              </View>

              <View
                style={{
                  ...styles.wrapperComment,
                  flexDirection: "row-reverse",
                }}
              >
                <Image
                  style={{ ...styles.avatar, marginLeft: 16 }}
                  source={require("../../assets/images/avatar.png")}
                />
                <View style={styles.commentContainer}>
                  <Text style={styles.userComment}>
                    A fast 50mm like f1.8 would help with the bokeh. I’ve been
                    using primes as they tend to get a bit sharper images.
                  </Text>

                  <Text style={styles.userPostedDate}>
                    09 червня, 2020 | 08:40
                  </Text>
                </View>
              </View>
              <View style={styles.wrapperComment}>
                <Image
                  style={styles.avatar}
                  source={require("../../assets/images/avatar.png")}
                />
                <View style={styles.commentContainer}>
                  <Text style={styles.userComment}>
                   Thank you! That was very helpful!
                  </Text>

                  <Text style={styles.userPostedDate}>
                    09 червня, 2020 | 08:40
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholderTextColor={"#BDBDBD"}
              placeholder="Комментировать..."
              // style={styles.input}
              style={{
                ...styles.input,

                ...Platform.select({
                  ios: {
                    // marginTop: isShowKeyboard ? -300 : 0,
                    marginBottom: isShowKeyboard ? 0 : 0,
                  },
                  android: {},
                }),
              }}
              value={comment}
              onChangeText={(value) => setComment(value)}
              onBlur={keyboardHide}
              onFocus={() => setIsShowKeyboard(true)}
            ></TextInput>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <AntDesign name="arrowup" size={20} color="#FFFFFF" />
              {/* <Text style={styles.buttonText}>Опубликовать</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 32,

    // borderColor: "red",
    // borderWidth: 1,
  },
  wrapper: {
    height: 350,
    alignItems: "flex-end",

    // borderColor: "black",
    // borderWidth: 2,
  },
  wrapperComment: {
    display: "flex",
    flexDirection: "row",
  },
  commentContainer: {
    padding: 16,
    marginBottom: 24,
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderColor: "rgba(0, 0, 0, 0.03)",
    width: 299,

    //  alignItems: "flex-end",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },

  post: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 32,
    paddingTop: 32,
  },
  input: {
    position: "relative",
    padding: 16,
    height: 50,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 18,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    boxSizing: "border-box",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  button: {
    position: "absolute",
    left: "80%",
    // right: 8,
    top: 8,
    marginHorizontal: 25,
    backgroundColor: "#FF6C00",
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    color: "#BDBDBD",
  },
  userComment: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  userPostedDate: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 11.72,
    color: "#BDBDBD",
    textAlign: "right",
  },
});
