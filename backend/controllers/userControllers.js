import User from '../models/userModel.js'


const registerUser = async(req,res) => {
    try {
        // console.log('requestBody', req.body);
        const {name, email, password, about} = req.body;
        const userExists = await User.findOne({email});
        if (userExists) {
            res.status(400).json({
                result: "User is already exists"
            })
        }

        const user = await User.create({
            name: name,
            email: email,
            password: password,
            about: about

        });

        // console.log('user create',user);
        if(user) {
            res.status(201).json({
                _id : user._id,
                name: user.name,
                email: user.email
            })
        }

    } catch(error) {
        console.log('error', error)
    }
};
const loginUser = (req,res) => {
    console.log("this data comes from register api");
    res.send("this data comes from login api");
};

export {registerUser, loginUser}; 