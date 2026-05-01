"use client";

import { useState } from "react";
import { Calendar, Users, FileText, DollarSign, Truck, ClipboardCheck, Check, ArrowRight, Zap, Clock, Shield, Star, BarChart3, Mail, MessageSquare, Menu, X } from "lucide-react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

const DEMO_URL = "https://app.pitbosshq.com/demo?brand=pitboss";
const LOGIN_URL = "https://app.pitbosshq.com/login";

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

const features = [
  { icon: Calendar, title: "Booking wizard", desc: "Create multi-product, multi-staff bookings in under a minute. Auto-pricing by region, event type, and duration." },
  { icon: Users, title: "Staff scheduling", desc: "Assign staff to jobs, track availability, send job sheets by email. Your entire casual workforce managed in one place." },
  { icon: FileText, title: "Invoicing", desc: "Professional invoices generated automatically from booking data. Email with one click. Track payments in real time." },
  { icon: DollarSign, title: "Payment tracking", desc: "See who owes what at a glance. Record deposits, part-payments, and mark bookings as fully paid." },
  { icon: Truck, title: "Delivery sheets", desc: "Professional delivery sheets with equipment checklists, travel times, venue details, and setup instructions." },
  { icon: ClipboardCheck, title: "Supplier orders", desc: "Place orders, track confirmations, manage costs. Automated order sheets emailed directly to your suppliers." },
  { icon: BarChart3, title: "Reports and analytics", desc: "Revenue breakdowns, staff costs, profit margins, supplier spend, and customer insights. Eleven report tabs covering every angle of your business." },
  { icon: Mail, title: "Campaign emails", desc: "Send targeted bulk emails to your customer base. Filter by region, event type, or booking history. Built-in wizard with preview, scheduling, and tracking." },
  { icon: MessageSquare, title: "Customer surveys", desc: "Automated post-event feedback surveys sent to customers after each booking. Track responses and ratings to keep improving your service." },
];

const showcase = [
  {
    title: "Book events in clicks, not hours",
    desc: "The booking wizard walks you through every step — customer details, date and time, product selection with real-time pricing, staff assignment, and extras. What used to take 30 minutes of spreadsheet wrangling now takes under 60 seconds.",
    image: "/screenshot-wizard.png",
    alt: "PitBoss HQ booking wizard showing product selection",
    cropTop: "1%",
    dark: true,
  },
  {
    title: "Every booking detail in one place",
    desc: "Each booking is a complete command centre. Products with individual pricing, assigned staff, customer details, delivery info, financials with tax breakdown, payment status, and a full action panel — confirmation emails, invoices, delivery sheets, all one click away.",
    image: "/screenshot-booking.png",
    alt: "PitBoss HQ booking detail page",
    cropTop: "0%",
    dark: true,
  },
  {
    title: "Your month at a glance",
    desc: "The calendar shows every booking with financial summaries, revenue charts by month, and filters by product or supplier. See your busiest weekends, spot gaps in the schedule, and track revenue trends — all without opening a single spreadsheet.",
    image: "/screenshot-calendar.png",
    alt: "PitBoss HQ calendar view with revenue overview",
    cropTop: "2%",
    dark: true,
  },
  {
    title: "Professional invoices, automatically",
    desc: "Branded invoices generated directly from booking data — line items, tax calculations, payment tracking, and terms and conditions. Email them with one click or let your customers view them online via a secure link.",
    image: "/screenshot-invoice.png",
    alt: "PitBoss HQ professional invoice",
    cropTop: "5%",
    dark: false,
  },
  {
    title: "Delivery sheets your staff will actually use",
    desc: "Every staff member gets a personalised job sheet with venue details, start and finish times, equipment checklists, site requirements, and their fee. No more frantic texts asking where to go and what to bring.",
    image: "/screenshot-delivery.png",
    alt: "PitBoss HQ delivery and job sheet",
    cropTop: "5%",
    dark: false,
  },
  {
    title: "Professional operations hub",
    desc: "The logistics inbox gives you a bird's-eye view of everything that needs doing — follow-ups to action, invoices to send, supplier orders to place, staff to assign. Nothing falls through the cracks.",
    image: "/screenshot-logistics.png",
    alt: "PitBoss HQ logistics inbox",
    cropTop: "2%",
    dark: true,
  },
];

