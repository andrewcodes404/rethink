import gql from 'graphql-tag'

// USER --- USER --- USER --- USER --- USER ---
// USER --- USER --- USER --- USER --- USER ---
// USER --- USER --- USER --- USER --- USER ---

export const CURRENT_USER_QUERY = gql`
    query {
        user {
            id
            email
            name
            permissions
        }
    }
`

// ADV_COMS --- ADV_COMS --- ADV_COMS --- ADV_COMS ---
// ADV_COMS --- ADV_COMS --- ADV_COMS --- ADV_COMS ---
// ADV_COMS --- ADV_COMS --- ADV_COMS --- ADV_COMS ---

export const GET_ADV_COMS = gql`
    query GET_ADV_COMS {
        advComs(orderBy: index_ASC) {
            id
            headshot
            name
            jobTitle
            company
            index
        }
    }
`

export const CREATE_ADVCOM = gql`
    mutation CREATE_ADVCOM($index: Int!, $headshot: String!, $name: String!, $jobTitle: String!, $company: String!) {
        createAdvCom(index: $index, headshot: $headshot, name: $name, jobTitle: $jobTitle, company: $company) {
            id
        }
    }
`

export const UPDATE_ADV_COM = gql`
    mutation UPDATE_ADV_COM(
        $id: ID!
        $headshot: String!
        $name: String!
        $jobTitle: String!
        $company: String!
        $index: Int!
    ) {
        updateAdvCom(id: $id, headshot: $headshot, name: $name, jobTitle: $jobTitle, company: $company, index: $index) {
            id
            headshot
            name
            jobTitle
            company
            index
        }
    }
`

export const DELETE_ADV_COM = gql`
    mutation DELETE_ADV_COM($id: ID!) {
        deleteAdvCom(id: $id) {
            id
        }
    }
`

// SPONSORS -- SPONSORS -- SPONSORS -- SPONSORS --
// SPONSORS -- SPONSORS -- SPONSORS -- SPONSORS --
// SPONSORS -- SPONSORS -- SPONSORS -- SPONSORS --

