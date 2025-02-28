import { useEffect, useState } from "react";
import "./smartDashboard.css";
import HeaderComponent from "components/header/header";
import ProfileFormComponent from "components/profile/profile.membership.component";
import SubscriptionFormComponent from "components/subscription/subscription.membership.component"


const SmartDashboardComponent = () => {
  const [activeTab, setActiveTab] = useState("v-pills-profile");

  return (
    <>
      <HeaderComponent />

      <section id="fixed-sub-nav" className="fade-in vh-100">
        <section id="dashboard" className="py-4 header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 dashboard-smart-side-tab">
                <div
                  className="nav flex-column nav-pills nav-pills-custom"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a className={`nav-link mb-3 px-2 py-2 shadow ${
                      activeTab === "v-pills-profile" ? "active" : ""
                    }`}
                    id="v-pills-profile-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-profile")}
                  >
                    {/* <i className="fa fa-user-circle-o mr-2"></i>&nbsp; */}
                    <span className="font-weight-bold small text-uppercase">
                      Profile
                    </span>
                  </a>

                  <a
                    className={`nav-link mb-3 px-2 py-2  shadow ${
                      activeTab === "v-pills-subscription" ? "active" : ""
                    }`}
                    id="v-pills-subscription-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-subscription")}
                  >
                    {/* <i className="fa fa-calendar-minus-o mr-2"></i>&nbsp; */}
                    <span className="font-weight-bold small text-uppercase">
                      Subscription
                    </span>
                  </a>

                  {/* <a
                    className={`nav-link mb-3 px-2 py-2  shadow ${
                      activeTab === "v-pills-cart" ? "active" : ""
                    }`}
                    id="v-pills-cart-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-cart")}
                  >
                    <span className="font-weight-bold small text-uppercase">
                      Cart
                    </span>
                  </a> */}

                  {/* <a
                    className={`nav-link mb-3 px-2 py-2  shadow ${
                      activeTab === "v-pills-payment" ? "active" : ""
                    }`}
                    id="v-pills-payment-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-payment")}
                  >
                    <span className="font-weight-bold small text-uppercase">
                      Payment
                    </span>
                  </a> */}
                </div>
              </div>

              <div className="col-md-10 dashboard-smart-tab-content">
                <div className="tab-content " id="v-pills-tabContent">
   
              {/* PROFILE TAB START */}
                  <div
                    className={`tab-pane fade shadow rounded  dashboard-tab ${
                      activeTab === "v-pills-profile" ? "show active" : ""
                    }`}
                    id="v-pills-profile"
                    role="tabpanel"
                    style={{paddingTop: '0px!important'}}
                  >
                  
                    <ProfileFormComponent/>
                  </div>
               {/* PROFILE TAB END */}


                  <div
                    className={`tab-pane fade shadow rounded dashboard-tab ${
                      activeTab === "v-pills-subscription" ? "show active" : ""
                    }`}
                    id="v-pills-subscription"
                    role="tabpanel"
                  >
                     <SubscriptionFormComponent/>
                  </div>

                  {/* <div
                    className={`tab-pane fade shadow rounded   dashboard-tab ${
                      activeTab === "v-pills-cart" ? "show active" : ""
                    }`}
                    id="v-pills-cart"
                    role="tabpanel"
                  >
                    <h4 className="font-italic mb-4">Reviews</h4>
                    <p className="font-italic text-muted mb-2">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div> */}

                  {/* <div
                    className={`tab-pane fade shadow rounded   dashboard-tab ${
                      activeTab === "v-pills-payment" ? "show active" : ""
                    }`}
                    id="v-pills-payment"
                    role="tabpanel"
                  >
                    <h4 className="font-italic mb-4">Payment</h4>
                    <p className="font-italic text-muted mb-2">
                     
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SmartDashboardComponent;
