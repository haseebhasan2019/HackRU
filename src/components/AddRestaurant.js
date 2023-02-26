import { useState } from "react"

const AddRestaurant = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please add a restaurant")
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Restaurant</label>
                <input type="text" placeholder="Add Restaurant"
                    value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time"
                    value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div >
                <label>Closest Campus</label><br></br>
                <label>
                    <input type="radio" value="Livingston" name="campus" />
                    Livingston
                </label><br></br>
                <label>
                    <input type="radio" value="CollegeAvenue" name="campus" />
                    College Avenue
                </label><br></br>
                <label>
                    <input type="radio" value="Busch" name="campus" />
                    Busch
                </label><br></br>
                <label>
                    <input type="radio" value="CookDouglass" name="campus" />
                    Cook / Douglass
                </label>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Restaurant' className='btn btn-block' />

        </form>
    )
}

export default AddRestaurant
