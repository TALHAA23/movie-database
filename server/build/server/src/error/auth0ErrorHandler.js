export default function auth0ErrorHandler(err, res) {
    console.log("CATCHED AUTH0 ERROR");
    const errWithBody = err;
    let [status, message] = [null, null];
    try {
        const errorBody = errWithBody?.body
            ? JSON.parse(errWithBody.body)
            : {};
        if (errorBody.statusCode && errorBody.message) {
            [status, message] = [errorBody.statusCode, errorBody.message];
        }
        else if (errorBody.error_description)
            [status, message] = [404, errorBody.error_description];
        else if (errWithBody.code)
            [status, message] = [errWithBody.statusCode, errWithBody.code];
        return res.status(status).send(message);
    }
    catch (err) {
        res.status(500).send("Something went wrong while attemping authintication");
    }
}
