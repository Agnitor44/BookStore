 export const cartAdd = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}
export const cartSub = (data) => {
    return {
        type: "SUB",
        payload: data
    }
}

export const cartMore = (data) => {
    return {
        type: "MORE",
        payload: data
    }
}