import { FaTimes } from 'react-icons/fa'
const Restaurant = ({ restaurant, onDelete, onToggle }) => {
    return (
        <div className={`restaurant ${restaurant.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(restaurant.id)} >
            <h3>{restaurant.text}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(restaurant.id)}
                />
            </h3>
            <p>{restaurant.day}</p>

        </div>
    )
}

export default Restaurant
