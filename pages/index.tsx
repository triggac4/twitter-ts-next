/* eslint-disable react/no-children-prop */
import React from "react";
import { BsApple } from "react-icons/bs";
import Link from "next/link";

import WideCurvedButton from "../components/wide_curved_button";
import twitterImg from "../assets/img//png/twitterBackground.png";
import twitterLogo from "../assets/img//png/twitter-logo-white.png";
import twitterLogoBlue from "../assets/img//png/twitter-logo-blue.png";
import FooterLink from "../components/links";

const AuthenticationPage = (props: { signIn?: boolean }) => {
    let arbitraryLinks = [
        "about",
        "help center",
        "terms of service",
        "privacy policy",
        "cookie policy",
        "ads info",
        "blogs",
        "status",
        "careers",
        "brand resources",
        "advertising ",
        "businesses",
        "marketing",
        "developers",
        "directory",
        "setting",
    ];

    let footerLinks = arbitraryLinks.map((link, index) => {
        return (
            <FooterLink href={link} key={index} className="auth__footer-link">
                {link}
            </FooterLink>
        );
    });

    return (
        <div className="auth">
            <div className="auth__img">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    alt="twitterImg"
                    src={twitterImg.src}
                    className="auth__backgroundImg"
                />
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    alt="twitter_logo"
                    src={twitterLogo.src}
                    className="auth__twitterLogo"
                />
            </div>
            <section className="auth__mainContent">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src={twitterLogoBlue.src}
                    alt="twitter logo"
                    className="auth__mainContent-logo"
                />
                <h1 className="heading1 heading1-bold">Happening now</h1>
                <h2 className="heading2 heading1-bold">
                    {props.signIn
                        ? "Sign in to Twitter"
                        : "Join Twitter today."}
                </h2>
                <div className="auth__buttons">
                    <WideCurvedButton onChange={() => {}}>
                        <Link href="/home" passHref>
                            {props.signIn
                                ? "sign in with google"
                                : "sign Up with google"}
                        </Link>
                    </WideCurvedButton>

                    <WideCurvedButton onChange={() => {}}>
                        <Link href="/home" passHref>
                            <>
                                <BsApple />
                                {props.signIn
                                    ? " sign in with apple"
                                    : " sign Up with apple"}
                            </>
                        </Link>
                    </WideCurvedButton>
                    <WideCurvedButton onChange={() => {}}>
                        <Link href="/home" passHref>
                            {props.signIn
                                ? "sign in with google"
                                : "use phone or email"}
                        </Link>
                    </WideCurvedButton>
                    <p className="auth__mainContent-terms">
                        By signing up, you agree to the{" "}
                        <FooterLink
                            href="#"
                            className="auth__mainContent-link "
                            children="Terms of Service"
                        />
                        and
                        <FooterLink
                            href="#"
                            className=" auth__mainContent-link "
                            children="Privacy Policy"
                        />
                        , including
                        <FooterLink
                            href="#"
                            className="auth__mainContent-link"
                            children="Terms of Service."
                        />
                    </p>
                    <p className="auth__mainContent-switch p-t-medium">
                        Already have an account?
                        <FooterLink
                            href="#"
                            className="auth__mainContent-link"
                            children="sign in"
                        />
                    </p>
                </div>
            </section>
            <footer className="auth__footer">{footerLinks}</footer>
        </div>
    );
};
export default AuthenticationPage;
//server call to get a props for the component
