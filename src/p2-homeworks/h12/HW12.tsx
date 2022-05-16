import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {switchTheme, themeType} from "../h10/bll/switchThemeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, themeType>(state => state.switchTheme.defaultTheme)
    const themeValue = useSelector<AppStoreType, string[]>(state => state.switchTheme.theme)
    const dispatch = useDispatch()
    const onChangeOption = (theme: themeType) => {
        dispatch(switchTheme(theme))
    }


    return (
        <div className={s.container}>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s[theme]}>
                <hr/>


                {/*should work (должно работать)*/}
                <SuperRadio
                    options={themeValue}
                    value={theme}
                    onChangeOption={onChangeOption}
                />

                <hr/>
                <span className={s.switch}>switch theme</span>
            </div>
        </div>

    );
}

export default HW12;
