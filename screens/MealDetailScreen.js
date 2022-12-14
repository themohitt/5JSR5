import { useLayoutEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import Details from "../components/Details";
import Subtitle from "../components/MealsDetails/Subtitles";
import List from "../components/MealsDetails/List";
import IconButton from "../components/MealsDetails/IconButton";
function MealDetailScreen({ route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }

  useLayoutEffect(() => {
    navigation.setOptions({ headerRight: () =>{
        return <IconButton 
        icon="star"
        color="white"
        onPress={headerButtonPressHandler}/>;
    }});
  } , [navigation, headerButtonPressHandler] );
  return (
    <ScrollView style={styles.rootContainer}>
    
        <View>
            <Image 
                  style={styles.image}
                  source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Details
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
            />
      </View>
          <View style={styles.listOuterContainer}>
             <View style= {styles.listContainer}>
                   <Subtitle>Ingredients</Subtitle>
                     <List data={selectedMeal.ingredients}/>
                     <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>     
             </View>
          </View>   
    
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width:'100%' ,
        height:350,   
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        margin: 8,
        textAlign:'center',
        color: 'white'
    },
    detailText:{
        color: 'white',
        fontSize: 14
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width: '80%'
    }
});
