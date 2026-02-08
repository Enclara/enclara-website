"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Section,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section";

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <FHEExplainer />
      <ModelArchitecture />
      <PipelineDetail />
      <FHEAdaptations />
      <ClientServer />
      <WhyItMatters />
    </>
  );
}

function Header() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Technology</SectionLabel>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            How Enclara runs AI on encrypted medical images
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            A deep dive into the cryptography, model design, and system
            architecture that makes private diagnosis possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FHEExplainer() {
  return (
    <Section>
      <SectionLabel>Primer</SectionLabel>
      <SectionTitle>What is Fully Homomorphic Encryption?</SectionTitle>
      <SectionDescription>
        FHE is a form of encryption that allows computation on ciphertext.
        The result, when decrypted, matches the result of performing the same
        operations on the plaintext — but no one except the key holder ever
        sees the unencrypted data.
      </SectionDescription>

      <div className="mt-10 rounded-xl border border-white/5 bg-navy-900/50 p-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: "Encrypt",
              desc: "Data is encrypted client-side with a secret key. It becomes mathematically opaque to anyone without the key.",
              color: "text-cyan-400",
            },
            {
              step: "Compute",
              desc: "The server performs additions and multiplications directly on the encrypted values. It processes data it cannot read.",
              color: "text-teal-400",
            },
            {
              step: "Decrypt",
              desc: "The encrypted result is returned to the client. Only the secret key holder can decrypt the output.",
              color: "text-green-400",
            },
          ].map((item, i) => (
            <div key={item.step}>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-sm font-bold text-slate-300">
                  {i + 1}
                </span>
                <h3 className={`font-mono text-sm font-bold ${item.color}`}>
                  {item.step}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-white/5 bg-navy-950/50 p-4">
          <p className="font-mono text-xs leading-relaxed text-slate-500">
            Enc(x) + Enc(y) = Enc(x + y) &nbsp;&nbsp;|&nbsp;&nbsp;
            Enc(x) * Enc(y) = Enc(x * y)
            <br />
            The server sees ciphertext. The math still works. The patient sees results.
          </p>
        </div>
      </div>
    </Section>
  );
}

function ModelArchitecture() {
  return (
    <Section>
      <SectionLabel>Model</SectionLabel>
      <SectionTitle>QuantVGG11Patch</SectionTitle>
      <SectionDescription>
        A 5-bit quantized VGG11 variant purpose-built for FHE. Every layer is
        chosen to be compatible with encrypted arithmetic.
      </SectionDescription>

      <div className="mt-10 space-y-6">
        <div className="overflow-x-auto rounded-xl border border-white/5 bg-navy-900/50">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-3 font-mono text-xs font-medium text-cyan-400">
                  Standard VGG11
                </th>
                <th className="px-6 py-3 font-mono text-xs font-medium text-slate-500">
                  &rarr;
                </th>
                <th className="px-6 py-3 font-mono text-xs font-medium text-teal-400">
                  QuantVGG11Patch (FHE)
                </th>
                <th className="px-6 py-3 font-mono text-xs font-medium text-slate-500">
                  Why
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-white/5">
                <td className="px-6 py-3">Conv2d</td>
                <td className="px-6 py-3 text-slate-600">&rarr;</td>
                <td className="px-6 py-3 text-slate-300">QuantConv2d (5-bit weights)</td>
                <td className="px-6 py-3">Reduces multiplication depth</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-6 py-3">ReLU</td>
                <td className="px-6 py-3 text-slate-600">&rarr;</td>
                <td className="px-6 py-3 text-slate-300">QuantReLU (5-bit activations)</td>
                <td className="px-6 py-3">Bounded activations for FHE polynomial approx</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-6 py-3">MaxPool2d</td>
                <td className="px-6 py-3 text-slate-600">&rarr;</td>
                <td className="px-6 py-3 text-slate-300">AvgPool2d</td>
                <td className="px-6 py-3">Max is a comparison — expensive in FHE</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="px-6 py-3">FC layers (4096, 4096, 1000)</td>
                <td className="px-6 py-3 text-slate-600">&rarr;</td>
                <td className="px-6 py-3 text-slate-300">Single QuantLinear(512, 7)</td>
                <td className="px-6 py-3">Fewer parameters = faster encrypted inference</td>
              </tr>
              <tr>
                <td className="px-6 py-3">224&times;224 input</td>
                <td className="px-6 py-3 text-slate-600">&rarr;</td>
                <td className="px-6 py-3 text-slate-300">32&times;32 patch input</td>
                <td className="px-6 py-3">Smaller input = manageable FHE circuit size</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-white/5 bg-navy-900/50 p-6">
          <h3 className="mb-2 font-mono text-sm font-semibold text-cyan-400">
            PatchAggregator
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            The aggregation layer sits outside the FHE circuit. It takes the 49
            per-patch classification vectors (each with 7 logits), computes the
            max logit per class across all patches, and returns the final
            diagnosis. This runs in plaintext on the client after decryption —
            no encrypted comparisons needed.
          </p>
        </div>
      </div>
    </Section>
  );
}

