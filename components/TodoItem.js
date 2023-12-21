import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.text)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "purple",
    borderRadius: 4,
    marginBottom: 10,
  },
  todoText: {
    color: "#fff",
    padding: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
