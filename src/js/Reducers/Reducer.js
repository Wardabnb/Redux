const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case "EDIT_TASK":
      const updatedTasks = state.tasks.map((task, index) =>
        index === action.payload.index ? action.payload.updatedTask : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "TOGGLE_TASK":
      const toggledTasks = state.tasks.map((task, index) =>
        index === action.payload.index
          ? { ...task, isDone: !task.isDone }
          : task
      );
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
}

export default taskReducer;
