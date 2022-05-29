import React from "react";
import {observer} from "mobx-react";
import {PetsCard} from "../components";

import {FavoriteBorder /*Favorite*/} from "@mui/icons-material/";

const PetsPage = observer(() => {
    return (
        <>
            <div className="PetsPage">
                <PetsCard/>
                <div className="PetsPage__likeCount">
                    <span>5</span>
                    {/* <Favorite /> Сделать постепенное заполнение по количеству лайков */}
                    <FavoriteBorder/>
                </div>
            </div>
        </>
    );
});

export default PetsPage;
