import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import managerReel from "@/assets/manager-reel.mp4.asset.json";
import managerReelPoster from "@/assets/manager-reel-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitscore — Evaluate Any Creator Before You Sponsor Them" },
      {
        name: "description",
        content:
          "Kitscore turns creator performance and evidence into a sponsorship readiness score sponsors can trust. Join the waitlist for early access.",
      },
      { property: "og:title", content: "Kitscore — Sponsorship trust infrastructure" },
      {
        property: "og:description",
        content:
          "A readiness score and confidence rating backed by real evidence, so sponsors stop relying on self-reported media kits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

type Role = "" | "creator" | "sponsor";

function Landing() {
  const [tab, setTab] = useState<"sponsors" | "creators">("sponsors");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Divider />
      <HowItWorks tab={tab} setTab={setTab} />
      <Divider />
      <WhyKitscore />
      <Divider />
      <VerifiedCampaigns />
      <Divider />
      <Difference />
      <Divider />
      <ManagerReel />
      <Divider />
      <SampleReports />
      <Divider />
      <Pricing />
      <Divider />
      <NetworkEffect />
      <Divider />
      <Waitlist />
      <Footer />
    </div>
  );
}

function Divider() {
  return <hr className="border-0 border-t border-border" />;
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-border bg-[rgba(10,12,16,0.85)] px-8 backdrop-blur-md">
      <div className="text-[1.1rem] font-bold tracking-tight">
        Kit<span className="text-primary-light">score</span>
      </div>
      <a
        href="#waitlist"
        className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
      >
        Join the waitlist
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mx-auto max-w-[820px] px-8 pb-24 pt-[120px] text-center">
      <div className="mb-7 inline-block rounded-full border border-[rgba(123,111,232,0.3)] bg-primary-dim px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-primary-light">
        Sponsorship Intelligence
      </div>
      <h1 className="mb-6 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.15] tracking-[-0.03em]">
        Evaluate Any Creator
        <br />
        <em className="not-italic text-primary-light">Before You Sponsor Them</em>
      </h1>
      <p className="mx-auto mb-5 max-w-[600px] text-[1.1rem] text-muted-foreground">
        Kitscore helps brands, agencies, and marketing teams make sponsorship decisions with
        evidence instead of screenshots.
      </p>
      <p className="mx-auto max-w-[600px] text-[1.1rem] text-muted-foreground">
        Paste any creator profile and receive an independent sponsorship-readiness evaluation
        before you commit budget.
      </p>
      <p className="mb-10 mt-4 text-[0.95rem] text-muted-foreground">
        See a creator's <strong className="text-foreground">Readiness Score</strong> and{" "}
        <strong className="text-foreground">Confidence Rating</strong> instantly. Unlock the full
        evaluation, risk analysis, and sponsor decision memo for{" "}
        <strong className="text-foreground">$29</strong>.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#waitlist"
          className="rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-85"
        >
          Get Early Access
        </a>
        <a
          href="#samples"
          className="rounded-md border border-border-hover bg-transparent px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)]"
        >
          View Sample Report
        </a>
      </div>

      <div
        className="relative mx-auto mt-14 max-w-[560px] overflow-hidden rounded-2xl border border-border bg-surface p-7 text-left"
        style={{ boxShadow: "var(--shadow-elegant)" }}
      >
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="mb-5 flex items-center gap-5">
          <div className="text-[3rem] font-bold leading-none tracking-[-0.04em] text-primary-light">
            84
          </div>
          <div className="flex-1">
            <div className="mb-1 text-[13px] text-muted-foreground">Readiness Score · Preview</div>
            <span className="inline-block rounded-full border border-[rgba(46,204,138,0.25)] bg-success-dim px-2.5 py-0.5 text-xs font-semibold text-success">
              High Readiness
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-muted-foreground">Confidence Rating</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>
          <span className="text-[13px] font-semibold text-primary-light">72%</span>
        </div>
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
          <span className="text-xl opacity-40">🔒</span>
          <span className="text-[13px] text-muted-foreground">
            Unlock the full evaluation for <strong className="text-foreground">$29</strong> — score
            breakdown, risk assessment, audience fit analysis, and sponsor decision memo PDF.
          </span>
        </div>
      </div>
    </header>
  );
}

