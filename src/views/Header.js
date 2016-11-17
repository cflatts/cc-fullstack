import React from 'react'

const Header = React.createClass({
    render: function() {
        return(
            <header className = 'header'>
                <h1>PIVF</h1>
                <p>Politicians I'd Vote For</p>
                <nav>
                    <a href = '#home'>Home</a>
                    <a href = '#faves'>Faves</a>
                </nav>
            </header>
        )
    }
})

export default Header