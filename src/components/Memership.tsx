import React from "react";
import MembershipHero from "./MembershipHero";
import Benefits from "./Benefits";
import BenefitsInv from "./Benefits-Inverted";
import MembershipLevels from "./Membership-Levels";
function Membership() {
  return (
    <div>
      <MembershipHero />
      <Benefits />
      <BenefitsInv />
      <MembershipLevels />
    </div>
  );
}

export default Membership;
