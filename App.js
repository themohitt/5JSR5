import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "../5JSR5/screens/MealsOverviewScreen";
import CategoriesScreen from "../5JSR5/screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
          headerStyle: {backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle: {backgroundColor:'#3f2f25'}}}>
          <Stack.Screen 
          name="Mealscategories" 
          component={CategoriesScreen}
          options={{title: 'All Categories',
        
         }}     
          />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen} 
          //options={ ({route, navigation}) => {
            //const catId = route.params.categoryId;
            //return {
             // title: catId,
            //};s
          //}}
          />
          <Stack.Screen 
          name="MealDetail"
          component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

