import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            <span className={s.title}>homeworks 11</span>

            <div className={s.container}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        setValue={setValue1}
                    />
                </div>

                <div>

                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                    />

                </div>
            </div>
            {/*should work (должно работать)*/}


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
