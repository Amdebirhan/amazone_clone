//create the initial state that manuplated by the app
export const initialState = {
    basket: [],//products that a user choose
    //user: null,//is the user that sign in to our site osed for delivery location, gifts and other...
}

//selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => //reduce function will iterate through the item(the basket and add the price)
        (item.price) + amount, 0)
}

const reducer = (state/*what the current state of the data is*/, action/*what we want to do with the app*/) => {
    switch (action.type) {

        case 'ADD_TO_BASKET':
            return {
                ...state,//return what ever the privious state is and
                basket: [...state.basket, action.item] //what ever priviously in the basket and add the new item to the basket
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(`can't remove the item as the product is not on the item.`)
            }
            return {
                ...state,//return what ever the privious state is and
                basket: newBasket//what ever priviously in the basket and add the new item to the basket
            };


        default:
            return state;
    }

}

export default reducer