import Restaurant from "./Restaurant"

const Restaurants = ({ restaurants, onDelete, onToggle }) => {

    return (
        <>
            {restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id} restaurant={restaurant} onDelete={onDelete} onToggle={onToggle} />
            )
            )}
        </>
    )
}

export default Restaurants