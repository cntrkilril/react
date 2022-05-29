import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
    Home,
    Male,
    FavoriteBorder,
    Favorite,
} from "@mui/icons-material/";
import SwipeableViews from "react-swipeable-views";

const PetsCard = () => {
    const [pets, setPets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
                )
                .then((response) => {
                    setPets([...pets, ...response.data]);
                    setCurrentPage((prev) => prev + 1);
                    setTotalCount(response.headers["x-total-count"]);
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) <
            200 &&
            pets.length < totalCount
        ) {
            setFetching(true);
        }
    };

    return (
        <>
            {pets.map((p) => (
                <div key={p.id} className="PetsCard">
                    <div className="card__photo">
                        <Link to={`/pets/${p.id}`}>
                            <SwipeableViews>
                                <img
                                    src="https://fun-cats.ru/wp-content/uploads/d/6/2/d6283e346fd88fa08e604c055cd4e3ea.jpeg"
                                    alt=""
                                />
                                <img
                                    src="https://fun-cats.ru/wp-content/uploads/d/6/2/d6283e346fd88fa08e604c055cd4e3ea.jpeg"
                                    alt=""
                                />
                                <img
                                    src="https://fun-cats.ru/wp-content/uploads/d/6/2/d6283e346fd88fa08e604c055cd4e3ea.jpeg"
                                    alt=""
                                />
                            </SwipeableViews>
                        </Link>
                        <div
                            className="card__photo--like"
                            onClick={() => {
                                alert("LIKE");
                            }}
                        >
                            {p.id % 2 !== 0 ? <Favorite/> : <FavoriteBorder/>}
                        </div>
                    </div>
                    <div
                        className="card__arrow_left"
                        onClick={() => {
                            alert("LEFT");
                        }}
                    >
                        <KeyboardArrowLeft/>
                    </div>
                    <div
                        className="card__arrow_right"
                        onClick={() => {
                            alert("RIGHT");
                        }}
                    >
                        <KeyboardArrowRight/>
                    </div>
                    <div className="card__about">
                        <div className="card__about--name">Персик</div>
                        <div className="card__about--description">
                            Смышлённый пёс, знает несколько команд, любит гулять и нежиться
                            под солнышком, любит свою игрушку.
                        </div>
                        <div className="card__about--genders">
                            <Male/>
                        </div>
                        <div className="card__about--gendersName">Мальчик</div>
                    </div>
                    <div className="card__line"></div>
                    <div className="card__footer">
                        <div className="card__footer--home">
                            <Home/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PetsCard;
