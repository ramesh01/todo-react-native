import { useState } from "react";
import { StyleSheet, Button, TextInput, View, Modal } from "react-native";

function TodoInput(props) {
  const [todoItem, setTodoItem] = useState("");
  const todoInputHandler = (enteredText) => {
    setTodoItem(enteredText);
  };

  const addTodoBtnClickHandler = () => {
    props.onAddTodoHandler(todoItem);
    setTodoItem("");
  };

  return (
    <Modal style={styles.modalElement} visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Todo"
          maxLength={200}
          onChangeText={todoInputHandler}
          value={todoItem}
          placeholderTextColor="#aaa"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Add Todo" onPress={addTodoBtnClickHandler} />
          </View>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={props.onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b"
  },
  buttonContainer: {
    marginVertical: 16,
    flexDirection: "row",
    marginHorizontal: 6
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    padding: 6,
    color: "#120483"
  },
  button: {
    width: "40%",
    marginHorizontal: 6,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#311b6b"
  }
});
