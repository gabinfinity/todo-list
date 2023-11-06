import React from 'react'
import style from './Header.module.css' 
import { HeaderIcon } from '../svgs/HeaderIcon/HeaderIcon'

export function Header() {
  return (
    <header className={style.header}>
        <HeaderIcon />
        <h1 className={style.firstH1}>to</h1><h1 className={style.secondH1}>do</h1>
    </header>
  )
}
