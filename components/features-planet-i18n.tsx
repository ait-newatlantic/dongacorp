"use client";

import Image from "next/image";
import PlanetImg from "@/public/images/car.webp";
import { useLanguage } from "@/contexts/language-context";

export default function FeaturesPlanet() {
  const { t } = useLanguage();

  return (
    <section
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
      id="about"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-4xl pb-12 md:pb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-200 md:text-3xl mb-3">
                {t("features.title")}
              </h2>
              <div className="inline-block">
                <span className="text-sm md:text-base font-semibold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/30">
                  {t("features.badge")}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Company Name */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                  {t("features.company.name")}
                  <br className="hidden md:block" />
                  <span className="text-blue-400">
                    {" "}
                    {t("features.company.highlight")}
                  </span>
                </h3>
              </div>

              {/* Description Cards */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-base font-bold">
                          1
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-200 mb-1">
                        {t("features.card1.title")}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t("features.card1.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-base font-bold">
                          2
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-200 mb-1">
                        {t("features.card2.title")}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t("features.card2.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-base font-bold">
                          3
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-200 mb-1">
                        {t("features.card3.title")}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t("features.card3.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-base font-bold">
                          4
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-200 mb-1">
                        {t("features.card4.title")}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {t("features.card4.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image src={PlanetImg} width={400} height={400} alt="Planet" />
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article data-aos="fade-up">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-500">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-200">
                {t("features.service1.title")}
              </h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                {t("features.service1.desc")}
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={100}>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-500">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-200">
                {t("features.service2.title")}
              </h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                {t("features.service2.desc")}
              </p>
            </article>
            <article data-aos="fade-up" data-aos-delay={200}>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-500">
                <svg
                  className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                >
                  <path d="M16 0c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2h-5v2h3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h3v-2H4c-1.103 0-2-.897-2-2V2c0-1.103.897-2 2-2h12zm0 2H4v10h12V2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-200">
                {t("features.service3.title")}
              </h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                {t("features.service3.desc")}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
