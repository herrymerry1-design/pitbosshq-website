import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Logo({ size = "default" }: { size?: "small" | "default" }) {
  const spadeW = size === "small" ? 16 : 28;
  const spadeH = size === "small" ? 20 : 32;
  const textClass = size === "small" ? "text-[13px] font-bold tracking-[1px]" : "text-lg font-black tracking-[2px]";
  const hqClass = size === "small" ? "font-normal text-white/30 text-[11px] ml-[3px] tracking-[3px]" : "font-normal text-white/40 text-sm ml-1 tracking-[3px]";
  return (
    <div className="flex items-center gap-2.5">
      <svg width={spadeW} height={spadeH} viewBox="0 0 44 50" fill="none">
        <path d="M22 2 C22 2 42 20 42 30 C42 38 36 42 30 42 C26 42 24 40 22 37 C20 40 18 42 14 42 C8 42 2 38 2 30 C2 20 22 2 22 2Z" fill="#e53e3e" />
        <rect x="19" y="38" width="6" height="10" rx="1" fill="#e53e3e" />
      </svg>
      <span className={textClass}>
        PIT<span className="text-[#e53e3e]">BOSS</span>
        <span className={hqClass}>HQ</span>
      </span>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <Link href="/"><Logo /></Link>
          <Link href="/" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white/80 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </nav>

      <article className="max-w-[780px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-14 pb-10 border-b border-white/[0.06]">
          <p className="text-[11px] text-[#e53e3e] tracking-[2px] font-medium mb-4">LEGAL</p>
          <h1 className="text-4xl md:text-[48px] font-black leading-[1.08] mb-6">Privacy Policy</h1>
          <p className="text-sm text-white/40">Last updated: 24 April 2026</p>
        </header>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <p className="mb-4">
              This Privacy Policy explains how [LEGAL ENTITY NAME] (&ldquo;<strong className="text-white">PitBoss HQ</strong>,&rdquo; &ldquo;<strong className="text-white">we</strong>,&rdquo;
              &ldquo;<strong className="text-white">us</strong>,&rdquo; or &ldquo;<strong className="text-white">our</strong>&rdquo;) collects, uses, shares, and protects personal information
              when you use the PitBoss HQ service (the &ldquo;<strong className="text-white">Service</strong>&rdquo;), visit pittbosshq.com, or otherwise interact with us.
            </p>
            <p>
              This Policy works alongside our <Link href="/terms" className="text-[#e53e3e] hover:underline">Terms of Service</Link>. Capitalised terms not defined here have the meanings given in the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">1. Who We Are and Our Role</h2>
            <p className="mb-4">
              PitBoss HQ is a software-as-a-service platform for event entertainment operators. We process two broad categories of personal information,
              and our legal role differs for each.
            </p>
            <p className="mb-4">
              <strong className="text-white">When you (the account holder) sign up and use the Service,</strong> we are the &ldquo;data controller&rdquo; of your personal information &mdash;
              meaning we decide what information to collect about you and how to use it, within the limits of this Policy and applicable law.
            </p>
            <p>
              <strong className="text-white">When you enter information about your own customers, staff, suppliers, or other third parties into the Service,</strong> you are the data controller of
              that information and we are the &ldquo;data processor&rdquo; &mdash; meaning we store and process that information on your behalf, according to your instructions and these Terms.
              You are responsible for ensuring you have the appropriate legal basis for collecting and using that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-base font-bold text-white mb-2 mt-6">2.1 Information you provide directly</h3>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Account information:</strong> name, email address, business name, business address, phone number, country, and password (stored as a salted hash).</li>
              <li><strong className="text-white">Billing information:</strong> we use Stripe to process payments. Stripe collects your payment card details directly &mdash; we never see or store full card numbers. We receive limited information from Stripe such as the last four digits of your card, the card brand, billing address, and a customer ID.</li>
              <li><strong className="text-white">Service data:</strong> the bookings, customer records, products, invoices, staff records, supplier records, and other content you enter into the Service.</li>
              <li><strong className="text-white">Communications:</strong> when you email us, request support, or fill in a form on our website, we collect the content of those communications and any attachments you send.</li>
            </ul>

            <h3 className="text-base font-bold text-white mb-2 mt-6">2.2 Information we collect automatically</h3>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Usage data:</strong> pages viewed, features used, actions taken in the Service, timestamps, and the IP address you connect from.</li>
              <li><strong className="text-white">Device data:</strong> browser type, operating system, screen size, and device identifiers.</li>
              <li><strong className="text-white">Cookies and similar technologies:</strong> see Section 8 below.</li>
              <li><strong className="text-white">Log and security data:</strong> server logs, error reports, and authentication events.</li>
            </ul>

            <h3 className="text-base font-bold text-white mb-2 mt-6">2.3 Information from third parties</h3>
            <p>
              We may receive limited information about you from our payment processor (Stripe) and from our other service providers. This is generally limited to what is needed to operate the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use personal information for the following purposes:</p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li>To provide, operate, and maintain the Service.</li>
              <li>To process subscription payments and prevent fraud.</li>
              <li>To authenticate your account and protect the security of your data.</li>
              <li>To send transactional and service-related emails (e.g. account confirmations, password resets, billing receipts, security alerts, important Service updates).</li>
              <li>To respond to support requests and other communications you send us.</li>
              <li>To improve the Service, including by analysing usage patterns and diagnosing technical issues.</li>
              <li>To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
              <li>With your consent, to send marketing communications (which you can unsubscribe from at any time).</li>
            </ul>
            <p>
              We do not sell your personal information. We do not share your personal information with third parties for their own marketing purposes.
              We do not use your personal information or Service data to train artificial intelligence models.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">4. Legal Bases for Processing (UK and EU)</h2>
            <p className="mb-4">
              If you are in the United Kingdom or European Union, we rely on the following legal bases under UK GDPR and EU GDPR:
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Performance of a contract</strong> &mdash; to provide the Service you have subscribed to.</li>
              <li><strong className="text-white">Legitimate interests</strong> &mdash; to operate, improve, and secure the Service; to communicate with you about the Service; and to protect against fraud and abuse.</li>
              <li><strong className="text-white">Consent</strong> &mdash; for marketing communications and for non-essential cookies. You can withdraw consent at any time.</li>
              <li><strong className="text-white">Legal obligation</strong> &mdash; to comply with applicable laws, court orders, and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">5. Service Providers and Where Your Data Is Stored</h2>
            <p className="mb-4">
              We use the following categories of third-party service providers to operate the Service. Each acts as our processor and is contractually bound to protect your information.
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Cloud hosting and content delivery providers</strong> &mdash; to host the Service and deliver pages and assets to your browser.</li>
              <li><strong className="text-white">Database hosting providers</strong> &mdash; to store the data you and your tenants enter into the Service.</li>
              <li><strong className="text-white">Stripe, Inc.</strong> (United States) &mdash; payment processing. Stripe is a separate data controller for payment data. See Stripe&rsquo;s Privacy Policy at stripe.com/privacy.</li>
              <li><strong className="text-white">Email delivery providers</strong> &mdash; to send transactional emails such as account confirmations, billing receipts, and notifications.</li>
              <li><strong className="text-white">Image and content delivery providers</strong> &mdash; to host and deliver images uploaded to the Service.</li>
              <li><strong className="text-white">Email mailbox providers</strong> &mdash; to receive and respond to your messages to hello@pittbosshq.com.</li>
              <li><strong className="text-white">Domain registrars and DNS providers</strong> &mdash; to operate pittbosshq.com and related domains.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">Where data is stored.</strong> Our primary infrastructure and service providers are located in the United States. If you access the Service from outside the United States, your information will be transferred to and processed in the United States.
            </p>
            <p>
              We may add or replace service providers from time to time. Where we do, we will update this Policy to reflect the change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">6. When We Share Information</h2>
            <p className="mb-4">We share personal information only in the following circumstances:</p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">With service providers</strong> as described in Section 5, strictly to operate the Service.</li>
              <li><strong className="text-white">With your consent</strong> or at your direction.</li>
              <li><strong className="text-white">To comply with law</strong> &mdash; for example, in response to a court order, subpoena, or other legal process. Where lawful, we will notify you before disclosing your information in response to such a request.</li>
              <li><strong className="text-white">To protect rights, property, or safety</strong> &mdash; to investigate fraud, abuse, or security incidents, or to protect ourselves, our users, or the public.</li>
              <li><strong className="text-white">In a business transfer</strong> &mdash; if PitBoss HQ is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before any transfer occurs.</li>
            </ul>
            <p>
              We do not sell, rent, or trade personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">7. How Long We Keep Information</h2>
            <p className="mb-4">
              We retain personal information for as long as needed to provide the Service, comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p className="mb-4">
              <strong className="text-white">Account and Service data after cancellation:</strong> we follow the data-retention schedule set out in Section 5 of our
              <Link href="/terms" className="text-[#e53e3e] hover:underline"> Terms of Service</Link>. In summary: 30 days of read-only access, followed by up to 5 months of soft archive,
              followed by permanent deletion at day 181, unless you request earlier deletion.
            </p>
            <p>
              <strong className="text-white">Other information.</strong> Logs, security data, and similar information are typically retained for up to 12 months.
              Billing and tax records may be retained for up to 7 years to comply with US, UK, and Australian tax requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">8. Cookies and Similar Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to operate and secure the Service.
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Strictly necessary cookies</strong> &mdash; required to authenticate your session, remember your preferences, and provide core functionality. These cannot be disabled while using the Service.</li>
              <li><strong className="text-white">Analytics cookies</strong> &mdash; if used, help us understand how the Service is used so we can improve it. These are only set with your consent where required by law.</li>
            </ul>
            <p>
              Most browsers allow you to refuse or delete cookies through your browser settings. Note that disabling strictly necessary cookies will prevent the Service from working.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">9. Your Rights</h2>
            <p className="mb-4">
              Depending on where you live, you may have the following rights in relation to your personal information:
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Access</strong> &mdash; request a copy of the personal information we hold about you.</li>
              <li><strong className="text-white">Rectification</strong> &mdash; ask us to correct inaccurate or incomplete information.</li>
              <li><strong className="text-white">Erasure (&ldquo;right to be forgotten&rdquo;)</strong> &mdash; ask us to delete your personal information, subject to certain legal exceptions.</li>
              <li><strong className="text-white">Restriction</strong> &mdash; ask us to limit how we use your personal information.</li>
              <li><strong className="text-white">Portability</strong> &mdash; receive your personal information in a structured, machine-readable format.</li>
              <li><strong className="text-white">Objection</strong> &mdash; object to processing based on our legitimate interests, or to processing for direct marketing.</li>
              <li><strong className="text-white">Withdraw consent</strong> &mdash; where we rely on your consent, you can withdraw it at any time.</li>
              <li><strong className="text-white">Complain to a regulator</strong> &mdash; UK residents may complain to the Information Commissioner&rsquo;s Office (ico.org.uk); EU residents may complain to their local data protection authority.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-white">California residents</strong> have additional rights under the California Consumer Privacy Act (CCPA) and CPRA, including the right to know what personal information we collect about you, the right to delete that information, the right to correct inaccuracies, and the right to opt out of any &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information (we do not sell or share personal information for cross-context behavioural advertising).
            </p>
            <p>
              To exercise any of these rights, email us at <a href="mailto:hello@pittbosshq.com" className="text-[#e53e3e] hover:underline">hello@pittbosshq.com</a>.
              We may need to verify your identity before responding. We will respond within the timeframes required by applicable law (generally within 30 days).
              You will not be discriminated against for exercising your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">10. Security</h2>
            <p className="mb-4">
              We use commercially reasonable technical and organisational measures to protect personal information, including encrypted connections (HTTPS/TLS),
              hashed passwords, role-based access controls, and regular backups.
            </p>
            <p>
              No system is perfectly secure. If we become aware of a personal-data breach that affects you, we will notify you and the relevant regulators
              within the timeframes required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">11. Children&rsquo;s Privacy</h2>
            <p>
              The Service is intended for business use only and is not directed to children. We do not knowingly collect personal information from anyone under
              the age of 18. If you believe we have collected information from a child, please contact us at <a href="mailto:hello@pittbosshq.com" className="text-[#e53e3e] hover:underline">hello@pittbosshq.com</a> and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">12. Data Processing for Customers (Tenants)</h2>
            <p className="mb-4">
              If you are a paying customer of PitBoss HQ (a &ldquo;tenant&rdquo;), and you use the Service to process personal information about your own customers, staff,
              or other third parties, the following terms apply, in addition to anything else in this Policy:
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li>You are the data controller; we are the data processor.</li>
              <li>We process that personal information only on your documented instructions and as necessary to provide the Service.</li>
              <li>We require all our service providers to maintain confidentiality and appropriate security.</li>
              <li>We will assist you, where reasonably practicable, in responding to requests from your own customers exercising their rights.</li>
              <li>On termination, we will delete or return personal information in accordance with our retention schedule (Section 7).</li>
            </ul>
            <p>
              These Terms together constitute a Data Processing Agreement (DPA) sufficient for most small-business use cases. If your business or jurisdiction
              requires a separate signed DPA, contact us at <a href="mailto:hello@pittbosshq.com" className="text-[#e53e3e] hover:underline">hello@pittbosshq.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email (using the address associated with your account)
              at least 30 days before the changes take effect, and we will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Service after the
              effective date constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">14. Contact Us</h2>
            <p>
              Questions, requests, or concerns about this Privacy Policy or your personal information? Email us at <a href="mailto:hello@pittbosshq.com" className="text-[#e53e3e] hover:underline">hello@pittbosshq.com</a>.
              We aim to respond to all enquiries within 5 business days.
            </p>
          </section>
        </div>
      </article>

      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-8 py-8 border-t border-white/[0.06] mt-10 gap-4">
        <Logo size="small" />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/20">
          <Link href="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
          <a href="mailto:hello@pittbosshq.com" className="hover:text-white/40 transition-colors">Contact</a>
          <span>&copy; 2026 PitBoss HQ. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}