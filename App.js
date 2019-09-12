import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const btnHandler = () => {
    setCourseGoal(currentGoals => [
      ...courseGoal,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
    console.log(courseGoal);
  };

  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.conatiner}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInputContainer}
          onChangeText={goalHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={btnHandler} />
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courseGoal}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  conatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInputContainer: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ccc",
    padding: 10
  }
});
