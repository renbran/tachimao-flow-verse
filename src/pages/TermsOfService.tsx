import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "November 18, 2025";

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Terms of Service
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
                Welcome to Scholarix Global. By accessing or using our website and services, you agree to be bound by these
                Terms of Service. Please read them carefully before using our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Scholarix Global's website, services, or products, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Scholarix Global provides data analytics and enterprise AI consulting services, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enterprise data analytics and business intelligence</li>
                  <li>AI-driven automation solutions</li>
                  <li>Predictive analytics and forecasting</li>
                  <li>Data strategy consulting</li>
                  <li>Custom AI model development</li>
                  <li>Digital transformation consulting</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without
                  prior notice.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">User Responsibilities</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Not attempt to interfere with or disrupt our services</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not reproduce, duplicate, copy, or exploit any portion of our services without permission</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics,
                  logos, icons, images, audio clips, video clips, data compilations, and software, are the exclusive
                  property of Scholarix Global or its licensors and are protected by international copyright, trademark, patent,
                  trade secret, and other intellectual property laws.
                </p>
                <p>
                  You may not modify, reproduce, distribute, create derivative works from, publicly display, publicly
                  perform, republish, download, store, or transmit any material from our services without our prior
                  written consent.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Payment and Billing</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you purchase services from Scholarix Global, you agree to provide accurate and complete payment information.
                  You authorize us to charge your payment method for all fees incurred.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>Prices are subject to change with 30 days' notice</li>
                  <li>Failure to pay may result in suspension or termination of services</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </div>
            </section>

            {/* Warranties and Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Warranties and Disclaimers</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express
                  or implied, including but not limited to implied warranties of merchantability, fitness for a
                  particular purpose, or non-infringement.
                </p>
                <p>
                  We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from using our services will be accurate or reliable</li>
                  <li>Any errors in our services will be corrected</li>
                  <li>Our services will meet your specific requirements</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Scholarix Global shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers and/or personal information</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, trojan horses, or the like transmitted through our services</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred from use of content</li>
                </ul>
                <p className="mt-4">
                  Our total liability shall not exceed the amount you paid to us in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Scholarix Global and its officers, directors, employees,
                contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising
                out of or relating to your violation of these Terms or your use of our services.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We reserve the right to terminate or suspend your access to our services immediately, without prior
                  notice or liability, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Breach of these Terms of Service</li>
                  <li>Non-payment of fees</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Request by law enforcement or government agencies</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your right to use our services will immediately cease. All provisions of these
                  Terms that by their nature should survive termination shall survive.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law and Dispute Resolution</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates,
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services shall be resolved through binding
                  arbitration in Dubai, United Arab Emirates, except that either party may seek injunctive relief in
                  court for infringement of intellectual property rights.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. We will
                provide notice of any material changes by posting the new Terms on this page and updating the "Last
                updated" date. Your continued use of our services after any changes constitutes acceptance of the
                new Terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions
                shall continue in full force and effect. The invalid or unenforceable provision shall be replaced
                with a valid provision that most closely matches the intent of the original provision.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service, together with our Privacy Policy, constitute the entire agreement between
                you and Scholarix Global regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Contact */}
            <section className="glass-card p-6 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:legal@scholarixglobal.com" className="text-primary hover:text-accent">legal@scholarixglobal.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+971501234567" className="text-primary hover:text-accent">+971 50 123 4567</a></p>
                <p><strong>Address:</strong> Dubai, United Arab Emirates</p>
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

export default TermsOfService;
