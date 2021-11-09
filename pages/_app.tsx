import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp
