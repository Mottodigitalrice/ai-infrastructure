import {
  Database,
  Server,
  Bot,
  Cpu,
  Search,
  Wrench,
  Rocket,
  Shield,
  RefreshCw,
  Lock,
  ArrowRight,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const layers = [
  {
    icon: Database,
    title: "Data Layer",
    subtitle: "Where your company data lives",
    description:
      "A structured, AI-readable knowledge base that grows with your business. Your documents, processes, and institutional knowledge — organized so AI can actually use it.",
    recommendations: ["Notion + Google Drive", "Supabase + Google Drive for larger orgs"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Server,
    title: "Environment",
    subtitle: "The infrastructure that runs it all",
    description:
      "A private, managed server environment with Docker containers, MCP services, and secure access controls. Your AI tools run on your infrastructure, not someone else's.",
    recommendations: ["VPS / Cloud server", "Docker containers", "MCP protocol services"],
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Bot,
    title: "Agent Framework",
    subtitle: "The operating system for AI",
    description:
      "Custom prompts, specialized agents, and reusable skills tailored to your business operations. This is what turns a generic AI into your AI — one that knows your processes, your tone, your standards.",
    recommendations: ["Custom system prompts", "Specialized agents", "Reusable skill libraries"],
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Cpu,
    title: "AI Model",
    subtitle: "Swap models without rebuilding",
    description:
      "Model-agnostic by design. Use Claude, GPT, Gemini, open-source models — or switch between them as the market evolves. No vendor lock-in, ever.",
    recommendations: ["Claude, GPT, Gemini, Llama", "Switch freely as models improve", "No vendor lock-in"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Audit",
    description:
      "We assess your current tools, workflows, and data. We identify what AI can automate, what needs restructuring, and where the biggest wins are.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Build",
    description:
      "We set up your 4-layer stack — data organized, environment deployed, agents configured, model connected. Everything tailored to your business.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    description:
      "Your team gets trained on the new system. We provide documentation, support, and iteration as you start using AI across your operations.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Future-Proof",
    description:
      "AI models change every month. Your infrastructure stays stable. Swap models, add capabilities, scale up — without rebuilding from scratch.",
  },
  {
    icon: RefreshCw,
    title: "No Vendor Lock-In",
    description:
      "Your data, your server, your prompts. Nothing is trapped inside a single provider. You own every layer of the stack.",
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    description:
      "Everything runs on infrastructure you control. No training on your data, no third-party access, no surprises. Enterprise-grade privacy by default.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[oklch(0.145_0_0)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.25_0.05_260)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36 text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-1.5">
            <Layers className="mr-1.5 h-3.5 w-3.5" />
            AI Infrastructure Package
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Future-proof your company
            <br />
            <span className="text-[oklch(0.75_0.15_260)]">for the AI era</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            A modular, 4-layer infrastructure stack that gives your business a
            real AI foundation — not just another chatbot subscription.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#stack"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              See the Stack
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI tools without AI infrastructure
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Most businesses are adopting AI piecemeal — a ChatGPT subscription
            here, a Copilot license there. But without a proper foundation,
            every new tool creates another silo. Your data stays fragmented,
            your workflows stay manual, and you&apos;re locked into whatever vendor
            you started with.
          </p>
          <Separator className="mx-auto mt-10 max-w-xs" />
          <p className="mt-10 text-lg font-medium text-zinc-900">
            What you need isn&apos;t another AI tool.
            <br />
            You need the infrastructure to make <em>any</em> AI tool work for you.
          </p>
        </div>
      </section>

      {/* The 4-Layer Stack */}
      <section id="stack" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The 4-Layer Stack
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Each layer is modular — upgrade, swap, or extend any part without
              touching the rest.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {layers.map((layer) => (
              <Card key={layer.title} className="relative overflow-hidden border-zinc-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-lg p-2.5 ${layer.bgColor}`}>
                      <layer.icon className={`h-6 w-6 ${layer.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{layer.title}</h3>
                      <p className="text-sm text-zinc-500">{layer.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                    {layer.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.recommendations.map((rec) => (
                      <Badge key={rec} variant="outline" className="text-xs font-normal">
                        {rec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Three steps from assessment to a fully operational AI stack.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Step {s.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Approach */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why This Approach
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Built for the long term, not just today&apos;s hype cycle.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                  <b.icon className="h-5 w-5 text-zinc-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="contact" className="bg-[oklch(0.145_0_0)] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your AI foundation?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Let&apos;s talk about what AI infrastructure looks like for your business.
          </p>
          <div className="mt-10">
            <a
              href="mailto:lewis@mottodigital.jp"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-12 text-sm text-zinc-500">
            MOTTO Digital &middot; AI Infrastructure &amp; Consulting
          </p>
        </div>
      </section>
    </main>
  );
}
