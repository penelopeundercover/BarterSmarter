import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateListing = () => {
  const [listings, setListings] = useState([]);
  const url = "http://localhost:3001/api/listings/";
  useEffect(() => {
    axios.get(url).then((res) => {
      setListings(res.data);
    });
  }, []);

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

      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      axios.post(url, formData).then((res) => {
        setListings(listings.concat(res.data));
      });
    },
  });
  console.log(listings);
  return (
    <>
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
        <div>
          /* <label></label>
          <input type="text" name="owner" />
        </div>
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

      <div>
        {listings.map((listing) => (
          <div key={listing.id}>
            <img src={listing.image} alt="item-image" />
            <h4>Name:{listing.name}</h4>
            <h4>Description:{listing.description}</h4>
            <h4>Monetary Value:{listing.monetary - value}</h4>
            {/* TODO: Owner needs to be pulled in from user creating the listing */}
            <h4>Owner:{listing.owner}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreateListing;