export const GET_SPONSORS = gql`
    query GET_SPONSORS {
        sponsors(orderBy: index_ASC) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const GET_SPONSORS_WHERE_RANKING = gql`
    query GET_SPONSORS_WHERE_RANKING($ranking: String) {
        sponsors(where: { ranking: $ranking }, orderBy: index_ASC) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const GET_SPONSORS_WHERE_FRONTPAGE = gql`
    query GET_SPONSORS_WHERE_FRONTPAGE {
        sponsors(where: { frontpage: true }, orderBy: index_ASC) {
            logo
        }
    }
`

export const GET_SPONSORS_WHERE_NAME = gql`
    query GET_SPONSORS_WHERE_NAME($name: String!) {
        sponsors(where: { name: $name }) {
            id
        }
    }
`

export const GET_SPONSOR_WHERE_ID = gql`
    query GET_SPONSOR_WHERE_ID($id: ID!) {
        sponsor(where: { id: $id }) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const CREATE_SPONSOR = gql`
    mutation CREATE_SPONSOR(
        $name: String!
        $ranking: String!
        $index: Int!
        $logo: String!
        $description: String!
        $website: String
        $instagram: String
        $facebook: String
        $twitter: String
        $linkedIn: String
        $frontpage: Boolean
    ) {
        createSponsor(
            name: $name
            ranking: $ranking
            index: $index
            logo: $logo
            description: $description
            website: $website
            instagram: $instagram
            facebook: $facebook
            twitter: $twitter
            linkedIn: $linkedIn
            frontpage: $frontpage
        ) {
            id
        }
    }
`

export const UPDATE_SPONSOR = gql`
    mutation SPONSOR(
        $id: ID!
        $name: String!
        $ranking: String!
        $index: Int!
        $logo: String!
        $description: String!
        $website: String
        $instagram: String
        $facebook: String
        $twitter: String
        $linkedIn: String
        $frontpage: Boolean
    ) {
        updateSponsor(
            id: $id
            name: $name
            ranking: $ranking
            index: $index
            logo: $logo
            description: $description
            website: $website
            instagram: $instagram
            facebook: $facebook
            twitter: $twitter
            linkedIn: $linkedIn
            frontpage: $frontpage
        ) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const DELETE_SPONSOR = gql`
    mutation DELETE_SPONSOR($id: ID!) {
        deleteSponsor(id: $id) {
            id
        }
    }
`

// PARTNERS -- PARTNERS -- PARTNERS -- PARTNERS --
// PARTNERS -- PARTNERS -- PARTNERS -- PARTNERS --
// PARTNERS -- PARTNERS -- PARTNERS -- PARTNERS --

export const GET_PARTNERS = gql`
    query GET_PARTNERS {
        partners(orderBy: index_ASC) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const GET_PARTNER_WHERE_ID = gql`
    query GET_PARTNER_WHERE_ID($id: ID!) {
        partner(where: { id: $id }) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const GET_PARTNERS_WHERE_RANKING = gql`
    query GET_PARTNERS_WHERE_RANKING($ranking: String) {
        partners(where: { ranking: $ranking }, orderBy: index_ASC) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const GET_PARTNERS_WHERE_FRONTPAGE = gql`
    query GET_PARTNERS_WHERE_FRONTPAGE {
        partners(where: { frontpage: true }, orderBy: index_ASC) {
            logo
        }
    }
`

export const GET_PARTNERS_WHERE_NAME = gql`
    query GET_PARTNERS_WHERE_NAME($name: String!) {
        partners(where: { name: $name }) {
            id
            logo
        }
    }
`

export const GET_PARTNER = gql`
    query GET_PARTNER($id: ID!) {
        partner(where: { id: $id }) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`
export const CREATE_PARTNER = gql`
    mutation CREATE_PARTNER(
        $name: String!
        $ranking: String!
        $index: Int!
        $logo: String!
        $description: String!
        $website: String
        $instagram: String
        $facebook: String
        $twitter: String
        $linkedIn: String
        $frontpage: Boolean
    ) {
        createPartner(
            name: $name
            ranking: $ranking
            index: $index
            logo: $logo
            description: $description
            website: $website
            instagram: $instagram
            facebook: $facebook
            twitter: $twitter
            linkedIn: $linkedIn
            frontpage: $frontpage
        ) {
            id
        }
    }
`

export const UPDATE_PARTNER = gql`
    mutation PARTNER(
        $id: ID!
        $name: String!
        $ranking: String!
        $index: Int!
        $logo: String!
        $description: String!
        $website: String
        $instagram: String
        $facebook: String
        $twitter: String
        $linkedIn: String
        $frontpage: Boolean
    ) {
        updatePartner(
            id: $id
            name: $name
            ranking: $ranking
            index: $index
            logo: $logo
            description: $description
            website: $website
            instagram: $instagram
            facebook: $facebook
            twitter: $twitter
            linkedIn: $linkedIn
            frontpage: $frontpage
        ) {
            id
            name
            ranking
            index
            logo
            description
            website
            instagram
            facebook
            twitter
            linkedIn
            frontpage
        }
    }
`

export const DELETE_PARTNER = gql`
    mutation DELETE_PARTNER($id: ID!) {
        deletePartner(id: $id) {
            id
        }
    }
`

// --- SESSIONS --- SESSIONS --- SESSIONS
// --- SESSIONS --- SESSIONS --- SESSIONS
// --- SESSIONS --- SESSIONS --- SESSIONS

export const CREATE_SESSION = gql`
    mutation CREATE_SESSION(
        $title: String!
        $theme: String!
        $start: String!
        $end: String!
        $day: String!
        $host: String
        $speakers: [String!]
        $overview: String
        $learnings: String
        $supporters: [String]
        $sponsors: [String]
    ) {
        createSession(
            title: $title
            theme: $theme
            start: $start
            end: $end
            day: $day
            host: $host
            speakers: $speakers
            overview: $overview
            learnings: $learnings
            supporters: $supporters
            sponsors: $sponsors
        ) {
            id
        }
    }
`

export const UPDATE_SESSION = gql`
    mutation UPDATE_SESSION(
        $id: ID!
        $title: String!
        $theme: String!
        $start: String!
        $end: String!
        $day: String!
        $host: String
        $speakers: [String]
        $overview: String
        $learnings: String
        $supporters: [String]
        $sponsors: [String]
    ) {
        updateSession(
            id: $id
            title: $title
            theme: $theme
            start: $start
            end: $end
            day: $day
            host: $host
            speakers: $speakers
            overview: $overview
            learnings: $learnings
            supporters: $supporters
            sponsors: $sponsors
        ) {
            title
        }
    }
`

export const GET_SESSIONS = gql`
    query GET_SESSIONS {
        sessions {
            id
            title
            theme
            start
            end
            host
            speakers
            overview
            learnings
            supporters
            sponsors
        }
    }
`

export const GET_SESSIONS_WHERE_TIME = gql`
    query GET_SESSIONS_WHERE_TIME {
        sessions(orderBy: start_ASC) {
            id
            title
            theme
            start
            end
            host
            speakers
            overview
            learnings
            supporters
            sponsors
        }
    }
`

export const GET_SESSIONS_WHERE_DAY_ORDER_TIME = gql`
    query GET_SESSIONS_WHERE_TIME($day: String) {
        sessions(where: { day: $day }, orderBy: start_ASC) {
            id
            title
            theme
            start
            end
            day
            host
            speakers
            overview
            learnings
            supporters
            sponsors
        }
    }
`

export const GET_SESSIONS_WHERE_ID = gql`
    query GET_SESSIONS_WHERE_ID($id: ID) {
        session(where: { id: $id }) {
            id
            title
            theme
            start
            end
            day
            host
            speakers
            overview
            learnings
            supporters
            sponsors
        }
    }
`

// export const GET_SPONSORS_WHERE_RANKING = gql`
//     query GET_SPONSORS_WHERE_RANKING($ranking: String) {
//         sponsors(where: { ranking: $ranking }, orderBy: index_ASC) {
//             id
//             name
//             ranking
//             index
//             logo
//             description
//             website
//             instagram
//             facebook
//             twitter
//             linkedIn
//             frontpage
//         }
//     }
// `

// HOSTSPAEAKS --- HOSTSPAEAKS --- HOSTSPAEAKS ---
// HOSTSPAEAKS --- HOSTSPAEAKS --- HOSTSPAEAKS ---
// HOSTSPAEAKS --- HOSTSPAEAKS --- HOSTSPAEAKS ---

export const CREATE_HOSTSPEAKER = gql`
    mutation CREATE_HOSTSPEAKS(
        $headshot: String
        $name: String
        $title: String
        $company: String
        $bio: String
        $linkedIn: String
        $insta: String
        $facebook: String
        $twitter: String
        $website: String
        $frontpage: Boolean
        $index: Int
        $logo: String
    ) {
        createHostSpeaker(
            headshot: $headshot
            name: $name
            title: $title
            company: $company
            bio: $bio
            linkedIn: $linkedIn
            insta: $insta
            facebook: $facebook
            twitter: $twitter
            website: $website
            frontpage: $frontpage
            index: $index
            logo: $logo
        ) {
            id
        }
    }
`

export const UPDATE_HOSTSPEAKER = gql`
    mutation PARTNER(
        $id: ID!
        $headshot: String
        $name: String
        $title: String
        $company: String
        $bio: String
        $linkedIn: String
        $insta: String
        $facebook: String
        $twitter: String
        $website: String
        $frontpage: Boolean
        $index: Int
        $logo: String
    ) {
        updateHostSpeaker(
            id: $id
            headshot: $headshot
            name: $name
            title: $title
            company: $company
            bio: $bio
            linkedIn: $linkedIn
            insta: $insta
            facebook: $facebook
            twitter: $twitter
            website: $website
            frontpage: $frontpage
            index: $index
            logo: $logo
        ) {
            id
            headshot
            name
            title
            company
            bio
            linkedIn
            insta
            facebook
            twitter
            website
            frontpage
            index
            logo
        }
    }
`

export const DELETE_HOSTSPEAKER = gql`
    mutation DELETE_HOSTSPEAKER($id: ID!) {
        deleteHostSpeaker(id: $id) {
            id
        }
    }
`

export const GET_HOSTSPEAKERS = gql`
    query GET_HOSTSPEAKS {
        hostSpeakers(orderBy: name_ASC) {
            id
            headshot
            name
            title
            company
            bio
            linkedIn
            insta
            facebook
            twitter
            website
            frontpage
            index
            logo
        }
    }
`

export const GET_HOSTSPEAKER_WHERE_NAME = gql`
    query GET_HOSTSPEAKERS_WHERE_NAME($name: String!) {
        hostSpeakers(where: { name: $name }) {
            id
        }
    }
`

export const GET_HOSTSPEAKER_WHERE_ID = gql`
    query GET_HOSTSPEAKER_WHERE_ID($id: ID!) {
        hostSpeaker(where: { id: $id }) {
            id
            headshot
            name
            title
            company
            bio
            linkedIn
            insta
            facebook
            twitter
            website
            logo
        }
    }
`

export const GET_HOSTSPEAKERS_ORDERBY_INDEX = gql`
    query GET_HOSTSPEAKS_ORDERBY_INDEX {
        hostSpeakers(orderBy: index_ASC) {
            id
            headshot
            name
            title
            company
            bio
            linkedIn
            insta
            facebook
            twitter
            website
            frontpage
            index
            logo
        }
    }
`

export const GET_HOSTSPEAKERS_WHERE_FRONTPAGE = gql`
    query GET_HOSTSPEAKERS_WHERE_FRONTPAGE {
        hostSpeakers(where: { frontpage: true }, orderBy: index_ASC) {
            headshot
            name
            title
            company
        }
    }
`
