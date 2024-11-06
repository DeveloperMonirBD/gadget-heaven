import toast from 'react-hot-toast';

// get all products from storage
const getAllFavourites = () => {
    const allFavourites = localStorage.getItem('favourites');

    if (allFavourites) {
        const favourites = JSON.parse(allFavourites);
        return favourites;
    } else {
        return [];
    }
};

// add a product to local storage
const addFavourite = product => {
    // get all previously saved product data
    const favourites = getAllFavourites();
    const isExist = favourites.find(item => item.id == product.id);
    if (isExist) return toast.error('This product is already exists!');

    favourites.push(product);

    localStorage.setItem('favourites', JSON.stringify(favourites));
    toast.success('Successfully added!');
};

// remove a product to local storage
const removeFavorite = id => {
    const favourites = getAllFavourites();

    const remaining = favourites.filter(product => product.id != id);

    localStorage.setItem('favourites', JSON.stringify(remaining));
    toast.success('Successfully Removed!');
};

export { addFavourite, getAllFavourites, removeFavorite };
