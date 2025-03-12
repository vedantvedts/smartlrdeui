import { useEffect, useState } from "react";
import "./smartDashboard.css";
import HeaderComponent from "components/header/header";
import ProfileFormComponent from "components/profile/profile.membership.component";
import SubscriptionFormComponent from "components/subscription/subscription.membership.component";
import TariffFormComponent from "components/admin/membershipFee.master.component";
import MembershipFormComponent from "components/membership/membership.form.component";

const SmartDashboardComponent = () => {
  const [activeTab, setActiveTab] = useState("v-pills-profile");

  return (
    <>
      <HeaderComponent />
      <div className="smart-main-content">
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
                      activeTab === "v-pills-membership" ? "active" : ""
                    }`}
                    id="v-pills-membership-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-membership")}
                  >
                    <span className="font-weight-bold small text-uppercase">
                    Membership
                    </span>
                  </a>  */}

                   <a
                    className={`nav-link mb-3 px-2 py-2  shadow ${
                      activeTab === "v-pills-membership-fee" ? "active" : ""
                    }`}
                    id="v-pills-membership-fee-tab"
                    role="tab"
                    onClick={() => setActiveTab("v-pills-membership-fee")}
                  >
                    <span className="font-weight-bold small text-uppercase">
                    Membership Fee
                    </span>
                  </a>  
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
                      activeTab === "v-pills-membership" ? "show active" : ""
                    }`}
                    id="v-pills-membership"
                    role="tabpanel"
                  >
                   <MembershipFormComponent/>
                  </div>  */}

                   <div
                    className={`tab-pane fade shadow rounded   dashboard-tab ${
                      activeTab === "v-pills-membership-fee" ? "show active" : ""
                    }`}
                    id="v-pills-membership-fee"
                    role="tabpanel"
                  >
                     <TariffFormComponent/>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      </div>
    </>
  );
};

export default SmartDashboardComponent;
