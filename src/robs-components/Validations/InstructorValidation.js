import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(3,"Name must be 3 characters long!")
    .required("Name is required!"),
  email: Yup.string()
    .email("Please enter Valid Email!")
    .required("Please enter Valid Email!"),
  password: Yup.string()
    .min(3, "Password Must be at Least 3 Characters Long!")
    .required("Please Enter A Password!"),
  auth: Yup.string()
    .matches("correctAuth")
    .required("Please enter Authorization Number!"),
})