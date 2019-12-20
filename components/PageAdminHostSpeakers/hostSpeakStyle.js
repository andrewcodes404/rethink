import styled from 'styled-components'

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0 0;

    h1 {
        margin-bottom: 10px;
    }

    .arrow {
        font-size: 50px;
        margin-bottom: 10px;
    }
`

export const Members = styled.div`
    width: 95%;
    margin: 20px auto 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 500px) {
        max-width: 422px;
        justify-content: flex-start;
    }

    @media (min-width: 768px) {
        max-width: 670px;
    }

    @media (min-width: 1080px) {
        max-width: 882px;
    }

    min-height: 180px;
`
export const Member = styled.div`
    width: 48%;
    max-width: 200px;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 35px;

    cursor: pointer;
    transition: 0.3s;

    @media (min-width: 500px) {
        width: 200px;
        height: 280px;
        margin: 0 5px 30px;
    }
    @media (min-width: 767px) {
        margin: 0 10px 30px;
    }

    .headshot {
        position: relative;
        height: 130px;
        width: 100%;
        margin: 0 auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (min-width: 500px) {
            height: 200px;
            width: 200px;
        }

        .index {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 4px 2px 2px;
            border-bottom-right-radius: 5px;
            color: white;
        }
    }

    .member-name {
        p {
            text-align: center;
            margin-bottom: 10px;
            line-height: 1;
            font-size: 16px;
        }
    }

    .buttons {
        /* display: none; */
        display: flex;
        opacity: 0;
        width: 100%;
        margin: 0 auto;
        transition: 0.6s;
        justify-content: space-between;

        .btn {
            width: 45%;
            font-size: 14px;
            padding: 0px;
            text-transform: lowercase;
        }

        @media (min-width: 767px) {
            width: 90%;

            .btn {
                padding: 2px;
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        20% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    &:hover {
        .buttons {
            animation: fadeIn 0.8s forwards;
            display: flex;
        }
    }
`

// 👇 FORM STYLE --- 👇 FORM STYLE --- 👇 FORM STYLE ---
// 👇 FORM STYLE --- 👇 FORM STYLE --- 👇 FORM STYLE ---
// 👇 FORM STYLE --- 👇 FORM STYLE --- 👇 FORM STYLE ---

export const FormModal = styled.div`
    position: absolute;
    @media (min-width: 767px) {
        position: fixed;
    }
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;

    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
`

export const HostSpeakForm = styled.form`
    h3 {
        margin: 10px 0 20px 0;
        text-align: center;
    }

    background: white;
    padding: 0px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    width: 90%;
    margin: 0 auto;
    max-width: 550px;

    .flex-item1,
    .flex-item2 {
        display: flex;
        flex-direction: column;
    }

    .flex-item2 {
        justify-content: space-between;
        align-items: flex-end;
    }

    .icon {
        margin-left: 10px;
    }

    fieldset {
        border-radius: 0;
    }

    .img-upload-wrapper {
        margin: 10px auto 30px;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: space-around;
        padding-top: 15px;

        @media (min-width: 767px) {
            margin: 0;
        }

        .upload-btn {
            background: green;
            color: white;
            margin-bottom: 10px;
            &:hover {
                color: black;
                background: gold;
            }
        }
    }

    .fake-headshot {
        width: 140px;
        height: 140px;
        background: lightgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .fake-icon {
            font-size: 60px;
            color: green;
        }
    }

    .thumb {
        width: 200px;
        height: 200px;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    .input-number {
        width: 200px;
        input {
            width: 50px;
        }
    }
    .input-checkbox {
        /* font-size: 16px; */
        width: 200px;
    }

    .btm-wrapper {
        margin-top: 30px;

        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .submit-wrapper {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        .close-btn {
            margin-right: 20px;
        }

        .submit-btn {
            background: green;
            color: white;
            &:hover {
                color: black;
                background: gold;
            }
        }
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .modal-card {
        background: white;
        padding: 40px;
        text-align: center;
        p {
            margin-bottom: 50px;
        }
    }
    .modal-btn {
        background: green;
        padding: 10px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`

// delete modal --- delete modal --- delete modal ---
// delete modal --- delete modal --- delete modal ---
// delete modal --- delete modal --- delete modal ---

export const DeleteModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .modal-card {
        width: 90%;
        margin: 0 auto;
        max-width: 500px;
        background: white;
        padding: 40px;
        text-align: center;
        .content {
            p {
                margin-bottom: 0px;
            }
        }
    }

    .modal-btn-green,
    .modal-btn-red {
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        width: 160px;
        margin: 8px auto;
        display: flex;
        flex-direction: column;

        &:hover {
            color: white;
        }
    }

    .modal-btn-green {
        background: green;
        color: white;
    }

    .modal-btn-red {
        background: firebrick;
        color: white;
    }
`
