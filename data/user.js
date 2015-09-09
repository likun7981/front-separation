module.exports = function(){
    require('lowdb')('./user.json',{
        autosave: true, // automatically save database on change (default: true)
        async: true     // asynchronous write (default: true)
    });
    return require('./user.json');
}