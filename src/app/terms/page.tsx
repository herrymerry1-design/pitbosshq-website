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

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-[48px] font-black leading-[1.08] mb-6">Terms of Service</h1>
          <p className="text-sm text-white/40">Last updated: 24 April 2026</p>
        </header>

        <div className="space-y-12 text-[15px] leading-relaxed text-white/70">
          <section>
            <p className="mb-4">
              These Terms of Service (&ldquo;<strong className="text-white">Terms</strong>&rdquo;) govern your access to and use of PitBoss HQ
              (the &ldquo;<strong className="text-white">Service</strong>&rdquo;), operated by [LEGAL ENTITY NAME] (&ldquo;<strong className="text-white">PitBoss HQ</strong>,&rdquo;
              &ldquo;<strong className="text-white">we</strong>,&rdquo; &ldquo;<strong className="text-white">us</strong>,&rdquo; or &ldquo;<strong className="text-white">our</strong>&rdquo;).
              By creating an account or using the Service, you (&ldquo;<strong className="text-white">Customer</strong>&rdquo; or &ldquo;<strong className="text-white">you</strong>&rdquo;)
              agree to be bound by these Terms.
            </p>
            <p>
              If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity,
              in which case &ldquo;you&rdquo; refers to that entity. If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">1. The Service</h2>
            <p className="mb-4">
              PitBoss HQ is a software-as-a-service platform for event entertainment operators, including (but not limited to) casino party operators.
              The Service provides tools for managing bookings, staff, invoicing, supplier orders, delivery sheets, customer communications, and operational reporting.
            </p>
            <p>
              PitBoss HQ is a software tool only. PitBoss HQ does not facilitate, process, or enable gambling, wagering, or real-money gaming of any kind.
              Casino-themed events managed through the Service are prop-based entertainment using fun-money or non-redeemable chips.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">2. Account Registration</h2>
            <p className="mb-4">
              To use the Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the
              security of your account credentials and for all activity that occurs under your account.
            </p>
            <p className="mb-4">
              You must be at least 18 years old and have the legal capacity to enter into a binding agreement in your jurisdiction. The Service is intended
              for business use only and is not offered to consumers for personal, family, or household purposes.
            </p>
            <p>
              You agree to notify us immediately at <a href="mailto:hello@pitbosshq.com" className="text-[#e53e3e] hover:underline">hello@pitbosshq.com</a> if
              you become aware of any unauthorised access to your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">3. Subscription Fees and Billing</h2>
            <p className="mb-4">
              Access to the Service is provided on a subscription basis. Current pricing is published at pitbosshq.com/#pricing and is quoted in US dollars.
              Subscription fees are billed in advance on a monthly basis through our payment processor, Stripe, starting on the date you subscribe.
            </p>
            <p className="mb-4">
              You authorise us to charge your chosen payment method for all fees due. If a payment fails, we may retry the charge for up to 14 days.
              If payment is not received within that period, we may suspend or terminate your account as set out in Section 11.
            </p>
            <p>
              We may change our subscription fees from time to time. Any fee changes will be communicated by email at least 30 days before they take effect,
              and will apply to your next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">4. Cancellation and Refunds</h2>
            <p className="mb-4">
              You may cancel your subscription at any time from within the Service. Cancellation takes effect at the end of your current billing period, and
              you will retain access to paid features until that date.
            </p>
            <p className="mb-4">
              <strong className="text-white">All fees paid are non-refundable.</strong> We do not provide pro-rata refunds for partial months, unused time, or features you
              have not used.
            </p>
            <p>
              If you are a consumer resident in the United Kingdom or European Union, you have a statutory right to withdraw from this agreement within
              14 days of signing up, under applicable consumer law. By beginning use of the Service during this period, you expressly consent to the
              provision of the Service before the withdrawal period ends and acknowledge that you lose your right to withdraw once service provision begins.
              You will be asked to confirm this consent at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">5. Data Retention After Cancellation</h2>
            <p className="mb-4">
              When your subscription ends (whether by your cancellation, payment failure, or termination by us), we retain your account and data according to
              the following schedule:
            </p>
            <ul className="space-y-3 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li><strong className="text-white">Days 1&ndash;30 &mdash; Read-only grace period.</strong> You can log in, view all your data, and export it.
                You cannot create new bookings or send invoices.</li>
              <li><strong className="text-white">Days 31&ndash;180 &mdash; Soft archive.</strong> Your account is locked and you cannot log in, but your data
                remains in our systems. If you wish to reactivate your account during this period, contact us at <a href="mailto:hello@pitbosshq.com" className="text-[#e53e3e] hover:underline">hello@pitbosshq.com</a>.</li>
              <li><strong className="text-white">Day 181 onward &mdash; Permanent deletion.</strong> Your account and all associated data are permanently deleted
                from our live systems. Backups may retain data for a short additional period before being overwritten in the normal course of business.</li>
            </ul>
            <p>
              You may request earlier deletion of your data at any time by emailing <a href="mailto:hello@pitbosshq.com" className="text-[#e53e3e] hover:underline">hello@pitbosshq.com</a>.
              See our <Link href="/privacy" className="text-[#e53e3e] hover:underline">Privacy Policy</Link> for details on data subject rights under GDPR,
              CCPA, and similar laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">6. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to use the Service, and not to permit anyone using your account to use the Service, for any of the following purposes:
            </p>
            <ul className="space-y-2.5 pl-6 mb-4 list-disc marker:text-[#e53e3e]/60">
              <li>To facilitate, enable, process, or promote real-money gambling, wagering, betting, or gaming of any kind.</li>
              <li>To host, distribute, promote, or link to adult content, pornography, or sexually explicit material.</li>
              <li>For any activity that is unlawful in your jurisdiction, the jurisdiction where your customers are located, or the State of California.</li>
              <li>To resell, sublicense, white-label, or otherwise repackage the Service as your own product without our prior written consent.</li>
              <li>To attempt to reverse-engineer, decompile, disassemble, scrape, or gain unauthorised access to the Service, its source code, or its underlying infrastructure.</li>
              <li>To send unsolicited bulk email, spam, or communications in violation of CAN-SPAM (United States), PECR (United Kingdom), GDPR, or similar laws. You are responsible for obtaining appropriate consent from the recipients of any communications you send through the Service.</li>
              <li>To share your account credentials with anyone outside your business, or to allow multiple businesses to share a single account.</li>
            </ul>
            <p>
              We reserve the right to investigate suspected violations and to suspend or terminate accounts that we reasonably believe are in breach of this Section.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">7. Your Data and Your Customers&rsquo; Data</h2>
            <p className="mb-4">
              You retain all rights, title, and interest in the data you (and your staff) enter into the Service, including your customer records,
              bookings, invoices, product information, and any other content (&ldquo;<strong className="text-white">Customer Data</strong>&rdquo;).
              We do not claim ownership of Customer Data.
            </p>
            <p className="mb-4">
              You grant us a limited, non-exclusive licence to host, store, process, transmit, and display Customer Data solely to provide the Service to you
              and to perform our obligations under these Terms. We do not sell Customer Data, share it with third parties for their own marketing purposes,
              or use it to train artificial intelligence models.
            </p>
            <p>
              Where Customer Data contains personal information about your own customers or other third parties, you are the &ldquo;data controller&rdquo; and
              we are the &ldquo;data processor&rdquo; under applicable data protection laws (including GDPR). You are responsible for ensuring you have the
              appropriate legal basis to collect and use that personal information and for providing any required notices to those individuals. See our
              <Link href="/privacy" className="text-[#e53e3e] hover:underline"> Privacy Policy</Link> for further detail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">8. Our Intellectual Property</h2>
            <p>
              The Service, including all software, source code, design, branding, trademarks, logos, documentation, and marketing materials, is owned by PitBoss HQ
              and its licensors and is protected by copyright, trademark, and other intellectual property laws. Subject to your compliance with these Terms,
              we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service during your subscription. All rights not
              expressly granted are reserved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">9. Confidentiality</h2>
            <p>
              Each party may receive information from the other that is confidential or proprietary (&ldquo;<strong className="text-white">Confidential Information</strong>&rdquo;).
              Each party agrees to protect the other&rsquo;s Confidential Information with the same degree of care it uses for its own confidential information,
              and not to disclose it to third parties except as necessary to perform under these Terms or as required by law. This obligation survives termination of your subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">10. Service Availability</h2>
            <p className="mb-4">
              We will use commercially reasonable efforts to make the Service available at all times. However, the Service is provided on an
              &ldquo;<strong className="text-white">as-is</strong>&rdquo; and &ldquo;<strong className="text-white">as-available</strong>&rdquo; basis.
              We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
            </p>
            <p>
              The Service may be temporarily unavailable due to maintenance, upgrades, infrastructure provider outages, or events beyond our reasonable control.
              We are not liable for any losses arising from such interruptions. We do not offer a service-level agreement (SLA) or service credits at this time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">11. Termination</h2>
            <p className="mb-4">
              <strong className="text-white">By you.</strong> You may cancel your subscription at any time from within the Service.
              Cancellation takes effect at the end of the current billing period.
            </p>
            <p className="mb-4">
              <strong className="text-white">By us for non-payment.</strong> If a subscription payment fails and remains unpaid for more than 14 days despite
              reasonable retry attempts, we may suspend or terminate your account without further notice.
            </p>
            <p className="mb-4">
              <strong className="text-white">By us for breach.</strong> We may suspend or terminate your account immediately, without notice, if we reasonably
              believe you have materially breached these Terms (including the Acceptable Use provisions in Section 6) or if your use of the Service poses a
              legal, security, or reputational risk to us or to other customers.
            </p>
            <p>
              <strong className="text-white">By us at our discretion.</strong> We may terminate your subscription for any other reason on 30 days&rsquo; written
              notice sent to the email address associated with your account. If we terminate for convenience and you have pre-paid for a period beyond the
              termination date, we will refund the unused portion on a pro-rata basis. This is the only circumstance in which a pro-rata refund is available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">12. Disclaimers</h2>
            <p className="mb-4">
              Except as expressly set out in these Terms, and to the maximum extent permitted by applicable law, we disclaim all warranties, whether express,
              implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
            </p>
            <p>
              You are responsible for the accuracy of the data you enter into the Service, for your own business decisions, and for complying with all laws
              and regulations applicable to your business. PitBoss HQ is a tool; it does not provide legal, financial, tax, or regulatory advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">13. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, in no event will PitBoss HQ, its affiliates, officers, directors, employees, or agents be liable
              for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, loss of revenue, loss of business
              opportunity, loss of data, or loss of goodwill, arising out of or in connection with your use of or inability to use the Service, even if we have
              been advised of the possibility of such damages.
            </p>
            <p className="mb-4">
              Our total aggregate liability to you arising out of or relating to these Terms or the Service, whether in contract, tort (including negligence),
              or otherwise, is limited to the total amount you have paid to us for the Service in the twelve (12) months immediately preceding the event giving
              rise to the claim.
            </p>
            <p>
              Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited, including liability for fraud, fraudulent
              misrepresentation, death or personal injury caused by negligence, or any other liability that applicable law does not permit to be excluded or limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">14. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless PitBoss HQ and its affiliates, officers, directors, employees, and agents from and against any
              claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Service;
              (b) your violation of these Terms; (c) your violation of any rights of a third party, including your own customers; or (d) any data or content
              you submit to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">15. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you by email (using the address associated with your
              account) at least 30 days before the changes take effect. Continued use of the Service after the effective date constitutes acceptance of the
              updated Terms. If you do not agree to the updated Terms, you must cancel your subscription before the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">16. Governing Law and Disputes</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws rules.
              Any dispute arising out of or relating to these Terms or the Service will be resolved exclusively in the state or federal courts located in
              San Diego County, California, and you consent to the personal jurisdiction of those courts.
            </p>
            <p>
              If you are a consumer resident in the United Kingdom or European Union, nothing in this Section deprives you of any protection provided to you
              by the mandatory consumer-protection laws of your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">17. Miscellaneous</h2>
            <p className="mb-4">
              <strong className="text-white">Entire agreement.</strong> These Terms, together with our <Link href="/privacy" className="text-[#e53e3e] hover:underline">Privacy Policy</Link>,
              constitute the entire agreement between you and PitBoss HQ regarding the Service and supersede all prior agreements and understandings.
            </p>
            <p className="mb-4">
              <strong className="text-white">Severability.</strong> If any provision of these Terms is held to be unenforceable, the remaining provisions will
              continue in full force and effect.
            </p>
            <p className="mb-4">
              <strong className="text-white">No waiver.</strong> Our failure to enforce any right or provision of these Terms is not a waiver of that right or provision.
            </p>
            <p>
              <strong className="text-white">Assignment.</strong> You may not assign or transfer these Terms without our prior written consent. We may assign
              these Terms without restriction, including in connection with a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-4">18. Contact</h2>
            <p>
              Questions about these Terms? Email us at <a href="mailto:hello@pitbosshq.com" className="text-[#e53e3e] hover:underline">hello@pitbosshq.com</a>.
            </p>
          </section>
        </div>
      </article>

      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-8 py-8 border-t border-white/[0.06] mt-10 gap-4">
        <Logo size="small" />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/20">
          <Link href="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
          <a href="mailto:hello@pitbosshq.com" className="hover:text-white/40 transition-colors">Contact</a>
          <span>&copy; 2026 PitBoss HQ. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}