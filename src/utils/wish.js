import toast from "react-hot-toast";

// get all wishlist from local storage
const getAllWishlists = () => {
    const all = localStorage.getItem('wishCards');
    
    
    if (all) {
        const wishCards = JSON.parse(all);
        console.log(wishCards)
        return wishCards
    } else {
        console.log([])
        return []
    }
}

// add a wishlist to local storage
const addWishlist = (wishCard) => {
    // get all previously saved wishlist data
    const wishCards = getAllWishlists()
    const isExist = wishCards.find(item => item.id == wishCard.id);
    if (isExist) return toast.error('This product is already exists!');
    
    wishCards.push(wishCard);
    localStorage.setItem('wishCards', JSON.stringify(wishCards));
    toast.success('Successfully added!');
}

// remove a wishlist from local storage


export { addWishlist, getAllWishlists };