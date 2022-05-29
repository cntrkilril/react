import {makeAutoObservable, runInAction} from "mobx";
import {getHostInformation} from "./helper/getHostInformation";

const host = getHostInformation();

class DetailPageStore {
    constructor() {
        makeAutoObservable(this);
    }

    petInfo = {
        name: "Любимчик",
        description: "Самый послушный мальчик на свете",
        gender: "мальчик",
        age: 1,
        shelter: "Котокафе",
        shelterWebsite: "https://kotocafe.ru/koteeshnaya",
    };
    isLiked = false;
    images = [
        {
            label: "San Francisco – Oakland Bay Bridge, United States",
            imgPath:
                "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
            label: "Bird",
            imgPath:
                "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
            label: "Bali, Indonesia",
            imgPath:
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
            label: "Goč, Serbia",
            imgPath:
                "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
        },
    ];

    fetchInfo = async (id) => {
        const petReq = await fetch(`${host}/pets/${id}`);
        const petRes = await petReq.json();
        console.log(petRes);
        if (petReq.ok) {
            runInAction(() => {
                this.petInfo = {
                    name: petRes.name,
                    description: petRes.description,
                    gender: petRes.gender,
                    age: petRes.age,
                    shelter: petRes.shelter,
                    shelterWebsite: petRes.shelterWebsite,
                };

                this.isLiked = petRes.isLiked;

                this.images = petRes.images;
            });
        }
    };
}

export default new DetailPageStore();
