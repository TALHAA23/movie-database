import handleMongooseError from "./databaseErrorThrower";
export default function mongooseErroHandler(err, res) {
    console.log("MONGOOSE Handler");
    const errorInfo = handleMongooseError(err);
    return res.status(errorInfo.statusCode).send(errorInfo.message);
}
