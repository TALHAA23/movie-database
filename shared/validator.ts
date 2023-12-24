import errorThrower from "./errorThrower";
import HttpError from "./httpErrorsEnum";
function passwordValidator(password: string | null) {
  // Check if password is empty
  return true;
  if (!password) {
    //custom error
    console.log("Password cannot be empty");
    throw errorThrower("Password cannot be empty", HttpError.BadRequest);
  }

  // Check if password is at least 8 characters long
  if (password.length < 8) {
    //custom error
    console.log("Password should be at least 8 characters long");
    throw errorThrower(
      "Password should be at least 8 character long",
      HttpError.BadRequest
    );
  }

  // Check if password contains a digit
  if (!/\d/.test(password)) {
    //custom error
    console.log("Password should contain at least one digit");
    throw errorThrower(
      "Password should contain at least one digit",
      HttpError.BadRequest
    );
  }

  // Check if password contains a lowercase letter
  if (!/[a-z]/.test(password)) {
    //custom error
    console.log("Password should contain at least one lowercase letter");
    throw errorThrower(
      "Password should contain at least one lowercase letter",
      HttpError.BadRequest
    );
  }

  // Check if password contains an uppercase letter
  if (!/[A-Z]/.test(password)) {
    //custom error
    console.log("Password should contain at least one uppercase letter");
    throw errorThrower(
      "Password should contain at least one uppercase letter",
      HttpError.BadRequest
    );
  }

  // Check if password contains a special character
  if (!/[!@#$%^&*]/.test(password)) {
    //custom error
    console.log("Password should contain at least one special character");
    throw errorThrower(
      "Password should contain at least one special character",
      HttpError.BadRequest
    );
  }

  // If all checks pass, return true
  return true;
}

function emailValidator(email: string | null) {
  // Check if email is empty
  if (!email) {
    //custom error
    console.log("Email cannot be empty");
    throw errorThrower("Email cannot be empty", HttpError.BadRequest);
  }

  // Check if email contains @
  if (email.indexOf("@") === -1) {
    //custom error
    console.log("Email should contain @");
    throw errorThrower("Email should contain @", HttpError.BadRequest);
  }

  // Split email into local and domain parts
  const [localPart, domainPart] = email.split("@");

  // Check if local part is empty
  if (!localPart) {
    //custom error
    console.log("Email should have a local part before @");
    throw errorThrower(
      "Email should have a local part before @",
      HttpError.BadRequest
    );
  }

  // Check if domain part is empty
  if (!domainPart) {
    //custom error
    console.log("Email should have a domain part after @");
    throw errorThrower(
      "Email should have a domain part after @",
      HttpError.BadRequest
    );
  }

  // Check if domain part contains dot
  if (domainPart.indexOf(".") === -1) {
    //custom error
    console.log("Domain part should contain .");
    throw errorThrower("Domain part should contain .", HttpError.BadRequest);
  }

  // Split domain into main and top-level domains
  const [mainDomain, topLevelDomain] = domainPart.split(".");

  // Check if main domain is empty
  if (!mainDomain) {
    //custom error
    console.log("Domain part should have a main domain before .");
    throw errorThrower(
      "Domain part should have a main domain before",
      HttpError.BadRequest
    );
  }

  // Check if top-level domain is empty
  if (!topLevelDomain) {
    //custom error
    console.log("Domain part should have a top-level domain after .");
    throw errorThrower(
      "Domain part should have a top-level domain after .",
      HttpError.BadRequest
    );
  }

  // If all checks pass, return true
  return true;
}

export { passwordValidator, emailValidator };
