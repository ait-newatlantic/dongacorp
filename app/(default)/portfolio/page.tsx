import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-20">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500"></div>
          <Image
            src="/images/banner.webp"
            alt="Banner"
            fill
            className="object-cover opacity-30"
          />
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative -mt-20 pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                {/* Profile Photo */}
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-500 text-4xl font-bold text-white">
                    LQH
                  </div>
                </div>

                {/* Company Logo */}
                <div className="mb-6 flex justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Dong A Logo"
                    width={100}
                    height={33}
                    className="h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              {/* Featured Information Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="mb-8 border-b pb-6">
                  <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    Mr Le Quang Hung
                  </h1>
                  <p className="text-xl text-gray-600">Managing Director</p>
                </div>

                {/* Featured Information */}
                <div>
                  <div className="mb-4 rounded-lg bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <span>Featured Information</span>
                  </div>

                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-700">
                        Full name <span className="text-red-500">*</span>
                      </p>
                      <p className="text-gray-900">Mr Le Quang Hung</p>
                    </div>

                    {/* Title */}
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-700">
                        Chức danh
                      </p>
                      <p className="text-gray-900">Managing Director</p>
                    </div>

                    {/* Company */}
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-700">
                        Company
                      </p>
                      <p className="text-gray-900">DONG A IMPORT EXPORT TRANSPORT SERVICE TRADING CORPORATION</p>
                    </div>

                    {/* Phone */}
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-700">
                        Phone
                      </p>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-5 w-5 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="text-gray-900">+ (84) 91 86 88 168</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Bio Card - Separate */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="mb-8 border-b border-blue-600 pb-6">
                  <h1 className="text-3xl font-bold text-gray-600 leading-tight">
                    DONG A IMPORT EXPORT TRANSPORT SERVICE TRADING CORPORATION
                  </h1>
                </div>

                <div className="mb-4 rounded-lg bg-gray-50 px-4 py-3 font-medium text-gray-700">
                  <span>Contact & Bio</span>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      Email
                    </p>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-900">info@dongacorp.com.vn</span>
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      Website
                    </p>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span className="text-gray-900">www.dongacorp.com.vn</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      Address
                    </p>
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-900">
                        156 Nam Ky Khoi Nghia, Sai Gon Ward, Ho Chi Minh City,
                        Viet Nam
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
