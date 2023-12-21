import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addTodoHandler = (todo) => {
    setTodoArr((prev) => [...prev, todo]);
    modalCloseHandler();
  };

  const deleteItemHandler = (currentTodo) => {
    setTodoArr((todoArr) => {
      return todoArr.filter((todo) => todo !== currentTodo);
    });
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const modalCloseHandler = () => {
    setModalIsVisible(false);
  }

  
  return (
    <View style={styles.appContainer}>
      <Button title="Add Todo" color={"#3d4ed4"} onPress={showModalHandler}></Button>
      <TodoInput 
      onAddTodoHandler={addTodoHandler} 
      modalIsVisible={modalIsVisible}
      onCloseModal={modalCloseHandler} />
      <View style={styles.todosContainer}>
        <FlatList
          data={todoArr}
          renderItem={(itemData) => (
            <TodoItem text={itemData.item} onDeleteItem={deleteItemHandler} />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#1e085a"
  },
  todosContainer: {
    flex: 5,
    marginTop: 10,
    paddingTop: 10,
  },
});
