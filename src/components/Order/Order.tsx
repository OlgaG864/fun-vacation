import { useFormik } from "formik";
import Title from "../Title/Title";

interface IErrors {
  [key: string]: string;
}

function Order() {
  const formik = useFormik({
    // assign default value to field
    initialValues: {
      package: "",
      name: "",
      email: "",
      agree: false,
    },

    validate: (values) => {
      const errors: IErrors = {};

      if (!values.package) {
        errors.package = "Please select a valid package.";
      }
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.agree) {
        errors.agree = "You must agree to terms";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email =
          "Please enter a valid email address for delivery updates.";
      }
      return errors;
    },

    // all values from fields as JSON object
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Title mainTxt="Order Now" subTxt="quickly order a new vacation" />

      <main className="p-5">
        <h4 className="mb-3">Billing address</h4>
        <form onSubmit={formik.handleSubmit} className="needs-validation">
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Vacation Package</label>
              <select
                className="form-select"
                id="package"
                name="package"
                onChange={formik.handleChange}
                value={formik.values.package}
                onBlur={formik.handleBlur}
              >
                <option value="">Choose...</option>
                <option>Special holiday package</option>
              </select>
              {formik.touched.package && formik.errors.package ? (
                <div className="text-danger">{formik.errors.package}</div>
              ) : null}
            </div>

            <div className="col-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="col-12">
              <label className="form-label">
                Email
                <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="form-check mt-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="agree"
              name="agree"
              onChange={formik.handleChange}
            />
            <label className="form-check-label">I agree to terms...</label>
            {formik.touched.agree && formik.errors.agree ? (
              <div className="text-danger">{formik.errors.agree}</div>
            ) : null}
          </div>

          <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">
            Continue to checkout
          </button>
        </form>
      </main>
    </>
  );
}

export default Order;
