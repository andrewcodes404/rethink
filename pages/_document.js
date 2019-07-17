import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Fragment } from 'react'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const isProduction = process.env.NODE_ENV === 'production'
        // renders the page and check for any styles and "collects" them
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )
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
    render() {
        const { isProduction } = this.props
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* We only want to add the scripts if in production */}
                    {isProduction && (
                        <Fragment>
                            <script
                                async
                                src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X"
                            />
                            {/* We call the function above to inject the contents of the script tag */}
                            <script
                                dangerouslySetInnerHTML={this.setGoogleTags()}
                            />
                        </Fragment>
                    )}
                </body>
            </html>
        )
    }
}
