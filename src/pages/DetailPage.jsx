import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import DetailPageStore from "../store/DetailPageStore";
/*↑-Функционал 
↓-стили */
import {
    Container,
    Box,
    Button,
    MobileStepper,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material/";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";

const DetailPage = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            await DetailPageStore.fetchInfo(id);
        })();
    }, [id]);

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const images = DetailPageStore.images;

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <Container maxWidth="sm">
                <Link to={"/pets"}>Назад</Link>

                <Box sx={{maxWidth: 600, flexGrow: 1}}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 50,
                            pl: 2,
                            bgcolor: "background.default",
                        }}
                    />
                    <AutoPlaySwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 255,
                                            display: "block",
                                            maxWidth: 400,
                                            overflow: "hidden",
                                            width: "100%",
                                            margin: "auto",
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                            >
                                {theme.direction === "rtl" ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>

                <Box
                    sx={{
                        textAlign: "right",
                    }}
                >
                    <Typography variant="subtitle1" color="text.secondary">
                        {DetailPageStore.isLiked ? "Лайкнуто" : "Не лайкнуто"}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: "1vw",
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {DetailPageStore.petInfo.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {DetailPageStore.petInfo.description}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {DetailPageStore.petInfo.gender}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Возраст (в годах): {DetailPageStore.petInfo.age}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Приют {DetailPageStore.petInfo.shelter}
                    </Typography>
                    <Button
                        variant="outlined"
                        href={DetailPageStore.petInfo.shelterWebsite}
                    >
                        Написать куратору
                    </Button>
                </Box>
            </Container>
        </>
    );
});

export default DetailPage;