function PipelineDetail() {
  return (
    <Section>
      <SectionLabel>Pipeline</SectionLabel>
      <SectionTitle>From training to encrypted inference</SectionTitle>

      <div className="mt-10 space-y-8">
        <PipelineStep
          num="01"
          title="Train"
          file="train.py"
          items={[
            "Fine-tune QuantVGG11Patch on HAM10000 (10,015 dermoscopic images, 7 classes)",
            "Initialize conv layers from pretrained ImageNet VGG11 weights",
            "Split train/val by lesion_id to prevent data leakage between patients",
            "Inverse-frequency class weighting handles severe class imbalance",
          ]}
        />
        <PipelineStep
          num="02"
          title="Compile to FHE"
          file="fhe_convert.py"
          items={[
            "Load trained weights into QuantVGG11Patch",
            "Build calibration dataset from random validation patches",
            "Compile to FHE circuit via Concrete-ML\u2019s compile_brevitas_qat_model",
            "Optionally sweep rounding_threshold_bits (8\u21924) for speed/accuracy tradeoffs",
            "Outputs client.zip (quantization params + keys) and server circuit",
          ]}
        />
        <PipelineStep
          num="03"
          title="Client encryption"
          file="Mobile app"
          items={[
            "On first launch: generate FHE secret key + evaluation key via Concrete-ML",
            "Upload evaluation key to server with a random client ID for reuse",
            "For each scan: crop to 224\u00D7224, split into 49 patches (32\u00D732)",
            "Quantize each patch per client.zip parameters, encrypt, send one-by-one",
          ]}
        />
        <PipelineStep
          num="04"
          title="Server inference"
          file="AWS EC2"
          items={[
            "Receive 49 encrypted patches + client ID",
            "Load evaluation key for that client",
            "Run FHE circuit on each encrypted patch",
            "Return 49 encrypted classification vectors (7 logits each)",
          ]}
        />
      </div>
    </Section>
  );
}

function PipelineStep({
  num,
  title,
  file,
  items,
}: {
  num: string;
  title: string;
  file: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-navy-950 font-mono text-sm font-bold text-cyan-400">
          {num}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="font-mono text-xs text-slate-500">{file}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/50" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FHEAdaptations() {
  return (
    <Section>
      <SectionLabel>Design decisions</SectionLabel>
      <SectionTitle>Why every choice exists</SectionTitle>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          {
            q: "Why patches instead of the full image?",
            a: "FHE circuit complexity grows with input size. A 32\u00D732 patch keeps the circuit small enough for practical inference times. The 7\u00D77 grid covers the full 224\u00D7224 image.",
          },
          {
            q: "Why 5-bit quantization?",
            a: "Lower bit-width reduces the multiplicative depth of the encrypted circuit. 5 bits is the sweet spot where model accuracy is preserved while FHE computation remains feasible.",
          },
          {
            q: "Why AvgPool instead of MaxPool?",
            a: "Max requires comparison operations, which are extremely expensive in FHE (they require many encrypted multiplications). Average pooling uses only additions and a constant division.",
          },
          {
            q: "Why a single linear classifier?",
            a: "VGG11 normally has 3 fully-connected layers with 4096 neurons each. Each encrypted multiplication adds latency. A single QuantLinear(512, 7) minimizes the FC overhead.",
          },
          {
            q: "Why send patches one-by-one?",
            a: "Each encrypted patch is large (the evaluation key alone is significant). Sending patches sequentially keeps memory manageable on both client and server.",
          },
          {
            q: "Why client-side aggregation?",
            a: "The PatchAggregator takes the max logit per class across 49 patches. Max is a comparison — doing this in FHE would be expensive. In plaintext after decryption, it\u2019s trivial.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-xl border border-white/5 bg-navy-900/50 p-6"
          >
            <h3 className="mb-2 text-sm font-semibold text-white">{item.q}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ClientServer() {
  return (
    <Section>
      <SectionLabel>Architecture</SectionLabel>
      <SectionTitle>Client-server trust model</SectionTitle>

      <div className="mt-10 rounded-xl border border-white/5 bg-navy-900/50 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-sm font-bold text-cyan-400">
              Client (iOS app)
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                Holds secret key — never leaves device
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                Generates evaluation key (public, sent to server once)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                Encrypts patches, decrypts results
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                Runs PatchAggregator in plaintext
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                Stores scan history locally as JSON
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm font-bold text-teal-400">
              Server (AWS EC2)
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                Holds only evaluation keys and FHE circuit
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                Cannot decrypt any patient data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                Processes encrypted patches through FHE circuit
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                Returns encrypted classification vectors
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                Stateless per-inference — no patient data stored
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
          <p className="text-sm text-cyan-300">
            <strong>Key insight:</strong> Even a compromised server reveals nothing.
            Without the secret key, the encrypted patches and results are
            computationally indistinguishable from random noise.
          </p>
        </div>
      </div>
    </Section>
  );
}

function WhyItMatters() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Programmable Cryptography</SectionLabel>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Cryptography as a cooperation tool
          </h2>
          <p className="mb-8 text-lg text-slate-400">
            FHE transforms the trust model for medical AI. Instead of asking
            patients to trust a server, Enclara lets them verify mathematically
            that their data was never exposed. This is what programmable
            cryptography unlocks — useful computation between parties who
            don&apos;t need to trust each other.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/makingthingseu/enclara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Explore the source code
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              About the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
