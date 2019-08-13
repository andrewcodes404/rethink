import styled from 'styled-components'

export const FormModal = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
`

export const Form = styled.form`
    background: white;
    padding: 10px 0 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 95%;
    max-width: 420px;
    margin: 80px auto;
    h3 {
        text-decoration: underline;
        text-align: center;
        width: 100%;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 20px;
        max-width: 850px;
        justify-content: space-between;
    }

    .form-item-1,
    .form-item-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 768px) {
            max-width: 400px;
            width: 50%;
            justify-content: flex-start;
        }
    }

    .text-field,
    .text-area {
        width: 95%;
        max-width: 400px;
        margin: 8px auto;
    }

    .icon {
        margin-left: 10px;
    }

    fieldset {
        border-radius: 0;
    }

    .img-upload-wrapper {
        width: 95%;
        margin: 0px auto;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 15px 0;
        flex-direction: column-reverse;
        @media (min-width: 768px) {
            flex-direction: row;
            padding: 0;
        }
    }

    .upload-btn {
        background: green;
        color: white;
        margin-top: 20px;
        &:hover {
            color: black;
            background: gold;
        }

        @media (min-width: 768px) {
            margin: 0;
        }
    }

    .fake-logo {
        width: 180px;
        height: 180px;
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
        max-height: 200px;
        box-shadow: 10px 11px 20px -10px rgba(222, 222, 222, 1);
        background: green;
        img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }

    .ranking-wrapper {
        /* border-top: 1px solid lightgrey; */
        margin-top: 10px;
        padding: 10px 0 10px;
        h5 {
            text-decoration: underline;
            text-align: center;
        }
        @media (min-width: 768px) {
            margin-top: 40px;
            h5 {
                padding-left: 15px;
            }
        }
    }

    .radio-wrapper {
        /* display: flex; */
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 10px auto 20px;
        width: 280px;
        label {
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .btm-wrapper {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        @media (min-width: 1080px) {
            /* flex-direction: row; */
            padding: 0px 0 20px;
            margin: 0;
        }
    }

    .input-number {
        width: 80%;
        max-width: 300px;
        margin: 0 auto;
        input {
            width: 50px;
        }
        margin-bottom: 25px;
        @media (min-width: 768px) {
        }
    }
    .input-checkbox {
        width: 80%;
        max-width: 300px;
        margin: 0 auto 25px;

        @media (min-width: 768px) {
            margin: 0;
        }
    }
    .submit-wrapper {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 300px;
        margin: 0 auto;
        .submit-btn {
            background: green;
            color: white;
            &:hover {
                color: black;
                background: gold;
            }
        }
        @media (min-width: 768px) {
            width: 85%;
        }
    }
`
