import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Learn about how Beyond Bedrock collects, uses, and protects your personal information."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Privacy Policy</Heading>

        <p>Last updated: July 02, 2025</p>
        <p>
          At Beyond Bedrock, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website. By using our Service, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        <Heading as="h2">Information We Collect</Heading>
        <p>We may collect information about you in various ways, including:</p>
        <ul>
          <li>
            <strong>Personal Data:</strong> When you register an account, we
            collect your username, email address, and Discord information through
            OAuth authentication.
          </li>
          <li>
            <strong>User Content:</strong> Any content you upload to our platform,
            including posts, comments, and cover images.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            our website, including your IP address, browser type, pages visited,
            time spent on pages, and other diagnostic data.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use various
            types of cookies:
            <ul>
              <li>
                <strong>Necessary Cookies:</strong> Essential for the website to
                function properly
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how users
                interact with our site
              </li>
            </ul>
          </li>
        </ul>

        <Heading as="h2">How We Use Your Information</Heading>
        <p>We may use the information we collect from you for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To monitor usage of our service</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <Heading as="h2">Disclosure of Your Information</Heading>
        <p>We may share your information with third parties in certain situations, including:</p>
        <ul>
          <li>With service providers who help us operate our website</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights, privacy, safety, or property</li>
        </ul>

        <Heading as="h2">Third-Party Services</Heading>
        <p>We use several third-party services that may collect and process your data:</p>
        <ul>
          <li><strong>Cloudinary:</strong> For hosting and processing user-uploaded images and cover photos</li>
          <li><strong>Discord OAuth:</strong> For user authentication and profile information</li>
          <li><strong>Analytics Services:</strong> To understand how users interact with our platform</li>
        </ul>
        <p>
          These services have their own privacy policies, and we encourage you to
          review them. We are not responsible for the practices of third-party
          services.
        </p>

        <Heading as="h2">Data Security and Retention</Heading>
        <p>
          We implement appropriate security measures to protect your personal
          information, including:
        </p>
        <ul>
          <li>Secure server infrastructure</li>
          <li>Data encryption in transit</li>
          <li>Access controls and authentication</li>
          <li>Regular security assessments</li>
        </ul>
        <p>
          We retain your personal data only for as long as necessary to provide our
          services and for legitimate business purposes. When we no longer need to
          use your information, we will securely delete or anonymize it.
        </p>
        <p>
          Please note that no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <Heading as="h2">Your Rights</Heading>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Update or correct your information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data</li>
          <li><strong>Objection:</strong> Object to certain processing activities</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
        </ul>
        <p>To exercise these rights, please contact us at contact@beyondbedrock.org.</p>

        <Heading as="h2">Consent to Processing</Heading>
        <p>
          By using our services or providing us with your personal data, you
          consent to the collection, use, and disclosure of your information in
          accordance with this Privacy Policy.
        </p>

        <Heading as="h2">Children's Privacy</Heading>
        <p>
          Beyond Bedrock does not knowingly collect personal information from
          children under the age of 13. If you are a parent or guardian and
          believe your child has provided us with personal information, please
          contact us to request deletion.
        </p>

        <Heading as="h2">Changes to This Privacy Policy</Heading>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date at the top of this policy. We may also
          notify you via email or through our Service prior to the change becoming
          effective.
        </p>
        <p>
          Your continued use of our Service after any modifications to this
          Privacy Policy constitutes your acceptance of the updated policy.
        </p>

        <Heading as="h2">Business Transfers</Heading>
        <p>
          In the event that Beyond Bedrock is involved in a merger, acquisition,
          or sale of assets, your personal information may be transferred. We will
          provide notice before your personal information is transferred and
          becomes subject to a different privacy policy.
        </p>

        <Heading as="h2">Contact Us</Heading>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise
          your privacy rights, please contact us at: contact@beyondbedrock.org.
        </p>

        <p>Last Updated: July 02, 2025</p>
      </main>
    </Layout>
  );
}
