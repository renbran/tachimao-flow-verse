import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "November 18, 2025";

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 lg:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tachimao, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Fill out contact forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Register for our services</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="mt-2">
                    This may include: name, email address, phone number, company name, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Automated Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring URLs</li>
                    <li>Pages viewed and time spent on pages</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, marketing communications, and promotional materials (with your consent)</li>
                  <li>Improve and personalize your experience</li>
                  <li>Analyze usage patterns and optimize our website</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method
                of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Protection:</strong> To protect the rights, property, or safety of Tachimao, our users, or others</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing of your information</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@tachimao.com" className="text-primary hover:text-accent underline">
                    privacy@tachimao.com
                  </a>
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact */}
            <section className="glass-card p-6 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:privacy@tachimao.com" className="text-primary hover:text-accent">privacy@tachimao.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+15551234567" className="text-primary hover:text-accent">+1 (555) 123-4567</a></p>
                <p><strong>Address:</strong> San Francisco, CA</p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/" className="text-primary hover:text-accent underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
