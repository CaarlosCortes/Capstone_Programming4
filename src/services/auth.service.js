import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (username, password) => {
    const query = User.where({ username });

    const user = await query.findOne();

    const match = await bcrypt.compare(password, user.password);

    const access_token = jwt.sign(
        { id: user._id, username: user.username, email: user.email },
        "ffb843e7e2acd913376f90ee47b364854c53857643d53184ee6a1b84f329b9c2164e3c489200e1c18b6ae16ca6abc3a64470a0b63fa67974ad25fc0dfebcd8248c041e08475bac7c0dfc160fe4768914be1dc4df4300da7e2227e7124c68d705f6266f66fa19c95380a28ba06d4dd184c10edc90d18a258a7cea8279d492ddff4b8103d9e4a22c1a2dc7c552b16fa47fe9f8a93bb0e7d26bc98bf958c274b1a18f879aa565baa25c5c52ba1c803b45623531c64f4c0c345044e01ae20ab9f313cc09ce771c7e4983d9ee50a696275745e7bf2f43aaa6171050aaaef99f338800b560be268af417c3117aad67999423a4dc49d0516a4d105d6ee3b61292d5daa4",
        { expiresIn: "48h" }
      );
      
      return access_token;
};

const authService =  {
    login
}

export default authService;