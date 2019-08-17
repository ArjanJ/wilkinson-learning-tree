import React from "react";
import { Box } from "rebass";

import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";
import { PageHeading } from "../PageHeading/";
import { PageSubheading } from "../PageSubheading/";

export const Register = () => (
  <Box pt={["60px", "135px"]}>
    <Section>
      <Wrapper>
        <Box mb="45px">
          <PageHeading textAlign="center">Register Now</PageHeading>
        </Box>
        <PageSubheading>Current Openings</PageSubheading>
        <Box mb="30px">
          <p>
            Please contact me for information at{" "}
            <strong>
              <a href="tel:6045372396">(604) 537-2396</a>
            </strong>{" "}
            or{" "}
            <strong>
              <a href="mailto:christine@mapleridgedaycare.com">
                christine@mapleridgedaycare.com
              </a>
            </strong>
          </p>
        </Box>
        <Box mb="30px">
          <p>
            Feel free to call or email me to discuss rates and to make an
            appointment to look at my daycare.
          </p>
        </Box>
        <Box mb="30px">
          <p>
            Monthly fees include all sick days, statutory holidays, and vacation
            time, these are paid days. Fees are based on booked days not
            attendance. Refunds and credits will not be given for days where
            your child does not attend.
          </p>
        </Box>
        <PageSubheading>Registration Fee</PageSubheading>
        <p>
          For first time applicants, there is a $100 non-refundable registration
          fee, upon acceptance of the child into the daycare. Please provide a
          separate cheque or cash payment for this. A receipt will be issued.
        </p>
      </Wrapper>
    </Section>
  </Box>
);
