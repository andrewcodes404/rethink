import React from 'react'
import Head from 'next/head'

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
            rel="stylesheet"
        ></link>

        {/* FAVICON --- FAVICON --- FAVICON --- FAVICON --- FAVICON ---  */}

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/fav/qu/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/fav/qu/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/fav/qu/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/fav/qu/site.webmanifest" />
        <link
            rel="mask-icon"
            href="/static/fav/qu/safari-pinned-tab.svg"
            color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/fav/qu/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
            name="msapplication-config"
            content="/static/fav/qu/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-96559774-20"
        ></script>

        {/* <!-- META -- META -- META -- META --  --> */}
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1120" />
        <meta property="og:title" content="ReThink" />
        <meta
            property="og:description"
            content="ReThink is a two-day event dedicated to sustainability. Championing eco-friendly business operations, showcasing innovation and responsible procurement."
        />
        <meta
            property="og:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1554473156/rethink/rethink_fb_card.jpg"
        />
        <meta property="og:url" content="https://rethink-event.com" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <!-- <meta name="twitter:site" content="@twitter@username" /> --> */}
        <meta name="twitter:title" content="Stellar" />
        <meta
            name="twitter:description"
            content="ReThink is a two-day event dedicated to sustainability. Championing eco-friendly business operations, showcasing innovation and responsible procurement."
        />
        <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dcqi9fn2y/image/upload/v1554473156/rethink/rethink_fb_card.jpg"
        />

        <title>ReThink</title>
    </Head>
)

export default Meta
