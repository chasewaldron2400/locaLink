const User = require('./User');
const Project = require('./Project');
const Category = require('./Category');
const Review = require('./Review');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Review, {
   foreignKey: 'user_Id'
});

Review.belongsTo(User, {
    foreignKey: 'user_Id'
});

Project.hasMany(Review, { 
   foreignKey: 'project_Id' 
  });
  
Review.belongsTo(Project, { 
   foreignKey: 'project_Id'
 });


Category.hasMany(Project, { 
  foreignKey: 'category_Id' 
});

Project.belongsTo(Category, { 
  foreignKey: 'category_Id' 
});




 module.exports = { User, Project, Category, Review};
