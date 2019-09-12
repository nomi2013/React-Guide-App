import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

   const btnHandler = goalTitle => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {btnHandler}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courseGoal}
          renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
