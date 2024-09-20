import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <AddTask />

      <TaskList />
    </TaskProvider>
  );
}

export default App;
