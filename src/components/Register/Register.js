import React from "react";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";
import { PageHeading } from "../PageHeading/";
import { PageSubheading } from "../PageSubheading/";

export const Register = () => (
  <RegisterContent>
    <Section>
      <Wrapper>
        <HeadingWrapper>
          <PageHeading textAlign="center">Register Now</PageHeading>
        </HeadingWrapper>
        <PageSubheading>Current Openings</PageSubheading>
        <Copy>
          <p>
            Please contact me for information at{" "}
            <strong>
              <a href="tel:6045372396">(604) 537-2396</a>
            </strong>{" "}
            or{" "}
            <strong>
              <a href="mailto:christine@wilkinsonlearningtree.com">
                christine@wilkinsonlearningtree.com
              </a>
            </strong>
          </p>
        </Copy>
        <Copy>
          <p>
            Feel free to call or email me to discuss rates and to make an
            appointment to look at my daycare.
          </p>
        </Copy>
        <Copy>
          <p>
            Monthly fees include all sick days, statutory holidays, and vacation
            time, these are paid days. Fees are based on booked days not
            attendance. Refunds and credits will not be given for days where
            your child does not attend.
          </p>
        </Copy>
        <PageSubheading>Registration Fee</PageSubheading>
        <p>
          For first time applicants, there is a $100 non-refundable registration
          fee, upon acceptance of the child into the daycare. Please provide a
          separate cheque or cash payment for this. A receipt will be issued.
        </p>
      </Wrapper>
    </Section>
  </RegisterContent>
);

const RegisterContent = styled.div`
  padding-top: 60px;

  @media ${mq.MOBILE} {
    padding-top: 135px;
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 45px;
`;

const Copy = styled.div`
  margin-bottom: 30px;
`;