function SectionShell({
  label,
  title,
  sub,
  children,
  id,
}: {
  label: string;
  title?: React.ReactNode;
  sub?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-[960px] px-8 py-24">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-primary-light">
        {label}
      </div>
      {title && (
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.025em]">
          {title}
        </h2>
      )}
      {sub && <p className="mb-14 max-w-[520px] text-base text-muted-foreground">{sub}</p>}
      {children}
    </section>
  );
}

function HowItWorks({
  tab,
  setTab,
}: {
  tab: "sponsors" | "creators";
  setTab: (t: "sponsors" | "creators") => void;
}) {
  return (
    <SectionShell
      label="How it works"
      title="Built for two audiences"
      sub="Whether you're evaluating a creator or building your sponsorship credibility, Kitscore gives you the tools to act with confidence."
    >
      <div className="mb-12 flex gap-2">
        {(["sponsors", "creators"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-transparent text-muted-foreground hover:border-border-hover hover:text-foreground"
            }`}
          >
            {t === "sponsors" ? "For Sponsors" : "For Creators"}
          </button>
        ))}
      </div>

      {tab === "sponsors" ? (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                n: 1,
                h: "Paste a creator profile URL",
                p: "YouTube, Instagram, TikTok, LinkedIn, or X. Any public profile works.",
              },
              {
                n: 2,
                h: "Receive an instant preview",
                p: "Your free preview includes:",
                list: ["Readiness Score", "Confidence Rating"],
              },
              {
                n: 3,
                h: "Unlock the full evaluation for $29",
                p: "Your complete report includes:",
                list: [
                  "Score Breakdown",
                  "Risk Assessment",
                  "Audience Fit Analysis",
                  "Evidence Summary",
                  "Sponsor Decision Memo PDF",
                ],
              },
            ].map((s) => (
              <div key={s.n} className="rounded-lg border border-border bg-surface p-6">
                <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(123,111,232,0.25)] bg-primary-dim text-xs font-bold text-primary-light">
                  {s.n}
                </div>
                <h3 className="mb-2 text-[15px] font-semibold">{s.h}</h3>
                <p className="text-sm text-muted-foreground">{s.p}</p>
                {s.list && (
                  <ul className="mt-2.5 list-none">
                    {s.list.map((li) => (
                      <li key={li} className="py-0.5 text-[13px] text-muted-foreground">
                        <span className="text-primary-light">→ </span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Make sponsorship decisions with evidence, not guesswork.
          </p>
        </>
      ) : (
        <>
          <p className="mb-8 text-[15px] text-muted-foreground">
            Create a verified sponsorship profile. Upload evidence. Improve confidence ratings.
            Build a sponsorship proof packet you can share with brands and agencies.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TierCard
              name="Free"
              price="$0"
              period="/ forever"
              features={["One platform", "Basic score", "Watermarked proof packet"]}
            />
            <TierCard
              name="Pro"
              price="$19.99"
              period="/ month"
              featured
              features={[
                "All platforms",
                "Full exports",
                "Score history",
                "Directory listing",
                "Advanced action plans",
              ]}
            />
          </div>
        </>
      )}
    </SectionShell>
  );
}

function TierCard({
  name,
  price,
  period,
  features,
  featured,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-lg border bg-surface p-6 ${
        featured ? "border-[rgba(123,111,232,0.4)]" : "border-border"
      }`}
    >
      {featured && (
        <div className="absolute -top-px right-5 rounded-b-md bg-primary px-3 py-1 text-[11px] font-bold tracking-wider text-primary-foreground">
          {name.toUpperCase()}
        </div>
      )}
      <div className="mb-1 text-[15px] font-bold">{name}</div>
      <div className="mb-4 text-2xl font-bold text-primary-light">
        {price}{" "}
        <span className="text-[13px] font-normal text-muted-foreground">{period}</span>
      </div>
      <ul className="list-none">
        {features.map((f, i) => (
          <li
            key={f}
            className={`py-1.5 text-[13px] text-muted-foreground ${
              i < features.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-success">✓ </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyKitscore() {
  const items = [
    {
      icon: "🏷️",
      h: "Source Labels",
      p: "Every metric shows whether it's self-reported, evidence-submitted, or live-verified. You always know where the data comes from.",
    },
    {
      icon: "📊",
      h: "Confidence Ratings",
      p: "Not just a score — a confidence percentage that tells you how much evidence backs it up.",
    },
    {
      icon: "📎",
      h: "Evidence Tracking",
      p: "Every score component links back to the evidence that produced it. Auditable from the first number to the last.",
    },
    {
      icon: "🎯",
      h: "Sponsor-Focused Recommendations",
      p: "Recommendations built for sponsorship decisions, not vanity metrics or follower growth.",
    },
  ];
  return (
    <SectionShell
      label="Why Kitscore"
      title={
        <>
          Most tools measure audiences.
          <br />
          Kitscore measures sponsorship readiness.
        </>
      }
      sub={
        <>
          Every evaluation is built around the question that matters:{" "}
          <em className="not-italic">should we sponsor this creator?</em>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.h} className="rounded-lg border border-border bg-surface p-6">
            <div className="mb-3.5 text-[22px]">{i.icon}</div>
            <h3 className="mb-2 text-[15px] font-semibold">{i.h}</h3>
            <p className="text-sm text-muted-foreground">{i.p}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function VerifiedCampaigns() {
  return (
    <SectionShell label="Verified Campaigns">
      <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-border bg-surface p-10 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold tracking-[-0.02em]">
            The strongest signal isn't follower count.
            <br />
            It's proven sponsorship history.
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            Creators and sponsors can mutually confirm completed campaigns. Verified Campaigns
            appear on creator profiles, proof packets, and sponsor evaluations.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <strong className="text-foreground">
              More trust. Better sponsorship decisions. Less guesswork.
            </strong>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {[
            "Sponsor evaluates creator",
            "Creator receives invitation",
            "Creator claims profile",
            "Campaign evidence is submitted",
          ].map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-md border border-border bg-surface-2 px-4 py-3.5 text-sm text-muted-foreground"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              {s}
            </div>
          ))}
          <div className="flex items-center gap-3 rounded-md border border-[rgba(123,111,232,0.3)] bg-surface-2 px-4 py-3.5 text-sm text-primary-light">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-success" />✓ Verified Campaign
            confirmed
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Difference() {
  return (
    <SectionShell label="The Kitscore Difference">
      <div className="rounded-2xl border border-border bg-surface p-12 text-center">
        <p className="text-sm text-muted-foreground">
          Other tools tell you how many followers a creator has.
        </p>
        <div className="my-8 flex flex-wrap items-center justify-center gap-8">
          <div className="min-w-[180px] flex-1">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Other tools ask
            </div>
            <div className="text-base text-muted-foreground">
              How big is this creator's audience?
            </div>
          </div>
          <div className="flex-shrink-0 text-3xl font-bold text-border-hover">→</div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Kitscore answers
            </div>
            <div className="text-lg font-bold text-primary-light">
              Should we sponsor this creator?
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Every report is built around decision-making, not just analytics.
        </p>
      </div>
    </SectionShell>
  );
}

function ManagerReel() {
  return (
    <SectionShell
      label="For Managers, Agents & Agencies"
      title="Run your whole roster from one place."
      sub="Kitscore isn't just scoring — it's the deal pipeline behind your creators, from outreach to payment."
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
        <div
          className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-border bg-surface"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <div
            className="absolute inset-x-0 top-0 z-10 h-0.5"
            style={{ background: "var(--gradient-accent)" }}
          />
          <video
            src={managerReel.url}
            poster={managerReelPoster.url}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block h-auto w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          {[
            {
              h: "Every deal, one pipeline",
              p: "See every deal's stage across the roster — outreach, pitched, negotiating, signed, paid.",
            },
            {
              h: "Stay close to every creator",
              p: "Direct messages, reusable templates, one calendar, and creator digests built in.",
            },
            {
              h: "Pitch faster, on your brand",
              p: "Pitch one brief to multiple creators, AI-assisted pitch & counter-offer drafts, your agency's name on every pitch.",
            },
          ].map((i) => (
            <div
              key={i.h}
              className="flex items-start gap-3 rounded-md border border-border bg-surface px-4 py-3.5"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <div>
                <div className="text-sm font-semibold">{i.h}</div>
                <div className="text-[13px] text-muted-foreground">{i.p}</div>
              </div>
            </div>
          ))}
          <a
            href="#waitlist"
            className="mt-2 inline-block w-fit rounded-md border border-[rgba(123,111,232,0.4)] bg-primary-dim px-5 py-2.5 text-sm font-semibold text-primary-light transition-opacity hover:opacity-85"
          >
            Join the waitlist for roster tools
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

function SampleReports() {
  return (
    <SectionShell
      id="samples"
      label="Sample Reports"
      title="See exactly what Kitscore delivers."
      sub="Understand the evaluation before purchasing. Download sample reports and see the full output format."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {[
          {
            icon: "📄",
            h: "Sample Creator Proof Packet",
            p: "The verified evidence packet a creator shares with brands and agencies.",
          },
          {
            icon: "📋",
            h: "Sample Sponsor Decision Memo",
            p: "The full PDF decision memo delivered to sponsors after a paid evaluation.",
          },
        ].map((c) => (
          <div
            key={c.h}
            className="flex items-start gap-4 rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-[rgba(123,111,232,0.25)] bg-primary-dim text-xl">
              {c.icon}
            </div>
            <div>
              <h3 className="mb-1.5 text-[15px] font-semibold">{c.h}</h3>
              <p className="text-[13px] text-muted-foreground">{c.p}</p>
              <button className="mt-3 cursor-pointer text-[13px] font-semibold text-primary-light hover:underline">
                Download Sample →
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Pricing() {
  return (
    <SectionShell
      label="Pricing"
      title="Simple, transparent pricing."
      sub="Pay per evaluation or subscribe for ongoing creator pipeline management."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Creators
          </div>
          <PlanCard name="Free" amount="$0" period="forever" features={["One platform", "Basic score", "Watermarked proof packet"]} cta="Get Started Free" />
          <PlanCard
            name="Pro"
            amount="$19.99"
            period="/ month"
            tag="Most Popular"
            featured
            features={[
              "All supported platforms",
              "Full proof packet export",
              "Score history",
              "Directory listing",
              "Advanced action plans",
            ]}
            cta="Start Pro"
            solid
          />
        </div>
        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Sponsors
          </div>
          <PlanCard
            name="Single Evaluation"
            amount="$29"
            period="per evaluation"
            tag="Pay as you go"
            featured
            features={[
              "Full sponsorship decision memo PDF",
              "Score breakdown & risk assessment",
              "Audience fit analysis",
              "Evidence summary",
            ]}
            cta="Evaluate a Creator"
            solid
          />
          <PlanCard
            name="Starter"
            amount="$99"
            period="/ month"
            features={["For teams evaluating creators regularly", "All single evaluation features", "Team sharing"]}
            cta="Get Starter"
          />
          <PlanCard
            name="Team"
            amount="$299"
            period="/ month"
            features={["For agencies and brands managing creator pipelines", "All Starter features", "Priority support"]}
            cta="Get Team"
          />
        </div>
      </div>
    </SectionShell>
  );
}

function PlanCard({
  name,
  amount,
  period,
  features,
  cta,
  featured,
  solid,
  tag,
}: {
  name: string;
  amount: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  solid?: boolean;
  tag?: string;
}) {
  return (
    <div
      className={`relative mb-4 rounded-lg border bg-surface p-6 ${
        featured ? "border-[rgba(123,111,232,0.5)]" : "border-border"
      }`}
    >
      {tag && (
        <div className="absolute -top-px left-5 rounded-b-md border border-t-0 border-[rgba(245,166,35,0.25)] bg-amber-dim px-3 py-1 text-[11px] font-bold tracking-wider text-amber">
          {tag}
        </div>
      )}
      <div className="mb-4 flex items-start justify-between">
        <div className="text-base font-bold">{name}</div>
        <div className="text-right">
          <div className="text-[22px] font-bold leading-none text-primary-light">{amount}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">{period}</div>
        </div>
      </div>
      <hr className="my-4 border-0 border-t border-border" />
      <ul className="list-none">
        {features.map((f) => (
          <li key={f} className="py-1 text-[13px] text-muted-foreground">
            <span className="text-success">✓ </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#waitlist"
        className={`mt-4 block w-full cursor-pointer rounded-md p-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-85 ${
          solid
            ? "border-0 bg-primary text-primary-foreground"
            : "border border-border-hover bg-transparent text-foreground"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function NetworkEffect() {
  const nodes = [
    { h: "Sponsor evaluates", s: "pays $29 per eval" },
    { h: "Creator invited", s: "joins Kitscore" },
    { h: "Evidence added", s: "confidence rises" },
    { h: "Future decisions", s: "get stronger" },
  ];
  return (
    <SectionShell label="Network Effect">
      <div className="rounded-2xl border border-border bg-surface p-12 text-center">
        <h2 className="mb-2 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.025em]">
          Every evaluation improves the ecosystem.
        </h2>
        <p className="text-sm text-muted-foreground">
          The Kitscore flywheel: each sponsorship decision makes the next one stronger.
        </p>
        <div className="my-10 flex flex-wrap items-center justify-center gap-0 max-md:flex-col">
          {nodes.map((n, i) => (
            <div key={n.h} className="flex items-center max-md:flex-col">
              <div className="min-w-[120px] rounded-lg border border-border bg-surface-2 px-5 py-4 text-center">
                <div className="text-[13px] font-semibold">{n.h}</div>
                <div className="mt-1 text-[11px] font-normal text-muted-foreground">{n.s}</div>
              </div>
              {i < nodes.length - 1 && (
                <span className="px-1.5 text-lg text-primary-light max-md:rotate-90">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">
            More participants → better data → smarter sponsorship decisions for everyone.
          </strong>
        </p>
      </div>
    </SectionShell>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) return;
    setStatus("submitting");
    // Local success UX — wire to backend (Lovable Cloud) when ready.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  };

  return (
    <section id="waitlist" className="mx-auto max-w-[680px] px-8 pb-32 pt-24 text-center">
      <h2 className="mb-5 text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em]">
        Sponsorship Decisions
        <br />
        Need Proof
      </h2>
      <p className="text-base text-muted-foreground">Evaluate any creator before you spend budget.</p>
      <p className="text-base text-muted-foreground">Receive a readiness score instantly.</p>
      <p className="mb-9 mt-2 text-[1.05rem] font-semibold">
        Unlock the full sponsor evaluation for{" "}
        <span className="text-primary-light">$29</span>.
      </p>

      <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface p-7 text-left">
        <h3 className="mb-1 text-lg font-semibold">Get early access</h3>
        <p className="mb-5 text-sm text-muted-foreground">
          Join the waitlist — be the first to use Kitscore.
        </p>
        {status === "success" ? (
          <div className="rounded-md border border-[rgba(46,204,138,0.25)] bg-success-dim px-4 py-5 text-center">
            <div className="text-base text-success">✓ You're on the list</div>
            <div className="mt-1 text-xs text-muted-foreground">
              We'll email you when Kitscore opens.
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work@email.com"
              aria-label="Email"
              required
              className="rounded-full border border-border bg-[rgba(255,255,255,0.03)] px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              aria-label="Role"
              className="rounded-full border border-border bg-[rgba(255,255,255,0.03)] px-5 py-3 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="">I'm a...</option>
              <option value="creator">Creator</option>
              <option value="sponsor">Sponsor</option>
            </select>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-60"
            >
              {status === "submitting" ? "Joining…" : "Join waitlist"}
            </button>
            <div className="text-center text-xs text-muted-foreground">
              🔒 Get early access when Kitscore opens.
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-border px-8 py-6 text-[13px] text-muted-foreground sm:flex-row">
      <span>Kitscore.io · Sponsorship trust infrastructure</span>
      <span className="flex items-center gap-4">
        <a href="#" className="hover:text-foreground">
          Privacy
        </a>
        <span>© 2026</span>
      </span>
    </footer>
  );
}
