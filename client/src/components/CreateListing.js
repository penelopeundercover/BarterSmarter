import React from "react";
import { useFormik } from "formik";

const CreateListing = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      monetaryValue: " ",
      owner: " ",
      category: " ",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div>
        <label> Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label> Description</label>
        <input
          type="text"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div>
        <label> Monetary Value</label>
        <input
          type="text"
          name="monetary-value"
          onChange={formik.handleChange}
          value={formik.values.mondetary - value}
        />
      </div>
      {/* TODO: Format the <div> below to pull in the name of the user creating the listing */}
      {/* <div>
         /* <label></label>
         <input type="text" name="owner" />
       </div> */}
      <div>
        <label> Upload Photo</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) =>
            formik.setFieldValue("photo", e.currentTarget.files[0])
          }
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateListing;
