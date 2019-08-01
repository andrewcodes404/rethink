import styled from 'styled-components'
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
    flex-direction: column;
    justify-content: center;
    @media (min-width: 767px) {
        justify-content: unset;
    }
    align-items: center;

    padding-top: 30px;
    @media (min-width: 767px) {
        padding-top: 100px;
    }
`

export const AdvComForm = styled.form`
    background: white;
    padding: 0px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;

    width: 90%;
    margin: 0 auto;

    @media (min-width: 767px) {
        flex-direction: row;
        width: 550px;
        padding: 25px;
    }

    .flex-item1,
    .flex-item2 {
        display: flex;
        flex-direction: column;
    }

    .flex-item1,
    .flex-item2 {
        @media (min-width: 767px) {
            width: 50%;
        }
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
        flex-direction: column;
        align-items: flex-end;
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
    .submit-wrapper {
        padding: 10px 0;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        width: 90%;
        /* margin: 0 auto; */
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
