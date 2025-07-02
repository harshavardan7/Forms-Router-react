import { ErrorMessage, Formik, Form, Field } from "formik";
import* as Yup from "yup";
const EmployeeFeedbackForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    department: "",
    rating: "",
    feedback: "",
  };
  const validationSchema=Yup.object({
    fullName:Yup.string()
    .min(3,"name must be atleast 3 char")
    .required("Full Name required"),
    email:Yup.string()
    .email("Invalid email")
    .required("Email is required"),
    department:Yup.string()
    .required("Select Department"),
    rating:Yup.number()
    .min(1,"Min rating 1")
    .max(5,"max rating 5")
    .required("rating"),
    feedback:Yup.string()
    .max(200,"feedback is full")
    
    
  });
   const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted: ", values);
    alert("Form submitted Sucsessfully!");
    resetForm();
  };
  return (
    <div className="form-container">
      <h2>Employee Feedback Form</h2>
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Full Name:</label>
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" className="error" />
            
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
            
          </div>
          <div>
            <label>Department:</label>
            <Field as="select" name="department">
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
            </Field>
            <ErrorMessage name="department" component="div" className="error" />
            
          </div>
          <div>
            <label> Rating(1-5):</label>
            <Field type="number" name="rating" />
            <ErrorMessage name="rating" component="div" className="error" />
            
          </div>
          <div>
            <label> Feedback:</label>
            <Field type="textarea" name="feedback" />
            <ErrorMessage name="feedback" component="div" className="error" />
            
          </div>
          <button type="submit">Submit Feedback</button>
        </Form>
      </Formik>
    </div>
  );
};
export default EmployeeFeedbackForm;
