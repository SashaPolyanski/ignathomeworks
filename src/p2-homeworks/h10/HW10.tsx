import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from "@mui/material";
import s from './HW10.module.css'

function HW10() {

    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    let dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <span className={s.title}> homeworks 10</span>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <SuperButton className={s.btn} onClick={setLoading}>set loading...</SuperButton>
                        <CircularProgress className={s.loading} color="secondary"/>
                    </div>


                ) : (
                    <div>
                        <SuperButton className={s.btn} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
