const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
//create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password, age } = req.body;
    //validation
    if (!username || !email || !password || !age) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all fields",
      });
    }
    else if(age<"18" || age>"65"){
      return res.status(400).send({
        success: false,
        message: "Your age should be between 18-65",
      });
    }
    //exisiting user
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    //save new user
    const user = new userModel({ username, email, password: hashedPassword, age });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Register callback",
      success: false,
      error,
    });
  }
};

// get all users
exports.getUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Getting User",
      error,
    });
  }
};

//login
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invlid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      messgae: "login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login Callcback",
      error,
    });
  }
};


//pay
exports.payController = async (req, res) => {
  try {
    const {id, slot } = req.body;
    
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Error occured",
      });
    }
    user.payment = "500";
    user.slot = slot;
    user.save();
    return res.status(200).send({
      success: true,
      message: "subscription renewed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error Occured",
      error,
    });
  }
};
