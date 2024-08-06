import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DropDownItem.module.css'

const DropDownItem = ({path, item}) => {
  return (
    <NavLink className={styles.item} to={`${path}/${item}`}>{item}</NavLink>
  )
}

export default DropDownItem