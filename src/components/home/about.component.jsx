import React from "react";
import * as Yup from "yup";
import about from "../../assets/images/smart5.png";



const AboutUsComponent = () => {
  
    return (
        <>

    <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 order-2 order-lg-1"> <img src={about} alt="SMART Committee" className="img-fluid rounded" /></div>

            <div className="col-lg-6 mb-4 order-2 order-lg-1">
  <h2
    style={{
      // fontSize: "28px",
      // fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    About SMART
  </h2>
  {/* <p
    style={{
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "15px",
      textAlign: "center"
    }}
  >
   
  </p> */}

  <h3
    style={{
      fontSize: "16px",
      fontWeight: "500",
      color: "#444",
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "10px",
      textAlign: "left",
    }}
  >
    Aims and Objectives of Society for Microwaves, Antennas and Radar Technologies(SMART) :
  </h3>
  <ul style={{ paddingLeft: "20px" }}>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",

      }}
    >
      Promote education, training, and engineering in Microwaves, Antennas, and
      Radar Technologies.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Organize conferences, symposiums, and exhibitions to showcase related
      technologies and advancements.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Publish reports, research papers, and expert insights on the field.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Encourage research and promote the development of innovative technologies
      in Microwaves, Antennas, and Radar Technologies.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Support invention and research by providing resources like books,
      equipment, and funding.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Train students to become self-reliant citizens and support institutions
      with similar objectives.
    </li>
    <li
      style={{
        fontSize: "16px",
        lineHeight: "1.6",
        // color: "#555",
        marginBottom: "10px",
        textAlign: "left",
      }}
    >
      Establish research and development centers in science, technology,
      medicine, industry, and manufacturing.
    </li>
  </ul>
</div>


            </div>
          </div>

        
           

       



       </>
  )
}
export default AboutUsComponent;

