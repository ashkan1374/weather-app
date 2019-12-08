var getUser=(id,callback)=>{
    var user={
        id:id,
        name:'ashkan'
    };
    callback(user);
};
getUser(12,(userObject)=>{
    console.log(userObject);
});