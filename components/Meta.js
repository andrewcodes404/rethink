import React from 'react'
import Head from 'next/head'

const Meta = () => (
    <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />

        <meta charSet="utf-8" />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600" rel="stylesheet"></link>

        {/* material ui */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        {/* FAVICON --- FAVICON --- FAVICON --- FAVICON --- FAVICON ---  */}
        <link rel="apple-touch-icon" sizes="180x180" href="/static/fav/qu/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/fav/qu/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/fav/qu/favicon-16x16.png" />
        <link rel="manifest" href="/static/fav/qu/site.webmanifest" />
        <link rel="mask-icon" href="/static/fav/qu/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/fav/qu/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/static/fav/qu/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        {/* google analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-96559774-20"></script>

        {/* <!-- META -- META -- META -- META --  --> */}

        <meta
            property="og:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1603839103/rethink/rethink2021card.png"
        />
        <meta property="og:title" content="ReThink HK  Sustainability Forum 2021" />
        <meta
            property="og:description"
            content="ReThink Hong Kong is a two-day business conference and showcase dedicated to achieving a sustainable environment and circular economy. 08 - 09 JUNE 2021"
        />

        <meta property="og:url" content="https://rethink-event.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ReThink_HK" />
        <meta name="twitter:title" content="ReThink HK | Sustainability Forum 2021" />
        <meta
            name="twitter:description"
            content="ReThink Hong Kong is a two-day business conference and showcase dedicated to achieving a sustainable environment and circular economy. 23-24 June 2021."
        />
        <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1603839103/rethink/rethink2021card.png"
        />

        <title>ReThink</title>
    </Head>
)

export default Meta
