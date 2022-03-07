const loginGoogle = require('express').Router()
const {passport} = require('../../../../app')
loginGoogle.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

loginGoogle.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports={
    loginGoogle
}