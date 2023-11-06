import { FormEvent, useState } from 'react'
import { Header } from './components/Header/Header'
import { InputBar } from './components/InputBar/InputBar'
import Tasks from './components/Tasks/Tasks'
import { v4 as uuidv4 } from 'uuid';
import { ClipboardIcon } from './components/svgs/Clipboard/ClipboardIcon';
import style from './App.module.css'

interface TaskType {
  key: string,
  titleTask: string,
  isCompleted: boolean,
}

function App() {
  const [myTasks, setMyTasks] = useState<TaskType[]>([])
  const completedTasks = myTasks.filter((task) => {
    return task.isCompleted == true
  })

  function handleCreateNewTask(taskTitle: string, event: FormEvent) {
    event.preventDefault()
    const newTask: TaskType = {
      key: uuidv4(),
      titleTask: taskTitle,
      isCompleted: false
    }
    setMyTasks([...myTasks, newTask])
  }

  function deleteTask(taskToDelete: TaskType) {
    const tasksWithoutDeletedOne = myTasks.filter(task => {
      return task != taskToDelete
    })
    setMyTasks(tasksWithoutDeletedOne)
  }


  function handleChange(taskToComplete: TaskType) {
    const updateTaskWithCompleted = myTasks.map(task => {
      if (task.key == taskToComplete.key) {
        return { ...task, isCompleted: !task.isCompleted }
      } else {
        return task
      }

    })
    setMyTasks(updateTaskWithCompleted);
  };

  return (
    <>
      <Header />
      <InputBar createNewTask={handleCreateNewTask} />
      <div className={style.App}>
        <main>

          <div className={style.SmallTaskContainer}>
            <div className={style.tasksCreated}>
              <p className={style.pTaskCreated}>Tarefas criadas</p>
              <div className={style.numberTasksCreated}>{myTasks.length}</div>
            </div>
            <div className={style.tasksCompleted}>
              <p className={style.pTaskCompleted}>Concluídas</p>
              <div className={style.numberTasksCompleted}> {completedTasks.length} de {myTasks.length}</div>
            </div>
          </div>

          {myTasks.length > 0 ?
            myTasks.map((task: TaskType) => {
              return (
                <Tasks
                  key={task.key}
                  task={task}
                  deleteMyTask={deleteTask}
                  completeMyTask={handleChange}
                />
              );
            })
            : <>
              <ClipboardIcon />
              <p className={style.pTotalTasks}><strong>Você ainda não tem tarefas cadastradas</strong><br />Crie tarefas e organize seus itens a fazer</p>
            </>}

        </main>
      </div>
    </>
  )
}

export default App
