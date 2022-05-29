import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import HeaderBegin from "../components/HeaderBegin";
import SelfButton from "../components/SelfButton";
import {Container} from "@mui/material";
import choiceStore from "../store/Choice";
import ModalIcon from "../components/ModalIcon";
import {observer} from "mobx-react";
import cookieStore from "../store/Cookie";

const BeginPage = observer ( () => {

    const [modal, setModal] = useState(true)

    document.addEventListener('click', function (e) {
        const target = e.target

        if (target.closest('#startButton')) return

        if (!target.closest('.ModalBeginPageBlock')) {
            cookieStore.cookie = false
            setModal(!modal)
            console.log(cookieStore)
        }
    })

    return (
        <Container sx={{width: '360px', position: "relative"}}>
            <HeaderBegin />
            <div className="BeginPageBlock">
                <img src={"..//static/BeginImage.png"} alt="пёсик"/>
                <p className="BeginPageBlock__text">Найди себе четвероногого друга из приюта!</p>
                <Link to="/type" style={{width: "100%"}} onClick={
                    choiceStore.setDefault()
                }>
                    <SelfButton text={"Выбрать предпочтения"} width={'100%'} id={'startButton'}/>
                </Link>
            </div>

            <div className={ modal ? "ModalBeginPage" : 'ModalBeginPage-none'}>
                <div className="ModalBeginPageBlock">
                    <div className="ModalBeginPageBlock__block">
                        <ModalIcon />
                        <p className="ModalBeginPageBlock__block__text">
                            Этот сайт использует cookie для хранения данных. Продолжая использовать сайт, Вы даете согласие на работу с этими файлами.
                        </p>
                    </div>
                    <div className="ModalBeginPageBlock__blockButton">
                        <div id="button" style={{borderRadius: "30px"}} onClick={() => {
                            cookieStore.cookie = true
                            setModal(!modal)
                            console.log(cookieStore)
                        }} >
                            <SelfButton color={false} text={'Принять и продолжить'} width={"100%"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
})

export default BeginPage