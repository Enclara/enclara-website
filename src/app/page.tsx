"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <TechHighlights />
      <OpenSource />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="animate-pulse-glow absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <GridPattern />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-sm text-cyan-400">
              Fully Homomorphic Encryption
            </span>
          </div>

          <h1 className="mb-6 max-w-3xl text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl">
            Medical AI that{" "}
            <span className="animate-gradient bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              never sees
            </span>{" "}
            your data
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            Enclara classifies skin lesions for cancer risk using a neural
            network running entirely on encrypted data. Your images stay private
            — even from our servers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
            >
              How it works
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="https://github.com/makingthingseu/enclara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View on GitHub
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950" />
    </section>
  );
}

function ProblemSection() {
  return (
    <Section>
      <SectionLabel>The Problem</SectionLabel>
      <SectionTitle>
        Medical AI demands your most sensitive data
      </SectionTitle>
      <SectionDescription>
        Dermatology AI tools require patients to upload unencrypted photos of
        their skin to third-party servers. These images are intimate, personally
        identifiable medical data — and once uploaded, patients lose control over
        how they are stored, accessed, or shared.
      </SectionDescription>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: (
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            ),
            title: "Data exposure",
            desc: "Traditional cloud AI requires decrypted access to patient images during inference. Servers see everything.",
          },
          {
            icon: (
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            ),
            title: "Regulatory burden",
            desc: "Healthcare providers face strict GDPR and HIPAA requirements that make cloud-based AI diagnosis a compliance minefield.",
          },
          {
            icon: (
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            ),
            title: "Broken trust",
            desc: "Patients avoid digital health tools when they cannot verify their data stays private. Adoption suffers.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
              <svg
                className="h-5 w-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SolutionSection() {
  return (
    <Section>
      <SectionLabel>The Solution</SectionLabel>
      <SectionTitle>Compute on encrypted data. Decrypt only results.</SectionTitle>
      <SectionDescription>
        Enclara uses Fully Homomorphic Encryption to run a neural network
        directly on encrypted patient images. The server performs the entire
        classification without ever decrypting the data — it never sees a single
        pixel.
      </SectionDescription>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/5 bg-navy-900/50 p-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Traditional Medical AI
          </h3>
          <div className="space-y-3">
            {[
              "Patient uploads plaintext image",
              "Server decrypts and processes",
              "Server has full access to medical data",
              "Trust the server, hope for the best",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs text-red-400">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-400">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Enclara with FHE
          </h3>
          <div className="space-y-3">
            {[
              "Patient encrypts image on their device",
              "Server runs AI on encrypted data",
              "Server returns encrypted results",
              "Only the patient can decrypt the diagnosis",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs text-cyan-400">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Capture & crop",
      desc: "The patient photographs a skin lesion and positions a 224\u00D7224 bounding box over the area of concern.",
    },
    {
      num: "02",
      title: "Patch, quantize & encrypt",
      desc: "The image is split into 49 patches (32\u00D732 each), quantized to 5-bit precision, and encrypted on-device using the patient\u2019s FHE secret key.",
    },
    {
      num: "03",
      title: "Encrypted inference",
      desc: "Each encrypted patch is sent to the server, which runs a modified VGG11 neural network entirely under FHE \u2014 no decryption occurs.",
    },
    {
      num: "04",
      title: "Decrypt results",
      desc: "The server returns 49 encrypted classification vectors. The client decrypts them and aggregates the final diagnosis across 7 skin cancer categories.",
    },
  ];

  return (
    <Section>
      <SectionLabel>Pipeline</SectionLabel>
      <SectionTitle>End-to-end encrypted diagnosis</SectionTitle>
      <SectionDescription>
        From camera to classification — your data stays encrypted at every step.
      </SectionDescription>

      <div className="relative mt-12">
        <div className="absolute top-0 bottom-0 left-[23px] hidden w-px bg-gradient-to-b from-cyan-500/50 via-teal-500/50 to-transparent md:block" />

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-6"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-navy-900 font-mono text-sm font-bold text-cyan-400">
                {step.num}
              </div>
              <div className="pt-1">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TechHighlights() {
  const highlights = [
    {
      title: "QuantVGG11Patch",
      desc: "5-bit quantized VGG11 variant built with Brevitas, compiled to an FHE circuit via Concrete-ML. All MaxPool replaced with AvgPool for FHE compatibility.",
    },
    {
      title: "Patch-based architecture",
      desc: "224\u00D7224 images split into a 7\u00D77 grid of 32\u00D732 patches. Each patch is encrypted and classified independently, then aggregated client-side.",
    },
    {
      title: "7-class classification",
      desc: "Trained on HAM10000 (10,015 dermoscopic images) across akiec, bcc, bkl, df, mel, nv, and vasc \u2014 covering the major skin cancer categories.",
    },
    {
      title: "One-time key generation",
      desc: "Secret key and evaluation key generated once on first launch. The evaluation key is uploaded to the server; subsequent scans reference the stored key.",
    },
  ];

  return (
    <Section>
      <SectionLabel>Technical depth</SectionLabel>
      <SectionTitle>Built for real FHE inference</SectionTitle>
      <SectionDescription>
        Not a demo — a working encrypted neural network for medical image
        classification.
      </SectionDescription>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="group rounded-xl border border-white/5 bg-navy-900/50 p-6 transition-colors hover:border-cyan-500/20"
          >
            <h3 className="mb-2 font-mono text-sm font-semibold text-cyan-400">
              {h.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/technology"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Deep dive into the architecture
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}

function OpenSource() {
  return (
    <Section>
      <SectionLabel>Open Source</SectionLabel>
      <SectionTitle>Inspect every line</SectionTitle>
      <SectionDescription>
        Privacy claims you can&apos;t verify are just marketing. Our entire
        pipeline — model training, FHE compilation, client encryption, and
        server inference — is open source. The code is the proof.
      </SectionDescription>

      <div className="mt-8">
        <Link
          href="https://github.com/makingthingseu/enclara"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:bg-white/10"
        >
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <div>
            <div className="text-sm font-semibold text-white">
              makingthingseu/enclara
            </div>
            <div className="text-xs text-slate-400">
              FHE model, training pipeline, client &amp; server code
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Privacy is not a feature. It&apos;s the architecture.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-400">
          Enclara proves that medical AI can be both accurate and
          cryptographically private. No trust required — verify it yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Read the technical deep dive
          </Link>
          <Link
            href="https://github.com/makingthingseu/enclara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore the code
          </Link>
        </div>
      </div>
    </section>
  );
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0v40"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
