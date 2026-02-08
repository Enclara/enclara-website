"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Mission />
      <Team />
      <WhatWereBuilding />
      <Roadmap />
      <Contact />
    </>
  );
}

function Header() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute top-0 left-0 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>About</SectionLabel>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Making medical AI private by default
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Enclara exists because patients shouldn&apos;t have to choose between
            AI-powered healthcare and data privacy. We believe these should be
            the same thing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <Section>
      <SectionLabel>Mission</SectionLabel>
      <SectionTitle>Privacy through math, not policy</SectionTitle>
      <SectionDescription>
        Most privacy solutions are legal promises — terms of service, data
        processing agreements, compliance certifications. These are important,
        but they rely on trust. Enclara takes a different approach: the server
        <em> cannot</em> see patient data, not because of a policy, but because
        of the mathematics of Fully Homomorphic Encryption.
      </SectionDescription>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Cryptographic guarantee",
            desc: "Patient data is encrypted with a secret key that never leaves their device. Without it, the data is computationally indistinguishable from random noise.",
          },
          {
            title: "Verifiable privacy",
            desc: "Our entire pipeline is open source. Anyone can inspect the code, verify that no plaintext data is transmitted, and audit the FHE circuit.",
          },
          {
            title: "Practical utility",
            desc: "We chose skin cancer classification because it\u2019s a real clinical need with severe privacy implications — this isn\u2019t a toy demo.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
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

function Team() {
  const members = [
    {
      name: "Edward Wei",
      role: "Co-Founder",
      bio: "MEng General Engineering at the University of Cambridge (Churchill College). Churchill Scholar, Bill Brown Prize and Kevin Knowles Prize winner. ASIC design intern at Renesas Electronics, working with Cadence tools on analog circuit design and SystemVerilog/UVM verification. Research intern at the Cambridge Division of Electrical Engineering, co-authoring work on nanoparticle optical filters. 0xPARC Summer 2025 alumnus \u2014 selected for the premier applied cryptography research program at the frontier of FHE, zero-knowledge proofs, and multi-party computation. Trained for the Asian Physics Olympiad through the Hong Kong Academy for Gifted Education.",
      link: "https://www.linkedin.com/in/edward-wei-4b4972227/",
      linkLabel: "LinkedIn",
    },
    {
      name: "Leo Hammett",
      role: "Co-Founder",
      bio: "MEng Manufacturing Engineering at the University of Cambridge (Sidney Sussex College). Full-stack engineer across Python, TypeScript, C++, and Swift with production experience at AbbVie Pharmaceuticals as an AI Data Engineer. Multiple first-place hackathon finishes including Tezos and Polkadot, with over $6,500 in prizes. Arkwright Engineering Scholar.",
      link: "https://www.leohammett.com/cv",
      linkLabel: "CV",
    },
  ];

  return (
    <Section>
      <SectionLabel>Team</SectionLabel>
      <SectionTitle>Built by researchers, not just engineers</SectionTitle>
      <SectionDescription>
        Enclara isn&apos;t a wrapper around an open-source library. Edward&apos;s
        selection for{" "}
        <Link
          href="https://0xparc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline decoration-cyan-400/30 hover:decoration-cyan-400"
        >
          0xPARC
        </Link>
        &nbsp;&mdash; the research program behind foundational advances in
        programmable cryptography including FHE, ZK, and MPC &mdash; means we
        operate at the level of the cryptographic primitives themselves. Combined
        with hardware-level engineering and systems research at Cambridge, this
        team has the rare intersection of applied cryptography depth and
        full-stack execution speed needed to ship production FHE.
      </SectionDescription>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
            <div className="mb-1 flex items-center gap-3">
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400">
                {m.role}
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-slate-400">
              {m.bio}
            </p>
            <Link
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              {m.linkLabel} &rarr;
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhatWereBuilding() {
  return (
    <Section>
      <SectionLabel>The project</SectionLabel>
      <SectionTitle>What we&apos;ve built</SectionTitle>

      <div className="mt-10 space-y-6">
        {[
          {
            title: "FHE-compatible neural network",
            desc: "A 5-bit quantized VGG11 variant (QuantVGG11Patch) trained on HAM10000 and compiled to an FHE circuit via Concrete-ML and Brevitas. Classifies skin lesions into 7 diagnostic categories entirely under encryption.",
          },
          {
            title: "Patch-based inference system",
            desc: "224\u00D7224 images split into a 7\u00D77 grid of 32\u00D732 patches. Each patch is independently encrypted, transmitted, and classified. Client-side aggregation combines the 49 results into a final diagnosis.",
          },
          {
            title: "iOS client application",
            desc: "A SwiftUI app that handles key generation, image capture and cropping, patch encryption via PythonKit bridge to Concrete-ML, and result decryption. Keys are generated once and reused across scans.",
          },
          {
            title: "Encrypted inference server",
            desc: "An AWS EC2 backend that stores evaluation keys and runs the FHE circuit on encrypted patches. It processes data it cannot read and returns results it cannot interpret.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
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

function Roadmap() {
  return (
    <Section>
      <SectionLabel>Vision</SectionLabel>
      <SectionTitle>Where this goes</SectionTitle>
      <SectionDescription>
        Skin cancer classification is the first application. The underlying
        architecture — encrypted neural network inference on medical images —
        generalizes to any diagnostic imaging domain where patient privacy is
        critical.
      </SectionDescription>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Beyond dermatology",
            desc: "The same FHE inference pipeline can be adapted for radiology, ophthalmology, pathology, and other imaging-based specialties where patients need AI assistance without data exposure.",
          },
          {
            title: "Regulatory advantage",
            desc: "When the server mathematically cannot access patient data, GDPR and HIPAA compliance becomes architecturally simpler. Data protection is built into the system, not bolted on.",
          },
          {
            title: "Enterprise deployment",
            desc: "Hospitals and clinics can use AI diagnostic tools without building their own ML infrastructure or risking patient data in third-party clouds.",
          },
          {
            title: "Performance optimization",
            desc: "As FHE libraries and hardware accelerators improve, inference times will drop. The architecture is ready — we\u2019re limited by FHE compute speed, not design.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
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

function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Open source. Open to collaboration.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-400">
          Enclara is fully open source. If you&apos;re working on FHE, medical
          AI, or privacy-preserving computation, we&apos;d love to hear from you.
        </p>
        <Link
          href="https://github.com/orgs/Enclara/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
        >
          View on GitHub
        </Link>
      </div>
    </section>
  );
}
