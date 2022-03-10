import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function App(props: {
  tasks: {
    id: string | undefined;
    completed: boolean | undefined;
    name: {} | null | undefined;
  }[];
}): JSX.Element {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList: JSX.Element[] = tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  function addTask(name: {} | null | undefined): void {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length === 1 ? 'task' : 'tasks';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
