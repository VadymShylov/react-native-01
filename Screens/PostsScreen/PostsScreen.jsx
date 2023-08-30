import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});


  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.imgBox}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/avatar.png")}
          />
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>

      <View>
        <Image
          source={require("../../assets/images/photo.jpg")}
          style={styles.post}
        />

        <View>
          <Text style={styles.title}>Ліс</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.commentWrapper}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Коментарі", {
                  prevScreen: "Home",
                })
              }
            >
              <Feather name="message-circle" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <Text style={styles.commentsCount}>0</Text>
          </View>
          <View style={styles.wrapperLocation}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MapScreen", {
                  location: location,
                })
              }
            >
              <Ionicons name="location-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MapScreen", {
                  location: location,
                })
              }
            >
              <Text style={styles.locationName}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },
  userInfo: {
    flexDirection: "row",
    marginTop: 32,
    height: 60,
    alignItems: "center",
    marginBottom: 32,
  },
  imgBox: {
    width: 60,
    height: 60,
    backgroundColor: "#E8E8E8",
    marginRight: 8,
    borderRadius: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  post: {
    height: 240,
    width: "100%",
    borderRadius: 8,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentsCount: {
    ntFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginLeft: 9,

    // borderColor: "red",
    // borderWidth: 1,
  },
  wrapperLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    // borderColor: "red",
    // borderWidth: 1,
  },
  wrapperLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationName: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
  textWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 32,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    color: "#b1aaaa",
    marginBottom: 12,
  },
});
