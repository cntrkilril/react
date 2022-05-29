import {Button, Container, Grid, Typography} from '@mui/material'
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import StepChoice from "../components/StepChoice";
import HeaderChoice from "../components/HeaderChoice";
import choiceStore from "../store/Choice";
import SelfButton from "../components/SelfButton";
import MaleGenderIcon from "../components/MaleGenderIcon";
import FemaleGenderIcon from "../components/FemaleGenderIcon";

function GenderFilter() {

    const page = 'type'

    useEffect(() => {(
        async () => {
            await function () {
                choiceStore.fetchCount().then()
                console.log(choiceStore)
            }
        })()
    }, [page])

    return (
        <Container sx={{width: '360px'}}>
            <HeaderChoice/>
            <div className="GenderFilterBLock">
                <div className=''>
                    <p className="GenderFilterBLock__text">Какого пола?</p>
                    <div className="GenderFilterBLockBlock">
                        <Link to={choiceStore[choiceStore.choice.type]['male'] <=0 ? '' : "/loadpage"}
                              className={choiceStore.choice.gender === 'male'
                                ? "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-active"
                                : "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-nonactive"}
                                    onClick={() => choiceStore.choice.gender='male'}
                            >
                                <p className={choiceStore.choice.gender === 'male'
                                    ? "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-active"
                                    : "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-nonactive"}>Мальчик</p>
                                <MaleGenderIcon active={choiceStore.choice.gender === 'male'}/>
                            {
                                choiceStore[choiceStore.choice.type]['male'] <=0 &&
                                <div className="ChoiceHiddenBlock"> </div>
                            }
                        </Link>

                        <Link to={choiceStore[choiceStore.choice.type]['female'] <=0 ? '' : "/loadpage"}
                              className={choiceStore.choice.gender === 'female'
                                ? "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-active"
                                : "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-nonactive"}
                                    onClick={() => choiceStore.choice.gender='female'}
                            >
                                <p className={choiceStore.choice.gender === 'female'
                                    ? "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-active"
                                    : "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-nonactive"}>Девочка</p>
                                <FemaleGenderIcon active={choiceStore.choice.gender === 'female'}/>
                                {
                                    choiceStore[choiceStore.choice.type]['female'] <=0 &&
                                    <div className="ChoiceHiddenBlock"> </div>
                                }
                        </Link>

                        <Link to={choiceStore[choiceStore.choice.type]['female'] + choiceStore[choiceStore.choice.type]['male'] <=0 ? '' : "/loadpage"}
                              className={choiceStore.choice.gender === 'any'
                                ? "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-active"
                                : "ButtonChoiceGenderBlock ButtonChoiceGenderBlock-nonactive"}
                                    onClick={() => choiceStore.choice.gender='any'}
                            >
                                <p className={choiceStore.choice.gender === 'any'
                                    ? "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-active"
                                    : "ButtonChoiceGenderBlock__text ButtonChoiceGenderBlock__text-nonactive"}>Любого</p>
                                <div className="">
                                    <FemaleGenderIcon active={choiceStore.choice.gender === 'any'}/>
                                    <MaleGenderIcon active={choiceStore.choice.gender === 'any'}/>
                                </div>
                                {
                                    choiceStore[choiceStore.choice.type]['female'] + choiceStore[choiceStore.choice.type]['male'] <=0 &&
                                    <div className="ChoiceHiddenBlock"> </div>
                                }
                        </Link>
                    </div>
                </div>
                <div className="FooterChoice">
                    <div className="AnimalTypeBlockActionBlock">
                        <Link to="/type">
                            <SelfButton width={'100%'} text={"Назад"} color={true}/>
                        </Link>
                        <Link to={choiceStore.choice.gender === '' ? '' : "/loadpage"}>
                            <SelfButton width={'100%'} text={"Далее"} color={false}/>
                        </Link>
                    </div>
                    <StepChoice page={'gender'}/>

                    <StepChoice page={'other'}/>
                </div>
            </div>
        </Container>
    )
}

export default GenderFilter