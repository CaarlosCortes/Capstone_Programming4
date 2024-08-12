import { validationResult} from "express-validator";

const errorHandler = (request, response, next) => {
    const errors = validationResult(request);
    
        if (!errors.isEmpty()) {
          return next(
            response.status(400).json({ message: "Bad requqets" }),
          );
        }
    
        next();
};

export default errorHandler;
