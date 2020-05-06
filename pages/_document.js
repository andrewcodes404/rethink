import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Fragment } from 'react'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const isProduction = process.env.NODE_ENV === 'production'
        // renders the page and check for any styles and "collects" them
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        // compile the styles and dump them on the page
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags, isProduction }
    }

    setGoogleTags() {
        return {
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'UA-96559774-20');
    `,
        }
    }

    setGoogleTags2() {
        return {
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-584PS8B');
            `
        }
    }


    render() {
        const { isProduction } = this.props
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-584PS8B"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}

                    <Main />
                    <NextScript />

                    {/* We only want to add the scripts if in production */}
                    {isProduction && (
                        <Fragment>
                            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X" />
                            {/* We call the function above to inject the contents of the script tag */}
                            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                            <script dangerouslySetInnerHTML={this.setGoogleTags2()} />
                        </Fragment>
                    )}
                </body>
            </html>
        )
    }
}
