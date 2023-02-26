import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import AddRestaurant from "./components/AddRestaurant";
import { useState, useEffect } from 'react'


const Back = () => {
  const [showAddRestaurant, setShowAddRestaurant] = useState(false)
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantsFromServer = await fetchRestaurants()
      setRestaurants(restaurantsFromServer)
    }

    getRestaurants()
  }, [])

  //Fetch restaurants
  const fetchRestaurants = async () => {
    const res = await fetch('http://localhost:5000/restaurants')
    const data = await res.json()

    return data
  }

  //Fetch restaurant
  const fetchRestaurant = async (id) => {
    const res = await fetch(`http://localhost:5000/restaurants/${id}`)
    const data = await res.json()

    return data
  }

  //Delete Restaurant
  const deleteRestaurant = async (id) => {
    await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: 'DELETE',
    })
    // console.log('delete', id);
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const restaurantToToggle = await fetchRestaurant(id)
    const updRestaurant = { ...restaurantToToggle, reminder: !restaurantToToggle.reminder }

    const res = await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updRestaurant)
    })
    const data = await res.json()

    setRestaurants(restaurants.map((restaurant) => restaurant.id === id ? { ...restaurant, reminder: data.reminder } : restaurant))
  }

  //Add Restaurant
  const addRestaurant = async (restaurant) => {
    const res = await fetch(`http://localhost:5000/restaurants`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    })
    const newRestaurant = await res.json()

    setRestaurants([...restaurants, newRestaurant])
  }


  return (
    <div className="container">
      <Header
        title="placeholder"
        onAdd={() => setShowAddRestaurant(!showAddRestaurant)}
        showAdd={showAddRestaurant} />
      {showAddRestaurant && <AddRestaurant onAdd={addRestaurant} />}
      {restaurants.length > 0 ? (
        <Restaurants restaurants={restaurants} onDelete={deleteRestaurant}
          onToggle={toggleReminder} />
      ) : (
        'No Restaurants'
      )}
    </div>
  );
}

export default Back;
