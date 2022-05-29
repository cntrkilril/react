import {makeAutoObservable, runInAction} from "mobx";

class Choice {
    constructor() {
        makeAutoObservable(this);
    }

    isFetch = false
    cats = {
        'male': '',
        'female': '',
    }
    dogs = {
        'male': '',
        'female': '',
    }

    choice = {
        'type': '',
        'gender': '',
    }

    fetchCount = async () => {
        const petReq = await fetch(`https://my-json-server.typicode.com/cntrkilril/test-api/db`);
        const petRes = await petReq.json();

        this.cats = {
            'male': petRes['cats']['male'],
            'female': petRes['cats']['female'],
        }
        this.dogs = {
            'male': petRes['dogs']['male'],
            'female': petRes['dogs']['female'],
        }
        this.isFetch = true
        console.log(this)
    }

    setDefault = async () => {
        this.choice = {
            'type': '',
            'gender': '',
        }
    }
}

const choiceStore = new Choice;

export default choiceStore;