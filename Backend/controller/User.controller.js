import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashPass = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hashPass
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully" ,user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        }
    });
    } catch (error) {
        console.log("Error : ", error.message);
        res.status(500).json({ message: "Internal server error" });

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        try {
            // Find the user by email
            const user = await User.findOne({ email });

            // Check if user exists
            if (!user) {
                return res.status(400).json({ message: "Invalid username or password" });
            }

            // Compare the provided password with the stored hash
            const isMatch = await bcryptjs.compare(password, user.password);

            // If the password does not match
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid username or password" });
            }

            // If login is successful
            return res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });

        } catch (error) {
            // Handle unexpected errors
            return res.status(500).json({ message: "Server error" });
        }
    }catch (error) {
        // Handle unexpected errors
        return res.status(500).json({ message: "Server error" });
    }
}
