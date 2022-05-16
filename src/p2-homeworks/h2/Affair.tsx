import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import {Button} from "@mui/material";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    // @ts-ignore
    return (
        <div>
            <div className={s.affairContainer}>


                <div className={s.name}>{props.affair.name}</div>


                <div className={s.priorityContainer}>
                    <div className={s.item}>
                        {props.affair.priority}
                    </div>

                </div>
                <div>
                    <Button className={s.btn} variant={'contained'} size={'small'} color={'primary'}
                            onClick={deleteCallback}>X</Button>
                </div>
            </div>


        </div>
    )
}

export default Affair
