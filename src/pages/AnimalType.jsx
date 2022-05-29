import {Container} from '@mui/material'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import HeaderChoice from "../components/HeaderChoice";
import StepChoice from "../components/StepChoice";
import {observer} from "mobx-react";
import SelfButton from "../components/SelfButton";
import CatIcon from "../components/CatIcon";
import DogIcon from "../components/DogIcon";
import choiceStore from "../store/Choice";


const AnimalType = observer( () => {

    const page = 'type'

    useEffect(() => {(
        async () => {
            await choiceStore.fetchCount().then()
        })()
    }, [page])

    return (
        <Container sx={{width: '360px'}}>
                <HeaderChoice/>
                <div className="AnimalTypeBlock">
                    <div className="">
                    <p className="AnimalTypeBlock__text">Кого ищем?</p>
                        <div className="AnimalTypeBlockButtonBlock">
                            <Link to={choiceStore.cats.male + choiceStore.cats.female <=0  ? '' : "/gender"}
                                  className={choiceStore.choice.type === 'cats'
                                    ? "ButtonChoiceBlock ButtonChoiceBlock-active"
                                    : "ButtonChoiceBlock ButtonChoiceBlock-nonactive"}
                                  onClick={() => {
                                      choiceStore.choice.type = 'cats'
                                      choiceStore.choice.gender = ''
                                  }}
                                >
                                    <p className={choiceStore.choice.type === 'cats'
                                        ? "ButtonChoiceBlock__text ButtonChoiceBlock__text-active"
                                        : " ButtonChoiceBlock__text ButtonChoiceBlock__text-nonactive"}>Кошку</p>
                                    <CatIcon active={choiceStore.choice.type === 'cats'}/>
                                {
                                    choiceStore.cats.male + choiceStore.cats.female <=0 &&
                                    <div className="ChoiceHiddenBlock"> </div>
                                }
                            </Link>
                            <Link to={choiceStore.dogs.male + choiceStore.dogs.female <=0  ? '' : "/gender"}
                                  className={choiceStore.choice.type === 'dogs'
                                    ? "ButtonChoiceBlock ButtonChoiceBlock-active"
                                    : "ButtonChoiceBlock ButtonChoiceBlock-nonactive"}
                                        disabled={choiceStore.isFetch ? choiceStore.dogs.male + choiceStore.dogs.female <=0  : true}
                                        onClick={() => {
                                            choiceStore.choice.type = 'dogs'
                                            choiceStore.choice.gender = ''
                                        }}
                                >
                                    <p className={choiceStore.choice.type === 'dogs'
                                        ? "ButtonChoiceBlock__text ButtonChoiceBlock__text-active"
                                        : " ButtonChoiceBlock__text ButtonChoiceBlock__text-nonactive"}>Собаку</p>
                                    <DogIcon active={choiceStore.choice.type === 'dogs'}/>
                                    {
                                        choiceStore.dogs.male + choiceStore.dogs.female <=0 &&
                                        <div className="ChoiceHiddenBlock"> </div>
                                    }
                            </Link>
                        </div>
                    </div>
                    <div className="FooterChoice">
                        <div className="AnimalTypeBlockActionBlock">
                            <Link to="/start">
                                <SelfButton width={'100%'} text={"Назад"} color={true}/>
                            </Link>
                            <Link to={choiceStore.choice.type === '' ? '' : "/gender"}>
                                <SelfButton width={'100%'} text={"Далее"} color={false}/>
                            </Link>
                        </div>
                        <StepChoice page={'type'}/>
                    </div>
                </div>
        </Container>
    )
})

export default AnimalType