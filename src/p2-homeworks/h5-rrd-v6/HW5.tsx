import React from 'react'
import Header from './Header'
import Pages from './Pages'
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.body}>
            {/*в gh-pages лучше работает HashRouter*/}


            <Header/>
            <Pages/>


        </div>
    )
}

export default HW5
