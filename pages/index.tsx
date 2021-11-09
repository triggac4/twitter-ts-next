import React from 'react'
import { BsApple } from 'react-icons/bs'

import WideCurvedButton from '../components/wide_curved_button'
import twitterImg from '../assets/img//png/twitterBackground.png'
import twitterLogo from '../assets/img//png/twitter-logo-white.png'
import twitterLogoBlue from '../assets/img//png/twitter-logo-blue.png'

const AuthenticationPage = (props: { signIn?: boolean }) => {
    return (
        <div className='auth'>
            <div className='auth__img'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    alt='twitterImg'
                    src={twitterImg.src}
                    className='auth__backgroundImg'
                />
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    alt='twitter_logo'
                    src={twitterLogo.src}
                    className='auth__twitterLogo'
                />
            </div>
            <section className='auth__mainContent'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src={twitterLogoBlue.src}
                    alt='twitter logo'
                    className='auth__mainContent-logo'
                />
                <h1 className='heading1 heading1-bold'>Happening now</h1>
                <h2 className='heading2 heading1-bold'>
                    {props.signIn
                        ? 'Sign in to Twitter'
                        : 'Join Twitter today.'}
                </h2>
                <div className='auth__buttons'>
                    <WideCurvedButton onChange={() => {}}>
                        {props.signIn
                            ? 'sign in with google'
                            : 'sign Up with google'}
                    </WideCurvedButton>
                    <WideCurvedButton onChange={() => {}}>
                        <BsApple />
                        {props.signIn
                            ? ' sign in with apple'
                            : ' sign Up with apple'}
                    </WideCurvedButton>
                    <WideCurvedButton onChange={() => {}}>
                        {props.signIn
                            ? 'sign in with google'
                            : 'use phone or email'}
                    </WideCurvedButton>
                </div>
            </section>
            <footer className='auth__footer'></footer>
        </div>
    )
}
export default AuthenticationPage

//server call to get a props for the component
