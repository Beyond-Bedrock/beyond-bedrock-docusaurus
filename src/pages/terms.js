import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Read our Terms of Service to understand the rules and guidelines for using Beyond Bedrock's website and services."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Terms of Service</Heading>
        <p>
          Welcome to Beyond Bedrock. By accessing our website, you agree to comply
          with and be bound by the following terms and conditions of use.
        </p>

        <Heading as="h2">Acceptance of Terms</Heading>
        <p>
          By accessing and using Beyond Bedrock, you agree to be bound by these
          Terms of Service and all applicable laws and regulations, including our
          guidelines on content aligned with Islamic values and account security
          responsibilities. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site.
        </p>

        <Heading as="h2">User Content</Heading>
        <p>
          Users may submit content to Beyond Bedrock, including but not limited to
          add-ons, resource packs, Guides, and maps for Minecraft Bedrock Edition.
          By submitting content, you affirm that:
        </p>
        <ul>
          <li>You own all rights to the content or have authorization to share it</li>
          <li>
            The content does not infringe upon the intellectual property rights of
            any third party
          </li>
          <li>
            The content complies with Minecraft's End User License Agreement and
            Usage Guidelines
          </li>
        </ul>

        <Heading as="h2">Content Moderation</Heading>
        <p>
          Beyond Bedrock reserves the right to review, modify, or remove any
          content that violates these terms or is otherwise objectionable, at our
          sole discretion.
        </p>

        <Heading as="h2">Content and Islamic Values</Heading>
        <p>
          Beyond Bedrock is committed to maintaining a respectful and value-aligned
          environment. As such, users are strictly prohibited from posting or
          sharing any content that contradicts the principles and teachings of Islam.
        </p>
        <ul>
          <li>
            Content must not include or promote anything considered haram or
            offensive in Islam
          </li>
          <li>
            Blasphemous, irreligious, or morally inappropriate material will not be
            tolerated
          </li>
          <li>
            We reserve the right to remove any content that violates this principle,
            with or without notice
          </li>
        </ul>
        <p>
          This rule is part of our mission to foster a platform that respects
          faith-based values while remaining creative and community-driven.
        </p>

        <Heading as="h2">Account Security</Heading>
        <p>
          Beyond Bedrock uses Discord OAuth for account authentication. By logging
          in with your Discord account, you acknowledge that your access to Beyond
          Bedrock is tied to your Discord credentials.
        </p>
        <p>
          You are solely responsible for maintaining the security of your Discord
          account. If your Discord account is compromised, your access to Beyond
          Bedrock may also be at risk.
        </p>
        <ul>
          <li>Never share your Discord credentials or tokens with anyone</li>
          <li>Enable two-factor authentication (2FA) on your Discord account</li>
          <li>
            Regularly review your authorized Discord apps and revoke access if
            necessary
          </li>
        </ul>
        <p>
          Beyond Bedrock is not responsible for unauthorized access resulting from
          compromised Discord accounts. If you suspect your account has been
          accessed without your permission, please contact us immediately.
        </p>

        <Heading as="h2">User Conduct</Heading>
        <p>
          Users are expected to interact with the Beyond Bedrock community in a
          respectful and lawful manner. Harassment, hate speech, spamming, or any
          other disruptive behavior is strictly prohibited.
        </p>
        <p>
          We reserve the right to suspend or ban any account that violates these
          conduct guidelines.
        </p>

        <Heading as="h2">Community Interactions</Heading>
        <p>
          Any user-generated comments or interactions, whether on-site or linked
          through Discord, must comply with our content rules and Islamic values.
          Offensive or inflammatory remarks will not be tolerated and may result in
          account action.
        </p>

        <Heading as="h2">Third-Party Services</Heading>
        <p>
          Beyond Bedrock may contain links to third-party websites or services. We
          do not control or endorse these external services and are not responsible
          for their content, policies, or practices.
        </p>

        <Heading as="h2">Account Termination</Heading>
        <p>
          We reserve the right to suspend or terminate any user account at our sole
          discretion, especially if the user violates our terms, values, or
          community standards.
        </p>

        <Heading as="h2">Intellectual Property</Heading>
        <p>
          The Beyond Bedrock name, logo, and website design are the property of
          Beyond Bedrock. Minecraft is a registered trademark of Mojang AB. Beyond
          Bedrock is not affiliated with Mojang AB.
        </p>

        <Heading as="h2">Limitations of Liability</Heading>
        <p>
          Beyond Bedrock shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of your access to or use
          of the site.
        </p>

        <Heading as="h2">Modifications to Terms</Heading>
        <p>
          Beyond Bedrock reserves the right to modify these terms at any time.
          Your continued use of the website following any changes constitutes
          acceptance of those changes.
        </p>

        <Heading as="h2">Contact Us</Heading>
        <p>
          If you have questions about these Terms of Service or wish to report a
          violation, please contact us at support@beyondbedrock.org.
        </p>

        <p>Last Updated: 29 June 2025</p>
      </main>
    </Layout>
  );
}
