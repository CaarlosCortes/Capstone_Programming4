import userService from "../services/user.service.js";


const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);

    res.status(200).json({ user });
    } catch(error) {
        res.status(400).json({ message: "Bad request" });
    }
    
};


const createUser = async (req, res) => {   

    const data = req.body;

    try {
        const newUser = await userService.createUser(data);
    res.status(201).json(newUser);
    }catch (error) {
        res.status(400).json({ message: "Bad request" });
    }
    
};


const updateEmailUserById = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body; 

    try {
        const updatedUser = await userService.updateEmailUserById(id, email );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Bad request" });
    }
    
};

const updateUsernameById = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body; 

    try {
        const updatedUser = await userService.updateUsernameById(id, username );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Bad request" });
    }
    
};


const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.deleteUserById(id);

        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: "Bad request" });
    }

};

const userController = {
    getUserById,
    createUser,
    updateEmailUserById,
    updateUsernameById,
    deleteUserById
};

export default userController;