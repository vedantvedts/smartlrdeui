import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEdit } from "react-icons/md";
import SelectPicker from "components/selectpicker/selectPicker";
import './profile.css'

const validationSchema = Yup.object().shape({
     designation: Yup.string()
      .nullable()
      .required("Please select designation"),
    
      organization: Yup.string().required("Please select organization"),
});


const designations = ["Director", "Sc G", "Sc F", "Sc E", "Sc D", "Sc C", "Sc B", "TO D","TO C","TO B","TO A"];
const organizations = ["LRDE", "ADE", "CAIR", "DEBEL"];
  

const ProfileFormComponent = () => {
  
  return (
    <section id="fixed-sub-nav" className="gradient-background vh-100" style={{ paddingBottom: "30px" }}>
      <div className="container">
        <div className="card text-black shadow-lg ">

        <div className="profile-wrap">
        <main>
                <div className="profile-title">
                    <h1>Arjun Mehra</h1>
                    <p>Mobile : +91 1234 567 890
                    <br/>Email : arunKumar@gmail.com</p>
                </div>
                <div className="profile-container">
           
                <Formik
              initialValues={{ designation: "", organization: { label: "LRDE", value: "LRDE" } }}
              validationSchema={validationSchema}
              onSubmit={() => {}}
            >
               {({ values, touched, errors, setFieldValue }) => (
                <Form>
              <div className="row">
            {/* Designation Dropdown start*/}
                      <div className="col-md-6">
                               <div className="mb-4">
                            <div className="form-floating d-flex align-items-center">
                             <SelectPicker
                             options={designations.map((designation) => ({
                             label: designation,
                             value: designation,
                            }))}
                           value={
                              values.designation
                              ? { label: values.designation, value: values.designation }
                            : null
                          }
                         handleChange={(selectedOption) =>
                          setFieldValue("designation", selectedOption?.value || "")
                      }
                     readOnly={false}
                     placeholder="Select Designation"
                     required={true}
                  />
               <button type="button" className="icon-button ms-2">
                  <MdEdit />
                </button>
             </div>
             <ErrorMessage name="designation" component="div" className="invalid-feedback" />
         </div>
      </div>
    {/* Designation Dropdown end*/}

  
  {/* Organization Dropdown start */}
  <div className="col-md-6">
  <div className="mb-4">
    <div className="form-floating d-flex align-items-center">
      <SelectPicker
        options={organizations.map((organization) => ({
          label: organization,
          value: organization,
        }))}
        value={values.organization}
        handleChange={(selectedOption) => setFieldValue("organization", selectedOption)}
        readOnly={false}
        placeholder="Select Organization"
        required={true}
      />
      <button type="button" className="icon-button ms-2">
        <MdEdit />
      </button>
    </div>
    <ErrorMessage name="organization" component="div" className="invalid-feedback" />
  </div>
</div>

  {/* Organization Dropdown end*/}


</div>
                </Form>
              )}
            </Formik>
              
                </div>
                <br></br>
                <br></br>
                <br></br>

        </main>
        </div>





       
          </div>
        </div>

    </section>
  );
};

export default ProfileFormComponent;
