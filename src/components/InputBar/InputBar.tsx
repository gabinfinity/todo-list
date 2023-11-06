import React, { useState, FormEvent, ChangeEvent } from 'react'
import style from './InputBar.module.css'
import { PlusIcon } from '../svgs/PlusIcon/PlusIcon'

interface InputBarPropsType {
    createNewTask: (taskTitle: string, event: FormEvent) => void;

}

export function InputBar(props: InputBarPropsType) {

    const [newTaskText, setNewTaskText] = useState('')

    function newTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
      }

  return (
    <>
        <div className={style.InputConteiner}>
            <form onSubmit={(event) => props.createNewTask(newTaskText, event)} className={style.InputBarText}>
                <input 
                    name="inputBar"
                    placeholder='Deixe um comentário'
                    value={newTaskText}
                    onChange={(event)=> newTaskTextChange(event)}
                    required />
                <button type='submit'>Criar
                <PlusIcon />
                </button>
            </form>
        </div>
    </>
  )
}
