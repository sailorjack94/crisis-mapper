import './Header.css'

const Header = ({selector}) => {

    var content = '';
    if (selector === 0) {
        content = "an empty globe!"
    } else if (selector === 1) {
        content = "the most recent significant earthquakes."
    } else if (content === 2) {
        content = "something else is coming."
    }


    
    return (
        <>
            <h1 className = 'title' >Crisis Mapper</h1>
            <h4 className = 'splash-text'>Explore the world and discover the most recent major events.</h4>
            <h4 className = 'content-category'>You are viewing {content}</h4>
        </>
    )
}

export default Header;