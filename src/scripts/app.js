import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


const app = function() {

    const FavesRouter = Backbone.Router.extend({
        routes: {
            'home': '_handleHome',
            'faves': '_handleFaves',
            '*default': '_handleDefault'
        },

        _handleHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        _handleFaves: function() {
            ReactDOM.render(<FavesView />, document.querySelector('.container'))
        },

        _handleDefault: function() {
            location.hash = 'home'
        },

    })

// setting up MVC
//* create a view for the home page
//* set up a router
//* read api docs and set up models to manage data

// set up flux
//* create actions module
//* create store (pub)
//* tell view to become a (sub)

// create backend for faves
//* set up schema for a fave
//* set up api routes

// integrate front-end with backend
// * create actions to store faves (model.save /POST)
// * create actions to fetch faves (coll.fetch /GET)

//use a css framework
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..