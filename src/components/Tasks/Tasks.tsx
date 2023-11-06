import React, { useState } from 'react'
import style from './Tasks.module.css'
import DeleteIcon from '../svgs/DeleteIcon/DeleteIcon'

interface TaskPropsType {
    deleteMyTask: (task: TaskType) => void;
    completeMyTask: (task: TaskType) => void;
    task: TaskType
}

interface TaskType {
    key: string,
    titleTask: string,
    isCompleted: boolean,
}

export default function Tasks(props: TaskPropsType) {

    function deleteTask() {
        props.deleteMyTask(props.task)
    }

    function completeTask() {
        props.completeMyTask(props.task)
    }

    return (
        <label className={style.TaskContainer}>
            <input type="checkbox" onClick={completeTask} />
            <span className={style.checkmark}></span>
            <p className={style.TaskTitle}>{props.task.titleTask}</p>
            <button onClick={deleteTask} title='Deletar task'>
                <DeleteIcon fill='var(--grey-300)'/>
            </button>
        </label>
    )
}
