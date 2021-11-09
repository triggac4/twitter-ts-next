import React from 'react'

type child = JSX.Element | string
const WideCurvedButton = (props: { children: any; onChange(): void }) => {
    return (
        <button
            className='wideCurvedButton heading5 heading5-bold'
            onChange={props.onChange}
        >
            {props.children}
        </button>
    )
}

export default WideCurvedButton
