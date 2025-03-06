import React, { useState,useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SelectPicker from "components/selectpicker/selectPicker";
import "./profile.css";
import { format } from "date-fns";
import { Country, State, City } from "country-state-city";

const personalInfoValidationSchema = Yup.object({
  organization: Yup.string().required("Organization is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  addressType: Yup.string().required("Address type is required"),
  address1: Yup.string()
    .required("Address 1 is required")
    .max(250, "Address 1 must be at most 250 characters"),
  address2: Yup.string().max(250, "Address 2 must be at most 250 characters"), // Optional field
  postalCode: Yup.string().required("Postal Code is required"),
});

const professionalInfoValidationSchema = Yup.object({
  totalYearsOfExperience: Yup.string().required("Total years in profession is required"),
  currentTechnology: Yup.string().required("Current technology focus is required"),
  title: Yup.string().required("Title is required"),
  employer: Yup.string().required("Employer is required"),
  employerType: Yup.string().required("Employer Type is required")
});

const educationInfoValidationSchema = Yup.object({
  graduationMonth: Yup.string().required("Graduation Month is required"),
  graduationYear: Yup.string().required("Graduation Year is required"),
  fieldOfStudy: Yup.string().required("Field of Study is required"),
  degreeAwarded: Yup.string().required("Degree Awarded is required")
});

const fieldOfStudyOptions = [
  { value: "Biological and Medical Sciences", label: "Biological and Medical Sciences" },
  { value: "Computer Sciences and Information Technologies", label: "Computer Sciences and Information Technologies" },
  { value: "Engineering", label: "Engineering" },
  { value: "Technology", label: "Technology" },
  { value: "Science", label: "Science" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Physical Sciences", label: "Physical Sciences" },
  { value: "Technical Communications, Education, Management, Law and Policy", label: "Technical Communications, Education, Management, Law and Policy" },
  { value: "Other", label: "Other" }
];

const degreeAwardedOptions = [
  { value: "Bachelor of Computer Application(BCA)", label: "Bachelor of Computer Application(BCA)" },
  { value: "Bachelor of Engineering", label: "Bachelor of Engineering" },
  { value: "Bachelor of Technology", label: "Bachelor of Technology" },
  { value: "Diploma Engineering", label: "Diploma Engineering" },
  { value: "Ph.D.", label: "Ph.D." },
  { value: "Master of Science In Information Technology (M.Sc.IT)", label: "Master of Science In Information Technology (M.Sc.IT)" },
  { value: "Master of Computer Application (MCA)", label: "Master of Computer Application (MCA)" },
  { value: "Master of Engineering", label: "Master of Engineering" },
  { value: "MSTR", label: "Master of Science" },
  { value: "Matura (EU,Russia,China,India)", label: "Matura (EU,Russia,China,India)" },
  { value: "MBA", label: "MBA" },
  { value: "Polytechnic Eng.", label: "Polytechnic Eng." },
  { value: "Other", label: "Other" }
];


const graduationMonthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" }
];


const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 50; // Allows selection up to 50 years back
  return Array.from({ length: 51 }, (_, i) => {
    const year = startYear + i;
    return { value: year.toString(), label: year.toString() };
  });
};

const graduationYearOptions = generateYears();


const genderOptions = [
  { value: "F", label: "Female" },
  { value: "M", label: "Male" },
  { value: "O", label: "Other" },
];

const totalYearsOptions = [
  { value: "0", label: "Less than 1" },
  ...Array.from({ length: 9 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
  { value: "10+", label: "10 or more" },
];

const technologyOptions = [
  { value: "advanced-rf-microwave-devices", label: "Advanced RF Microwave devices" },
  { value: "airborne-radar", label: "Airborne Radar" },
  { value: "antenna", label: "Antenna" },
  { value: "antennas-miniaturization", label: "Antennas Miniaturization" },
  { value: "cognitive-radar", label: "Cognitive Radar" },
  { value: "electromagnetism", label: "Electromagnetism" },
  { value: "extra-terrestrial-communications", label: "Extra-terrestrial Communications" },
  { value: "firefighting-robotic-vehicle", label: "Firefighting Robotic Vehicle" },
  { value: "microwave-imaging", label: "Microwave Imaging" },
  { value: "millimetre-wave-integrated-circuits", label: "Millimetre-wave Integrated Circuits" },
  { value: "passive-radar-imaging", label: "Passive Radar Imaging" },
  { value: "precipitation-scattering", label: "Precipitation Scattering" },
  { value: "radar", label: "Radar" },
  { value: "radar-adas", label: "Radar for Advanced Driver Assistance Systems" },
  { value: "radar-interference", label: "Radar Interference" },
  { value: "radar-range-equation", label: "Radar Range Equation" },
  { value: "radar-system-concepts", label: "Radar System Concepts and Signal Processing" },
  { value: "radar-tracking", label: "Radar Tracking" },
  { value: "radio-frequency", label: "Radio Frequency" },
  { value: "remote-sensing", label: "Remote Sensing" },
  { value: "rf-components", label: "RF Components" },
  { value: "sample-radar-systems", label: "Sample Radar Systems" },
  { value: "wave-propagation", label: "Wave Propagation" },
  { value: "wearable-radar", label: "Wearable Radar" },
  { value: "wireless-communication", label: "Wireless Communication" },
];


const titleOptions = [
  { value: "Chairman of the Board/President/CEO", label: "Chairman of the Board/President/CEO" },
  { value: "Chief Engineer/Chief Scientist", label: "Chief Engineer/Chief Scientist" },
  { value: "Scientist", label: "Scientist" },
  { value: "Sr. Scientist", label: "Sr. Scientist" },
  { value: "Technical Officer", label: "Technical Officer" },
  { value: "Sr. Technical Assistant", label: "Sr. Technical Assistant" },
  { value: "Consultant", label: "Consultant" },
  { value: "Dean/Professor/Instructor", label: "Dean/Professor/Instructor" },
  { value: "Design Engineer", label: "Design Engineer" },
  { value: "Design Engineering Manager", label: "Design Engineering Manager" },
  { value: "Engineering Manager", label: "Engineering Manager" },
  { value: "General Manager", label: "General Manager" },
  { value: "Hardware Engineer", label: "Hardware Engineer" },
  { value: "Member of Technical Staff", label: "Member of Technical Staff" },
  { value: "Owner/Partner", label: "Owner/Partner" },
  { value: "Retired", label: "Retired" },
  { value: "Scientific Manage", label: "Scientific Manager" },
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "V.P. Engineering/Director Engineering", label: "V.P. Engineering/Director Engineering" },
  { value: "V.P. Operations", label: "V.P. Operations" },
  { value: "Other Professional/Technical", label: "Other Professional/Technical" }
];

const employerTypeOptions = [
  { value: "Academia", label: "Academia" },
  { value: "Government", label: "Government" },
  { value: "Industry", label: "Industry" },
  { value: "Retired", label: "Retired" },
  { value: "Other", label: "Other" }
];

const ProfileFormComponent = () => {
  const [selectedNav, setSelectedNav] = useState("personalInfo");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [displayDate, setDisplayDate] = useState(""); // Stores dd/mm/yyyy for UI

  useEffect(() => {
    setCountries(Country.getAllCountries().map((c) => ({ value: c.isoCode, label: c.name })));
  }, []);


  return (
    <div className="layout">
      {/* Personal Information Formee */}
      <input
        name="nav"
        type="radio"
        className="nav profile-tab personalInfo-radio"
        id="personalInfo"
        checked={selectedNav === "personalInfo"}
        onChange={() => setSelectedNav("personalInfo")}
      />
      <div className="page personalInfo-page
      ">
        <div className="page-contents">
        <Formik
 initialValues={{
  name: "Likitha K M",
  emailId: "likitha.vedts@gmail.com",
  mobileNo: "8971728480",
  organization: "",
  dateOfBirth: "",
  gender: "",
  country: "",
  state: "",
  city: "",
  addressType: "Work",
  address1: "",
  address2: "",
  postalCode: "",
}}
  validationSchema={personalInfoValidationSchema}
  onSubmit={(values) => console.log("Personal Info Submitted:", values)}
  validateOnBlur={true}  
  validateOnChange={true} 
>
{({ values, setFieldValue, touched, errors }) => {
     // Convert yyyy-mm-dd -> dd/mm/yyyy for display
     const formatDisplayDate = (date) => {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    };

    // Convert dd/mm/yyyy -> yyyy-mm-dd for backend
    const parseInputDate = (date) => {
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
    };

        return (
    <Form style={{ width: "100%", maxWidth: "100%" }}>
     <div className="profile-content">
      <div className="row">
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text"  
                id="name" 
                name="name" 
                value="Likitha K M"
                className="form-control disabled-field" 
                placeholder="Name" 
                readOnly 
                disabled  
              />
              <label htmlFor="name">Name<span className="required-input">*</span></label>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text"  
                id="emailId" 
                name="emailId" 
                value="likitha.vedts@gmail.com"
                className="form-control disabled-field" 
                placeholder="emailId" 
                readOnly 
                disabled  
              />
              <label htmlFor="name">Email Id<span className="required-input">*</span></label>
            </div>
          </div>
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text"  
                id="mobileNo" 
                name="mobileNo" 
                value="8971728480"
                className="form-control disabled-field" 
                placeholder="mobileNo" 
                readOnly 
                disabled  
              />
              <label htmlFor="name">Mobile No<span className="required-input">*</span></label>
            </div>
          </div>
        </div>


        <div className="row">
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text" 
                id="organization" 
                name="organization" 
                className={`form-control ${touched.organization && errors.organization ? "is-invalid" : ""}`}
                placeholder="Organization Name" 
                maxLength={250} 
              />
              <label htmlFor="organization">Organization Name<span className="required-input">*</span></label>
              <ErrorMessage name="organization" component="div" className="invalid-feedback" />
            </div>
        </div>
  <div className="col-md-4 mb-3">
  <div className="form-floating">
            <input
                  type="text" //  Display as text initially
                  id="dateOfBirth"
                  className={`form-control w-100 ${touched.dateOfBirth && errors.dateOfBirth ? "is-invalid" : ""}`}
                  placeholder="Date of Birth"
                  value={displayDate} // Show dd/mm/yyyy format
                  onChange={(e) => setDisplayDate(e.target.value)} // Let user type
                  onBlur={(e) => {
                    if (displayDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                      setFieldValue("dateOfBirth", parseInputDate(displayDate)); // Convert to yyyy-mm-dd
                    }
                  }}
                  onFocus={(e) => {
                    e.target.type = "date"; // Show date picker on focus
                    e.target.value = values.dateOfBirth; // Set value to yyyy-mm-dd for native picker
                  }}
                  onChangeCapture={(e) => {
                    setFieldValue("dateOfBirth", e.target.value);
                    setDisplayDate(formatDisplayDate(e.target.value)); // Update display value
                  }}
                />
  <label htmlFor="dateOfBirth">Date of Birth<span className="required-input">*</span></label>
  <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
</div>
</div>
        <div className="col-md-4 mb-3">
        <SelectPicker
            options={genderOptions}
            value={genderOptions.find((opt) => opt.value === values.gender) || ""}
            handleChange={(selectedOption) => setFieldValue("gender", selectedOption?.value || "")}
            label="Gender"
            required={true}
            error={touched.gender && errors.gender ? errors.gender : ""}
       />
           <ErrorMessage name="gender" component="div" className="invalid-feedback" />
        </div>
        </div>

        <div className="row">
                  <div className="col-md-4 mb-3">
                    <SelectPicker
                      options={countries}
                      value={countries.find((c) => c.value === values.country) || ""}
                      handleChange={(selectedOption) => {
                        setFieldValue("country", selectedOption?.value || "");
                        setStates(State.getStatesOfCountry(selectedOption?.value).map((s) => ({ value: s.isoCode, label: s.name })));
                        setCities([]);
                        setFieldValue("state", "");
                        setFieldValue("city", "");
                      }}
                      label="Country/Region"
                      required={true}
                      error={touched.country && errors.country ? errors.country : ""}
                    />
                         <ErrorMessage name="country" component="div" className="invalid-feedback" />
                      
                  </div>
                  <div className="col-md-4 mb-3">
                    <SelectPicker
                      options={states}
                      value={states.find((s) => s.value === values.state) || ""}
                      handleChange={(selectedOption) => {
                        setFieldValue("state", selectedOption?.value || "");
                        setCities(City.getCitiesOfState(values.country, selectedOption?.value).map((c) => ({ value: c.name, label: c.name })));
                        setFieldValue("city", "");
                      }}
                      label="State/Province/Territory"
                      required={true}
                      error={touched.state && errors.state ? errors.state : ""}
                    />
                      <ErrorMessage name="state" component="div" className="invalid-feedback" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <SelectPicker
                      options={cities}
                      value={cities.find((c) => c.value === values.city) || ""}
                      handleChange={(selectedOption) => setFieldValue("city", selectedOption?.value || "")}
                      label="City/Locality"
                      required={true}
                      error={touched.city && errors.city ? errors.city : ""}
                    />
                      <ErrorMessage name="city" component="div" className="invalid-feedback" />
                  </div>
                </div>

  <div className="row my-2">
  <div className="col-md-12 mt-2 mb-3 justify-content-center">
    Address Type<span className="required-input">*</span>&nbsp;&nbsp;
    {[
      { value: "Home", label: "Home" },
      { value: "Work", label: "Work" },
      { value: "University_College", label: "University/College" },
    ].map((option) => (
      <div key={option.value} className="form-check form-check-inline">
        <Field
          type="radio"
          name="addressType"
          value={option.value}
          id={`address-type-${option.value}`}
          className="form-check-input addressTypeRadio"
        />
        <label
          htmlFor={`address-type-${option.value}`}
          className="form-check-label"
        >
          {option.label}
        </label>
      </div>
    ))}
    <ErrorMessage name="addressType" component="div" className="invalid-feedback" />
  </div>
</div>

       

        <div className="row">
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text" 
                id="address1" 
                name="address1" 
                className={`form-control ${touched.address1 && errors.address1 ? "is-invalid" : ""}`}
                placeholder="Address 1" 
                maxLength={250} 
              />
              <label htmlFor="address1">Address 1<span className="required-input">*</span></label>
              <ErrorMessage name="address1" component="div" className="invalid-feedback" />
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="text" 
                id="address2" 
                name="address2" 
                className={`form-control ${touched.address2 && errors.address2 ? "is-invalid" : ""}`}
                placeholder="Address 2" 
                maxLength={250} 
              />
              <label htmlFor="address2">Address 2</label>
              <ErrorMessage name="address2" component="div" className="invalid-feedback" />
            </div>
        </div>
        
        <div className="col-md-4 mb-3">
            <div className="form-floating">
              <Field 
                type="number" 
                id="postalCode" 
                name="postalCode" 
                className={`form-control ${touched.postalCode && errors.postalCode ? "is-invalid" : ""}`}
                placeholder="postal Code" 
                maxLength={250} 
              />
              <label htmlFor="postalCode">Postal Code<span className="required-input">*</span></label>
              <ErrorMessage name="postalCode" component="div" className="invalid-feedback" />
            </div>
          </div>

          </div>

        
 </div>
    <div className="btn-div">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    </Form>
 );
}}
</Formik>

        </div>
      </div>
      <label className="nav" htmlFor="personalInfo">
        <span>Personal</span>
      </label>
      

      {/* Professional Information Formee start*/}
      <input
        name="nav"
        type="radio"
        className="nav profile-tab professionalInfo-radio"
        id="about"
        checked={selectedNav === "about"}
        onChange={() => setSelectedNav("about")}
      />

      <div className="page about-page">
        <div className="page-contents">
        <Formik
            initialValues={{ 
              totalYearsOfExperience: "", 
              currentTechnology: "",
               title: "",
               employer: "",
               employerType: ""
              }}
            validationSchema={professionalInfoValidationSchema}
            onSubmit={(values) => console.log("Professional Info Submitted:", values)}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ values, touched, errors, setFieldValue }) => (
              <Form style={{ width: "100%", maxWidth: "100%" }}>
           <div className="profile-content">
                <div className="row">
                  <div className="col-md-4 mb-3">
                      <SelectPicker
                        options={totalYearsOptions}
                        value={totalYearsOptions.find((opt) => opt.value === values.totalYearsOfExperience) || ""}
                        handleChange={(selectedOption) => setFieldValue("totalYearsOfExperience", selectedOption?.value || "")}
                        label="Total years in profession"
                        required={true}
                        error={touched.totalYearsOfExperience && errors.totalYearsOfExperience ? errors.totalYearsOfExperience : ""}
                      />
                      <ErrorMessage name="totalYearsOfExperience" component="div" className="invalid-feedback" />
          
                  </div>
                  <div className="col-md-4 mb-3">
                      <SelectPicker
                        options={technologyOptions}
                        value={technologyOptions.find((opt) => opt.value === values.currentTechnology) || ""}
                        handleChange={(selectedOption) => setFieldValue("currentTechnology", selectedOption?.value || "")}
                        label="Current technology focus"
                        required={true}
                        error={touched.currentTechnology && errors.currentTechnology ? errors.currentTechnology : ""}
                      />
                      <ErrorMessage name="currentTechnology" component="div" className="invalid-feedback" />
                    </div>
                  <div className="col-md-4 mb-3">
                      <SelectPicker
                        options={titleOptions}
                        value={titleOptions.find((opt) => opt.value === values.title) || ""}
                        handleChange={(selectedOption) => setFieldValue("title", selectedOption?.value || "")}
                        label="Title"
                        required={true}
                        error={touched.title && errors.title ? errors.title : ""}
                      />
                      <ErrorMessage name="title" component="div" className="invalid-feedback" />
                    </div>
                </div>

                <div className="row">
                <div className="col-md-4 mb-3">
                <div className="form-floating">
              <Field 
                type="text" 
                id="employer" 
                name="employer" 
                className={`form-control ${touched.address1 && errors.address1 ? "is-invalid" : ""}`}
                placeholder="Employer" 
                maxLength={250} 
              />
              <label htmlFor="employer">Employer<span className="required-input">*</span></label>
              <ErrorMessage name="employer" component="div" className="invalid-feedback" />
            </div>
            </div>

            <div className="col-md-4 mb-3">
        <SelectPicker
            options={employerTypeOptions}
            value={employerTypeOptions.find((opt) => opt.value === values.employerType) || ""}
            handleChange={(selectedOption) => setFieldValue("employerType", selectedOption?.value || "")}
            label="Employer Type"
            required={true}
            error={touched.employerType && errors.employerType ? errors.employerType : ""}
       />
           <ErrorMessage name="employerType" component="div" className="invalid-feedback" />
        </div>


                </div>
      </div>
              
      <div className="btn-div">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>  
              </Form>
            )}
          </Formik>

     
        </div>
      </div>

      <label className="nav" htmlFor="about">
        <span>Professional</span>
      </label>
        {/* Professional Information Formee  end*/}

      {/* Education Information Formee  start*/}
      <input
        name="nav"
        type="radio"
        className="nav profile-tab educationalInfo-radio"
        id="contact"
        checked={selectedNav === "contact"}
        onChange={() => setSelectedNav("contact")}
      />
      <div className="page contact-page">
        <div className="page-contents">
       
        <Formik
            initialValues={{
               fieldOfStudy: "",
                degreeAwarded: ""
               }}
            validationSchema={educationInfoValidationSchema}
            onSubmit={(values) => console.log("Educational Info Submitted:", values)}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ values, touched, errors, setFieldValue }) => (
              <Form style={{ width: "100%", maxWidth: "100%" }}>
                   <div className="profile-content">
                    
                    <div className="row">
            {/* Graduation Month */}
            <div className="col-md-2 mb-3">
            <SelectPicker
                  options={graduationMonthOptions}
                  value={graduationMonthOptions.find((opt) => opt.value === values.graduationMonth) || ""}
                  handleChange={(selectedOption) => setFieldValue("graduationMonth", selectedOption?.value || "")}
                  label="Graduation Month"
                  required={true}
                  error={touched.graduationMonth && errors.graduationMonth ? errors.graduationMonth : ""}
                />
                <ErrorMessage name="fieldOfStudy" component="div" className="invalid-feedback" />
             </div>

              {/* Graduation Year */}
              <div className="col-md-2 mb-3">
              <SelectPicker
                     options={graduationYearOptions}
                     value={graduationYearOptions.find((opt) => opt.value === values.graduationYear) || ""}
                     handleChange={(selectedOption) => setFieldValue("graduationYear", selectedOption?.value || "")}
                     label="Graduation Year"
                      required={true}
                    error={touched.graduationYear && errors.graduationYear ? errors.graduationYear : ""}
                  />
                <ErrorMessage name="graduationYear" component="div" className="invalid-feedback" />
              </div>

              {/* Field of Study */}
              <div className="col-md-4 mb-3">
                <SelectPicker
                  options={fieldOfStudyOptions}
                  value={fieldOfStudyOptions.find((opt) => opt.value === values.fieldOfStudy) || ""}
                  handleChange={(selectedOption) => setFieldValue("fieldOfStudy", selectedOption?.value || "")}
                  label="Undergraduate field of study"
                  required={true}
                  error={touched.fieldOfStudy && errors.fieldOfStudy ? errors.fieldOfStudy : ""}
                />
                <ErrorMessage name="fieldOfStudy" component="div" className="invalid-feedback" />
              </div>

              {/* Degree Awarded */}
              <div className="col-md-4 mb-3">
                <SelectPicker
                  options={degreeAwardedOptions}
                  value={degreeAwardedOptions.find((opt) => opt.value === values.degreeAwarded) || ""}
                  handleChange={(selectedOption) => setFieldValue("degreeAwarded", selectedOption?.value || "")}
                  label="Degree Awarded"
                  required={true}
                  error={touched.degreeAwarded && errors.degreeAwarded ? errors.degreeAwarded : ""}
                />
                <ErrorMessage name="degreeAwarded" component="div" className="invalid-feedback" />
              </div>
                   </div>
                 </div>
                 <div className="btn-div">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div> 

                   </Form>
            )}

          </Formik>

     
  
       
  
       
        </div>
      </div>
      <label className="nav" htmlFor="contact">
        <span>Education</span>
      </label>
  {/* Education Information Formee  End*/}


    </div>
  );
};

export default ProfileFormComponent;


