import Nprogress from 'nprogress'
import Router from 'next/router'

export default function configureTurboLink() {
    Router.onRouteChangeStart = () => Nprogress.start()
    Router.onRouteChangeComplete = () => Nprogress.done()
    Router.onRouteChangeError = () => Nprogress.done()
}