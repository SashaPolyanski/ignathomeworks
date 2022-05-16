import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }
    const stop = () => {
        window.clearInterval(timerId)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toTimeString()// fix with date
    const stringDate = date?.toDateString() // fix with date

    return (
        <div className={s.container}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >

                {stringTime}
            </div>

            {show && (
                <div className={s.data}>
                    {stringDate}
                </div>
            )}

            <SuperButton className={s.btn} onClick={start}>start</SuperButton>
            <SuperButton className={s.btn} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
