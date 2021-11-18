import React from 'react'
import { children } from '../variable_types'

type wideButtonProps = {
    children: children
    onChange(): void
}
const WideCurvedButton = (props: wideButtonProps) => {
    let { children, onChange } = props
    return (
        <button
            className='wideCurvedButton heading5 heading5-bold'
            onChange={onChange}
        >
            {children}
        </button>
    )
}

export default WideCurvedButton
