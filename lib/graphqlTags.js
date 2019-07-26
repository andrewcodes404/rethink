import gql from 'graphql-tag'

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
    mutation CREATE_ADVCOM(
        $index: Int!
        $headshot: String!
        $name: String!
        $jobTitle: String!
        $company: String!
    ) {
        createAdvCom(
            index: $index
            headshot: $headshot
            name: $name
            jobTitle: $jobTitle
            company: $company
        ) {
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
        updateAdvCom(
            id: $id
            headshot: $headshot
            name: $name
            jobTitle: $jobTitle
            company: $company
            index: $index
        ) {
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
