export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (id, updatedTask) => ({
  type: "EDIT_TASK",
  payload: { id, updatedTask },
});

export const filterTasks = (filterType) => ({
  type: "FILTER_TASKS",
  payload: filterType, // 'done' or 'not'
});
