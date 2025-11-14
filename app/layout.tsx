import "./css/style.css";

export const metadata = {
  title: "DongA Corp",
  description: "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-gray-50 tracking-tight text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
