import React from 'react'
import Image from 'next/image'

import twitterImg from 'assets/img/png/twitterBackground.png'

const signIn = (props: any) => {
    return (
        <div className='signIn'>
            <div className='signIn__img'>
                <Image
                    src={twitterImg}
                    alt='twitterImg'
                    className='signIn__backgroundImg'
                />
            </div>
            <section className='signIn__mainContent'></section>
            <footer className='signIn__footer'></footer>
        </div>
    )
}
