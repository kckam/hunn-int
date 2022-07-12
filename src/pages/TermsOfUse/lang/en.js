import { Link } from "react-router-dom";

let data = [
  {
    header: "Application of Terms of Use",
    body: (
      <>
        The Hunn Website (the “Website) is operated by OMS TRADE (“OMS”).
        <br />
        <br />
        These Terms of Use of the Hunn Website (the“Terms”) provide for the
        fundamental matters regarding the use of various services provided by
        the Website to all users (the “Services”).
        <br />
        <br />
        In the case that separate terms are established with regard to
        individual services offered through the Website, the Terms, as well as,
        any other separate terms and conditions shall apply to the users of the
        relevant services.
      </>
    ),
  },
  {
    header: "Definition of Users",
    body: (
      <>
        For the purpose of these Terms, any and all persons who use the Website
        and/or the Services, regardless of whether they are identifiable by OMS,
        are defined as the users (the “Users”). These Terms apply to all Users
        of the Website.
      </>
    ),
  },
  {
    header: "Age Limit of Users",
    body: <>This Website is strictly for use by adults aged 18 or over only.</>,
  },
  {
    header: "Agreement to Terms of Use",
    body: (
      <>
        All Users who actually use the Website and Services will be deemed to
        have agreed to these Terms.
        <br />
        <br />
        When you use this Website, you agree to the terms and conditions that
        follow and to the terms and conditions of our Privacy Notice . If you do
        not agree to these terms and conditions, you should immediately cease
        use of this site. This site is offered to you conditional on your
        acceptance without modification of the terms, conditions, and notices
        contained herein.
      </>
    ),
  },
  {
    header: "Equipment Necessary to Use Services",
    body: (
      <>
        Any terminal equipment, communication devices, software and other
        facilities necessary to use the Services must be prepared by the Users.
      </>
    ),
  },
  {
    header: "Notification and Change of Terms",
    body: (
      <>
        OMS reserves the right to modify all or part of these Terms in its sole
        discretion without prior notice to the Users. In such case, OMS shall
        give notice of such modification at the Website, and the modification
        shall take effect at the time of such notice on the Website.
      </>
    ),
  },
  {
    header: "Prohibited Matters",
    body: (
      <>
        In using the Website, the Users are prohibited by OMS from conducting
        the following acts (including acts or preparatory acts which may trigger
        the following acts). Furthermore, the relevance of the following and
        their consideration shall be made at the discretion of OMS (similar to
        other acts and matters requiring such consideration by OMS contained in
        these Terms).
        <ol>
          <li>
            Any act that defames or slanders, or may defame or slander, other
            Users, third parties and/or OMS (including OMS’s affiliated
            companies);
          </li>

          <li>
            Any act that infringes or may infringe the property rights or
            privacy of other Users, third parties and/or OMS (including OMS’s
            affiliated companies);
          </li>
          <li>
            Any act that infringes or may infringe the intellectual property
            rights (including, but not limited to, copyrights, design rights,
            patent rights, utility model rights, trademark rights and portrait
            rights) of other Users, third parties and/or OMS (including OMS’s
            affiliated companies);
          </li>
          <li>Any act to transmit or write harmful computer programs;</li>
          <li>
            Any act that offends or may offend public order and morals or that
            constitutes or may constitute criminal behaviour;
          </li>
          <li>
            Any act to use or to be prepared to use the Services for commercial
            purposes;
          </li>
          <li>
            An election campaign or any similar act, or any other act that
            relates to politics and/or religions;
          </li>
          <li>Any other act that hinders operation of the Services; or</li>
          <li>Any other acts considered by OMS to be inappropriate.</li>
        </ol>
      </>
    ),
  },
  {
    header:
      "Responsibility regarding Use of Information provided by the Website",
    body: (
      <>
        OMS will make no guarantee that the information made available on this
        Website is fully accurate, complete or current. The material on this
        website is provided for general information only. All Users will make
        use of the Website on their own responsibility and judgment, and OMS
        will not be held responsible for any result of using or relying on such
        information.
      </>
    ),
  },
  {
    header: "Copyright and other Intellectual Property Rights",
    body: (
      <>
        <ol>
          <li>
            Any rights relating to all content on the Website belongs to or is
            exercised by OMS (or its affiliated companies) under license and
            other legitimate title, and no part of the Website may be used for
            any purpose other than personal use, redistributed to the public, or
            used or reproduced by the Users without permission, within or
            outside of the network.
          </li>
          <li>
            All trademarks and service marks appearing on the Website are owned,
            or used under license and other legitimate title by OMS or its
            affiliated companies, and the Users are prohibited from using any
            such trademarks and service marks without permission.
          </li>
          <li>
            Any copyright or other intellectual property rights arising from or
            in connection with information or comments provided by the Users
            shall be transferred and deemed assigned from the Users to OMS
            without charge, and the Users shall not exercise the moral right of
            author or any other similar rights whatsoever.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Change, Addition and Termination of Services",
    body: (
      <>
        <ol>
          <li>
            In any of the following events, OMS may terminate or temporarily
            suspend the provision of all or part of the Services without giving
            prior notice to the Users:
            <ol type="a">
              <li>
                In the event of regular or urgent maintenance of the systems
                that provide the Services;
              </li>
              <li>
                In the event of a failure of the systems that provide the
                Services;
              </li>
              <li>
                In the event of a power outage, fire, earthquake or any other
                force majeure events that make provision of the Services
                difficult; or
              </li>
              <li>
                In the event that there are other reasonable grounds in respect
                of the operation or technology of the Services.
              </li>
            </ol>
          </li>

          <li>
            OMS may make a change or addition to or terminate all or part of the
            Services without prior notice to the Users.
          </li>
          <li>
            OMS will not be held liable for any detriment or damage to the Users
            as a result of any of the preceding actions.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Websites of Third Parties",
    body: (
      <>
        OMS will not be held responsible or be liable to compensate for any
        damage arising from or in connection with the use of other websites
        managed or operated by third parties that are linked from the Website.
      </>
    ),
  },
  {
    header: "Handling of Personal Information",
    body: (
      <>
        <ol>
          <li>
            OMS does not, as a general rule, require Users to provide any
            personal information, such as addresses or names, which could be
            used to identify the User (collectively, “Personal Information”) in
            order to access and view the Website.
          </li>

          <li>
            Users may, regardless of the aforementioned, be required to register
            Personal Information in cases limited to use of the following
            services on the Website, which include services requiring personal
            authentication. These services may be used free of charge; however,
            the costs associated with accessing the Website, such as
            communication and Internet service provider fees, will be borne by
            the User:-
            <ol type="a">
              <li>
                When the User wishes to receive email communications from OMS;
              </li>
              <li>
                When the User applies for announcements for events, etc. on the
                Website;
              </li>
              <li>When the User makes an inquiry to OMS; or</li>
              <li>
                When the User requests information materials, etc., from OMS.
              </li>
            </ol>
          </li>

          <li>
            OMS will appropriately manage all Personal Information obtained from
            the Users in accordance with its Privacy Notice.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Indemnity and Compensation for Damages",
    body: (
      <>
        <ol>
          <li>
            If any User violates these Terms or inflicts damage on OMS by
            fraudulent acts, OMS may claim reasonable compensation against such
            User. Any User who, by using the Services, inflicts damage on third
            parties shall settle such damage on their own responsibility.
          </li>
          <li>
            Unless otherwise provided herein, OMS will not be held responsible
            to the Users or third parties for any failure or breakdown of the
            systems that provide the Services, any intrusion to the systems run
            by third parties and any commercial disputes for any reason
            whatsoever.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Website Security",
    body: (
      <>
        The Website makes use of the following highly secure technologies, and
        protects the Personal Information of Users by maintaining a high level
        of security:.
        <ol>
          <li>Prevention of unauthorized access with a firewall;</li>
          <li>
            Prevention of unauthorized access through periodic analysis of
            access logs and an intrusion detection system; and/or
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Use of Cookies",
    body: (
      <>
        <ol>
          <li>
            OMS uses cookies in certain content of the Website for the following
            purposes set out below. The function of a cookie is to allow a
            server to store information on the Users' computers, on what they
            have accessed when using the Website, and information collected
            through the use of such cookies does not include any “personally
            identifying information” such as e-mail addresses or full names.
          </li>
          <ol type="a">
            <li>
              For temporarily storing information necessary for the Users to
              access the Website comfortably in cases where the Website contains
              an application which extends across several pages;
            </li>
            <li>
              For the purpose of referring to the Users' stored registration
              information when the Users are logged into the authentication
              service, in order to be able to provide each User with customized
              services;
            </li>
            <li>
              For analyzing, or for companies to which OMS entrusts its survey
              analysis activities to analyze, the Users' access trends on the
              Website in order to provide better Services;
            </li>
            <li>
              For the purpose of displaying the most appropriate advertising on
              the websites of other companies, based on what the User is
              interested in and their usage patterns on the Website; or
            </li>
            <li>
              For the purpose of prompting Users to re-enter (re-authenticate)
              their passwords after a certain period of time has elapsed since
              the page was last accessed, in order to maintain security in cases
              of use of the authentication service
            </li>
          </ol>
          In addition, OMS may save and refer to the Website's cookies via the
          websites of contractor companies to which OMS has entrusted
          advertising-related work.
          <li>
            In order for Users to use the Services appropriately, they must
            consent to this Article 15 and allow cookies. Users may set their
            browser to reject cookies; however, it is assumed that they are
            aware and consent in advance that, in doing so, some parts may cease
            to function appropriately and certain content may not be available.
          </li>
          <li>
            On the Website, technology known as “web beacons ” shall be used in
            order to obtain statistics on the usage of the Services by Users. No
            Personal Information of Users is collected by web beacons.
            Furthermore, Users can disable the collection of information by web
            beacons by setting their computers to reject cookies.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: "Governing Law and Jurisdiction",
    body: (
      <>
        Any interpretation and application of the Website and these Terms shall
        be governed by the laws of the Federation of Malaysia. Unless otherwise
        provided, any and all disputes arising from or in connection with the
        Website shall be subject to the exclusive jurisdiction of the courts of
        the Federation of Malaysia.
      </>
    ),
  },
];

export default data;
