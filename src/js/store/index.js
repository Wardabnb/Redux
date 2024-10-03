import { createStore } from "redux";
import taskReducer from "../Reducers/Reducer.js";
// Adjust the path to your reducer

const store = createStore(taskReducer);

export default store;
