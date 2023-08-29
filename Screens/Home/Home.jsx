import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
function MyBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Feather
        name="arrow-left"
        size={24}
        color="#212121"
        style={{ marginRight: 64 }}
      />
    </TouchableOpacity>
  );
}
export const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarItemStyle: {
          height: 40,
          maxWidth: 70,
          borderRadius: 20,
          marginTop: 9,
          marginRight: 15,
          marginLeft: 15,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveBackgroundColor: "#FFFFFF",

        tabBarStyle: {
          paddingHorizontal: 15,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Medium",
            lineHeight: 22,
            color: "#212121",
            marginLeft: 148,
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="grid"
                size={24}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
                style={
                  {
                    // marginRight:31,
                    // paddingHorizontal: focused ? 20 : 0,
                    // borderWidth: focused ? 1 : 0,
                    // borderRadius: focused ? 16 : 0,
                    // backgroundColor: focused ? "#FF6C00" : "#FFFFFF"
                    // alignSelf: focused ? "center" : "right",
                  }
                }
              />
            );
          },
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerStyle: {
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
        }}
        //   tabBarOptions={{
        //   showLabel: true,
        //   tabBarIconPosition: 'beside-label',
        // }}
      />

      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="add"
                size={30}
                color={focused ? "#FFFFFF" : "#BDBDBD"}
              />
            );
          },

          headerLeft: () => MyBackButton(),

          headerStyle: {
            borderBottomColor: "#E5E5E5",

            borderBottomWidth: 1,
          },
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            paddingRight: 15,
          },

          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="user"
                size={24}
                color={!focused ? "#BDBDBD" : color}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
