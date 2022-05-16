import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {Button, TextField} from "@mui/material";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input

    return (
        <div className={s.container}>

            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Small"
                variant="standard"
                size="small" value={name} onChange={setNameCallback} className={inputClass}/>

            <Button variant={'contained'} className={s.btn} onClick={addUser}>add</Button>
            <span className={s.errorMessage}>{error}</span>
            <div className={s.totalUsers}>Total Users: {totalUsers}</div>
        </div>
    )
}

export default Greeting
