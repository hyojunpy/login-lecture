"use strict"; 

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("./home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
    register: (req,res) => {
        res.render("home/register"); 
    }
};

const process = {
    login : (req, res) => {
        const user = new User(req.body); 
        const response = user.login(); 
        return res.json(response); //클라이언트에 json형태로 응답
    },

    register : (req, res) => {
        const user = new User(req.body); 
        const response = user.register(); 
        return res.json(response); //클라이언트에 json형태로 응답
    },

};

module.exports = {
    output, 
    process, 
};