import React from "react";
import { CommentsScreen } from "../CommentsScreen/CommentsScreen";
import MapScreen from "../MapScreen";
import { HomeTabs } from "../../components/roots/roots";

import { createStackNavigator } from "@react-navigation/stack";

const NestedScreen = createStackNavigator();

export const Home = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#212121",
        }}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto-Medium",
            lineHeight: 22,
            color: "#212121",
            marginLeft: 105,
            
          },
        }}
      />
    </NestedScreen.Navigator>
  );
};
