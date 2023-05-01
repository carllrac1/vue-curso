import { defineStore } from "pinia"

export const useNumbersStore = defineStore("numbers", {
    state : () => {
        return {
            numbers: [1,2,3,4,5,6,7,8,9]
        }
    },

    actions: {
        addNumber(num){
            this.numbers.push(num)
        }
    },

    getters: {
        doubleNum: (state) => {
            return state.numbers.map(num => num * 2)
        },

        filterNum: (state) => {
            return (min) => {
                return state.numbers.filter(num => num >= min)
            }
        }
    }
})