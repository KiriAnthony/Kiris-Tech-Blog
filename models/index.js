// import all models
const Post = require('./Post');
const User = require('./User');

// User has many Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = {User, Post}