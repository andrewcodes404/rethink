import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../lib/createApolloClient'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import Meta from '../components/PageHeadFooter/Meta'
import theme from '../style/theme'
import GlobalStyle from '../style/globalStyle'
import PageWrapper from '../components/PageWrapper'
import AOS from 'aos'
import 'aos/dist/aos.css'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        // this exposes the query to the user
        pageProps.query = ctx.query
        return { pageProps }
    }

    componentDidMount() {
        AOS.init({
            duration: 600,
        })
    }

    render() {
        const { Component, apollo, pageProps } = this.props

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <ThemeProvider theme={theme}>
                        <>
                            <Meta />
                            <PageWrapper>
                                <Normalize />
                                <GlobalStyle />
                                <Component {...pageProps} />
                            </PageWrapper>
                        </>
                    </ThemeProvider>
                </ApolloProvider>
            </Container>
        )
    }
}
//wrap the app with the apollo client
export default apolloClient(MyApp)
// export default MyApp
