const userModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");


const createToken = (_id) => {
    const jwtKey = "SECRETKEY";

    return jwt.sign({ _id }, jwtKey)
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });

        if (user) return res.status(400).json("User email already exists");

        if (!name || !email || !password) return res.status(400).json("Missing fields are required");

        if (!validator.isEmail(email)) return res.status(400).json("Email must be a valid email");

        if (!validator.isStrongPassword(password)) return res.status(400).json("Password must be a strong password");

        user = new userModel({ name, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = createToken(user._id);

        return res.status(200).json({ _id: user.id, token })
    } catch (error) {
        console.log(error)
        res.send(500).json(error)
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });

        if (!user) return res.status(400).json("Invalid email or password");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) return res.status(400).json("Invalid email or password");


        const token = createToken(user._id);

        return res.status(200).json({ _id: user.id, token, name: user.name })

    } catch (error) {
        console.log(error)
        res.send(500).json(error)
    }
}

const getUserById = async (req, res) => {
    const id = req.params.userId;

    try {
        const user = await userModel.findById(id);

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.send(500).json(error)
    }
}

const getAllUsers = async (req, res) => {
    const id = req.params.userId;

    try {
        const user = await userModel.find()

        res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.send(500).json(error)
    }
}


module.exports = { registerUser, loginUser, getUserById, getAllUsers }