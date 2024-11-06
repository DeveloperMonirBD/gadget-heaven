import toast from "react-hot-toast";

// get all wishlist from local storage
const getAllWishlists = () => {
    const all = localStorage.getItem('wishCards');
    
    
    if (all) {
        const wishCards = JSON.parse(all);
        return wishCards;
    } else {
        return [];
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
const removeWishCard = id => {
    const wishCards = getAllWishlists();

    const remaining = wishCards.filter(product => product.id != id);

    localStorage.setItem('wishCards', JSON.stringify(remaining));
    toast.success('Successfully Removed!');
};


export { addWishlist, getAllWishlists, removeWishCard };