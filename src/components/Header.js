import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click');
    // }

    return (
        <header className='header'>
            <h1>Restaurant Tracker</h1>
            {/* <h2>{title}</h2> */}
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Restaurant Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

export default Header