const stats = [
  { value: "60s", label: "To create a full booking" },
  { value: "1-15", label: "Staff managed per event" },
  { value: "1-click", label: "Invoices and job sheets" },
  { value: "24/7", label: "Access from any device" },
];

const starterFeatures = ["Unlimited bookings", "1 region", "Staff scheduling", "Invoicing and payments", "Delivery sheets", "Email support"];
const businessFeatures = ["Everything in Starter", "Unlimited regions", "Reports and analytics", "Campaign emails", "Staff portal", "Supplier management", "Priority support"];

const faqs = [
  { q: "Is this only for casino party companies?", a: "PitBoss HQ is purpose-built for casino party operators, but the platform handles any multi-staff, multi-product event business. If you manage dealers, tables, and equipment across events, this was built for you." },
  { q: "How long does it take to set up?", a: "You can be up and running within a few hours. The onboarding wizard walks you through adding your basic settings, then add regions, products, staff, and pricing step by step. You can also try the full demo instantly with no sign-up." },
  { q: "Can my staff see their schedules?", a: "Yes. The Staff Portal gives each dealer a login to view their upcoming jobs, mark availability, and access their delivery sheets and job details. No more group texts." },
  { q: "Do I need to install anything?", a: "No. PitBoss HQ runs entirely in your browser. Access it from your desktop, tablet, or phone. Nothing to download, nothing to update." },
  { q: "Is my data safe and private?", a: "Absolutely. Every account is completely isolated — your data is yours alone and no other operator can see it. Everything is stored securely on enterprise-grade infrastructure with automatic backups. We take data privacy seriously." },
  { q: "How is this different from generic booking software?", a: "Generic tools make you bend your workflow to fit their system. PitBoss HQ was built by casino party operators who spent years running events and managing dealers with duct-taped tools. Every feature exists because it was needed on real jobs — not dreamed up in a conference room." },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          <Logo />
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#features" className="hidden md:block text-[13px] text-white/50 hover:text-white/80 transition-colors">Features</a>
            <a href="#showcase" className="hidden md:block text-[13px] text-white/50 hover:text-white/80 transition-colors">Tour</a>
            <a href="#pricing" className="hidden md:block text-[13px] text-white/50 hover:text-white/80 transition-colors">Pricing</a>
            <a href="#faq" className="hidden md:block text-[13px] text-white/50 hover:text-white/80 transition-colors">FAQ</a>
            <a href={LOGIN_URL} className="hidden md:block text-[13px] text-white/50 hover:text-white/80 transition-colors">Sign In</a>
            <a href={DEMO_URL} className="bg-[#e53e3e] hover:bg-[#c53030] text-white px-4 md:px-5 py-2 rounded-md font-semibold text-xs tracking-[1px] transition-colors">TRY DEMO</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/70 hover:text-white p-1 -mr-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/[0.06]">
            <div className="flex flex-col px-6 py-2">
              <a href="#features" onClick={closeMenu} className="text-[15px] text-white/70 hover:text-white py-3 border-b border-white/[0.04]">Features</a>
              <a href="#showcase" onClick={closeMenu} className="text-[15px] text-white/70 hover:text-white py-3 border-b border-white/[0.04]">Tour</a>
              <a href="#pricing" onClick={closeMenu} className="text-[15px] text-white/70 hover:text-white py-3 border-b border-white/[0.04]">Pricing</a>
              <a href="#faq" onClick={closeMenu} className="text-[15px] text-white/70 hover:text-white py-3 border-b border-white/[0.04]">FAQ</a>
              <a href={LOGIN_URL} onClick={closeMenu} className="text-[15px] text-white/70 hover:text-white py-3">Sign In</a>
            </div>
          </div>
        )}
      </nav>

      <section className="text-center px-6 pt-20 md:pt-28 pb-8">
        <div className="inline-block bg-[#e53e3e]/10 border border-[#e53e3e]/20 rounded-full px-4 py-1.5 text-[11px] text-[#e53e3e] tracking-[2px] mb-6 font-medium">NO CREDIT CARD REQUIRED — TRY THE FULL DEMO</div>
        <h1 className="text-4xl md:text-[56px] font-black leading-[1.08] max-w-[700px] mx-auto mb-6">
          Run your casino party business like a <span className="text-[#e53e3e]">pit boss</span>
        </h1>
        <p className="text-[17px] text-white/50 max-w-[560px] mx-auto mb-10 leading-relaxed">
          The all-in-one booking, staffing, and operations platform built specifically for casino party operators. Replace your spreadsheets, scattered emails, and manual invoicing with one powerful system.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <a href={DEMO_URL} className="bg-[#e53e3e] hover:bg-[#c53030] text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-[1px] transition-colors inline-flex items-center justify-center gap-2">
            TRY INSTANT DEMO <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#showcase" className="bg-white/[0.06] border border-white/10 text-white/70 hover:text-white hover:border-white/20 px-8 py-3.5 rounded-lg font-medium text-sm transition-colors">Take the tour</a>
        </div>
        <p className="text-xs text-white/25">No sign-up. No credit card. Full access in 10 seconds.</p>
        <p className="text-xs text-white/20 mt-1">Demo best experienced on desktop or tablet.</p>
      </section>

      <section className="max-w-[1000px] mx-auto mt-8 mb-20 px-6">
        <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/50">
          <Image src="/dashboard.png" alt="PitBoss HQ dashboard showing today's events, revenue, and action items" width={1780} height={2000} className="w-full h-auto" priority />
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-[#e53e3e] mb-1">{s.value}</p>
              <p className="text-xs text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-black mb-5 leading-tight">
            You run a great casino party company.<br />Your software should match.
          </h2>
          <p className="text-white/45 text-[16px] leading-relaxed max-w-[580px] mx-auto">
            {"You're managing 3 to 15 dealers per event, coordinating blackjack tables, roulette wheels, and poker setups across multiple regions — all while keeping clients happy and staff paid. But your tools weren't built for this."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-7">
            <p className="text-sm font-bold text-[#e53e3e]/70 mb-4">Without PitBoss HQ</p>
            <ul className="text-sm text-white/35 space-y-3">
              <li className="flex items-start gap-2"><span className="text-white/20 mt-0.5">&#x2717;</span> Bookings scattered across spreadsheets</li>
              <li className="flex items-start gap-2"><span className="text-white/20 mt-0.5">&#x2717;</span> Staff schedules managed by text message</li>
              <li className="flex items-start gap-2"><span className="text-white/20 mt-0.5">&#x2717;</span> Invoices cobbled together in Word</li>
              <li className="flex items-start gap-2"><span className="text-white/20 mt-0.5">&#x2717;</span> No idea who owes what or when</li>
              <li className="flex items-start gap-2"><span className="text-white/20 mt-0.5">&#x2717;</span> Hours wasted on admin every single week</li>
            </ul>
          </div>
          <div className="bg-[#e53e3e]/[0.04] border border-[#e53e3e]/15 rounded-xl p-7">
            <p className="text-sm font-bold text-[#e53e3e] mb-4">With PitBoss HQ</p>
            <ul className="text-sm text-white/50 space-y-3">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#e53e3e] shrink-0 mt-0.5" /> Every booking in one live dashboard</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#e53e3e] shrink-0 mt-0.5" /> Staff assigned and notified in clicks</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#e53e3e] shrink-0 mt-0.5" /> Professional invoices sent instantly</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#e53e3e] shrink-0 mt-0.5" /> Real-time payment and revenue tracking</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#e53e3e] shrink-0 mt-0.5" /> More events, less paperwork</li>
            </ul>
          </div>
        </div>
        <div id="about" className="text-center bg-[#111] border border-white/[0.06] rounded-xl p-10">
          <div className="w-14 h-14 rounded-full bg-[#e53e3e]/10 border-2 border-[#e53e3e]/20 flex items-center justify-center mx-auto mb-5">
            <Star className="w-6 h-6 text-[#e53e3e]" />
          </div>
          <p className="text-2xl font-black mb-3">Built by people who get it</p>
          <p className="text-white/40 text-[15px] leading-relaxed max-w-[500px] mx-auto">
            PitBoss HQ was created by casino party operators who spent years running events and managing dealers with duct-taped tools. Every feature exists because it was needed on real jobs — not dreamed up in a conference room.
          </p>
        </div>
      </section>

      <section id="features" className="max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-black mb-4">{"Everything you need. Nothing you don't."}</h2>
          <p className="text-white/40 text-[16px]">Purpose-built for multi-table, multi-staff casino events</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-[#111] border border-white/[0.06] rounded-xl p-6 hover:border-[#e53e3e]/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#e53e3e]/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-[#e53e3e]" />
              </div>
              <h3 className="text-[15px] font-bold mb-2">{f.title}</h3>
              <p className="text-[13px] text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-[60%]">
            <div className="inline-block bg-[#e53e3e]/10 border border-[#e53e3e]/20 rounded-full px-3 py-1 text-[10px] text-[#e53e3e] tracking-[2px] mb-4 font-medium">INCLUDED ON BUSINESS PLAN</div>
            <h2 className="text-2xl md:text-[32px] font-black mb-4 leading-tight">Your staff get their own portal</h2>
            <p className="text-[15px] text-white/45 leading-relaxed mb-6">
              Every staff member gets a personal login to view their upcoming jobs, check venue details, download delivery sheets, and mark their availability — all from their phone. No more group texts, no more missed messages, no more last-minute confusion.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-white/50"><Check className="w-4 h-4 text-[#e53e3e] shrink-0" /> View upcoming jobs with full event details</li>
              <li className="flex items-center gap-2.5 text-sm text-white/50"><Check className="w-4 h-4 text-[#e53e3e] shrink-0" /> Download delivery sheets and job instructions</li>
              <li className="flex items-center gap-2.5 text-sm text-white/50"><Check className="w-4 h-4 text-[#e53e3e] shrink-0" /> Set availability so you know who can work</li>
              <li className="flex items-center gap-2.5 text-sm text-white/50"><Check className="w-4 h-4 text-[#e53e3e] shrink-0" /> Works on any device — phone, tablet, or desktop</li>
            </ul>
          </div>
          <div className="md:w-[40%] flex justify-center">
            <div className="w-48 h-48 rounded-full bg-[#e53e3e]/[0.06] border-2 border-[#e53e3e]/15 flex items-center justify-center">
              <Users className="w-20 h-20 text-[#e53e3e]/40" />
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="max-w-[1000px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-black mb-4">See it in action</h2>
          <p className="text-white/40 text-[16px]">A quick tour of what your day looks like with PitBoss HQ</p>
        </div>
        <div className="space-y-28">
          {showcase.map((item, i) => (
            <div key={item.title} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}>
              <div className="md:w-[45%] shrink-0">
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-[15px] text-white/45 leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:w-[55%]">
                {item.dark ? (
                  <div className="rounded-xl overflow-hidden">
                    <ImageLightbox
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="bg-[#111] rounded-xl p-4 shadow-2xl shadow-black/40 border border-white/[0.06]">
                    <div className="rounded-lg overflow-hidden">
                      <ImageLightbox
                        src={item.image}
                        alt={item.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-black mb-4">How it works</h2>
          <p className="text-white/40 text-[16px]">Up and running in minutes, not months</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { n: "1", title: "Try the demo", desc: "Click one button and explore the full platform instantly. Real data, real features, no sign-up required. Your demo loads in 10 seconds.", icon: Zap },
            { n: "2", title: "Set up your business", desc: "Add your regions, products, staff, and pricing. The onboarding wizard walks you through every step. Most operators are set up within an hour.", icon: Clock },
            { n: "3", title: "Start booking events", desc: "Create your first booking, assign staff, send invoices. Your entire operation runs from one place from day one.", icon: Shield },
          ].map((step) => (
            <div key={step.n} className="text-center px-4 py-8 bg-[#111] border border-white/[0.06] rounded-xl">
              <div className="w-14 h-14 rounded-full bg-[#e53e3e]/10 border-2 border-[#e53e3e]/30 flex items-center justify-center mx-auto mb-5 text-2xl font-black text-[#e53e3e]">{step.n}</div>
              <p className="text-[16px] font-bold mb-2">{step.title}</p>
              <p className="text-[13px] text-white/40 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.04] text-center">
        <h2 className="text-3xl md:text-[40px] font-black mb-4">Simple, transparent pricing</h2>
        <p className="text-white/40 text-[16px] mb-4">No hidden fees. No contracts. Cancel anytime.</p>
        <div className="inline-block bg-[#e53e3e]/10 border border-[#e53e3e]/20 rounded-full px-4 py-1.5 text-[11px] text-[#e53e3e] tracking-[2px] mb-12 font-medium">TAKE ADVANTAGE OF BETA RELEASE PRICING</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[700px] mx-auto">
          <div className="bg-[#111] border border-white/[0.06] rounded-xl p-8 text-left">
            <p className="text-xs text-white/40 tracking-[2px] mb-3">STARTER</p>
            <p className="text-5xl font-black mb-1">$129<span className="text-base font-normal text-white/30">/mo</span></p>
            <p className="text-sm text-white/35 mb-6">For solo operators and small teams</p>
            <ul className="space-y-3 mb-8">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/50">
                  <Check className="w-4 h-4 text-[#e53e3e]/60 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="https://app.pitbosshq.com/register?plan=starter" className="block text-center bg-white/[0.06] border border-white/10 text-white/70 hover:text-white hover:border-white/20 py-3 rounded-lg font-medium text-sm transition-colors">Get started</a>
          </div>
          <div className="bg-[#111] border-2 border-[#e53e3e] rounded-xl p-8 text-left relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e53e3e] text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-[1px]">MOST POPULAR</div>
            <p className="text-xs text-white/40 tracking-[2px] mb-3">BUSINESS</p>
            <p className="text-5xl font-black mb-1">$179<span className="text-base font-normal text-white/30">/mo</span></p>
            <p className="text-sm text-white/35 mb-6">For growing companies with multiple jobs</p>
            <ul className="space-y-3 mb-8">
              {businessFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-white/50">
                  <Check className="w-4 h-4 text-[#e53e3e] shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="https://app.pitbosshq.com/register?plan=business" className="block text-center bg-[#e53e3e] hover:bg-[#c53030] text-white py-3 rounded-lg font-bold text-sm tracking-[0.5px] transition-colors">Get started</a>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-[700px] mx-auto px-6 py-20 border-t border-white/[0.04]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-black mb-4">Frequently asked questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#111] border border-white/[0.06] rounded-xl p-6">
              <p className="text-[15px] font-bold mb-2">{faq.q}</p>
              <p className="text-[13px] text-white/40 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-6 py-20 my-10 bg-[#e53e3e]/[0.03] border-y border-[#e53e3e]/10 text-center">
        <h2 className="text-3xl md:text-[40px] font-black mb-4">See it for yourself</h2>
        <p className="text-white/45 text-[16px] leading-relaxed mb-2">No sign-up forms. No sales calls. No credit card.</p>
        <p className="text-white/45 text-[16px] leading-relaxed mb-8 max-w-[540px] mx-auto">
          {"Click the button, enter your name and email address, and you're inside the full platform in 10 seconds — loaded with realistic demo data so you can see exactly how it works."}
        </p>
        <a href={DEMO_URL} className="inline-flex items-center gap-2 bg-[#e53e3e] hover:bg-[#c53030] text-white px-10 py-4 rounded-lg font-bold text-[16px] tracking-[1px] transition-colors">
          TRY INSTANT DEMO — FREE <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-xs text-white/20 mt-4">Full access. Real features. Expires after 24 hours.</p>
      </section>

      <footer className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-8 py-8 border-t border-white/[0.06] mt-10 gap-4">
        <Logo size="small" />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/20">
          <a href="/terms" className="hover:text-white/40 transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-white/40 transition-colors">Privacy</a>
          <a href="mailto:hello@pitbosshq.com" className="hover:text-white/40 transition-colors">Contact</a>
          <span>&copy; 2026 PitBoss HQ. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}