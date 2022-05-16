import React, {useState} from 'react'
import { NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    let [activeMenu, setActiveMenu] = useState(false)
    const items = [
        {name: 'PreJunior', to: '/pre-junior'},
        {name: 'Junior', to: '/junior'},
        {name: 'JuniorPlus', to: '/junior-plus'},
    ]


    const menuHandler = () => {
        setActiveMenu(!activeMenu)
    }
    return (
        <div>
            <div className={s.links} >
                <div className={activeMenu ? `${s.menuBody}+${s.active}` : s.menuBody}>
                {items.map(link=><NavLink className={s.linkItem} to={link.to}>{link.name}</NavLink>)}
                </div>
                <div className={s.menu} onClick={menuHandler}>Click-Clack</div>

            </div>



        </div>


    )
}

export default Header
