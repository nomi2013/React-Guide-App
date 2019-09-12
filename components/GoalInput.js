import React, { useState } from "react";
import { View,Button, TextInput, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInputContainer}
        onChangeText={goalHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default GoalInput;
