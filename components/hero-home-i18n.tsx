"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { useLanguage } from "@/contexts/language-context";

export default function HeroHome() {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-8" data-aos="fade-up">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 px-6 py-3 text-base font-semibold text-blue-600 border border-blue-500/30 shadow-sm">
                {t("hero.badge")}
              </span>
            </div>
            <h1
              className="mb-12 border-y py-6 text-4xl font-bold leading-tight [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl lg:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t("hero.company.line1")}
              <br />
              {t("hero.company.line2")}
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {t("hero.company.line3")}
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-base text-gray-600 italic"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t("hero.description")}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="mailto:contact@dongacorp.com.vn"
                  >
                    <span className="relative inline-flex items-center">
                      {t("hero.contact")}
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#about"
                  >
                    {t("hero.about")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <Image
              className="relative aspect-video rounded-2xl px-5 py-3"
              src="/images/banner.webp"
              alt="banner"
              width={1200}
              height={675}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
