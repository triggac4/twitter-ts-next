import React from 'react'

const WideCurvedButton = (props: { children: JSX.Element | string }) => {
    return <button className='wideCurvedButton'>{props.children}</button>
}

export default WideCurvedButton
