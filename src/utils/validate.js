export const validateData = (email, pass) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,})$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/.test(pass);
  if (!isEmailValid) return "Email Not Valid";
  if (!isPassValid) return "Password Not Valid";
  return true;
};
