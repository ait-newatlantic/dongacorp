"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  vi: {
    // Hero Section
    "hero.badge": "Tự hào là nhà xuất nhập khẩu Đông Á tốt nhất",
    "hero.company.line1": "CÔNG TY CỔ PHẦN TM DỊCH VỤ",
    "hero.company.line2": "VẬN TẢI XUẤT NHẬP KHẨU",
    "hero.company.line3": "ĐÔNG Á",
    "hero.description": "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi",
    "hero.contact": "Liên hệ",
    "hero.about": "Về chúng tôi",

    // Features
    "features.title": "Về chúng tôi",
    "features.badge": "Tự hào là nhà xuất nhập khẩu Đông Á tốt nhất",
    "features.company.name": "CÔNG TY CỔ PHẦN TM DỊCH VỤ VẬN TẢI",
    "features.company.highlight": "XUẤT NHẬP KHẨU ĐÔNG Á",
    "features.card1.title": "Chuyên môn cốt lõi",
    "features.card1.desc": "Chuyên về kinh doanh xuất nhập khẩu và gia công cơ khí với kinh nghiệm nhiều năm trong ngành.",
    "features.card2.title": "Vận tải chuyên nghiệp",
    "features.card2.desc": "Cung cấp dịch vụ vận tải hàng hóa xuất nhập khẩu chuyên nghiệp, đảm bảo an toàn và đúng hạn.",
    "features.card3.title": "Gia công uy tín",
    "features.card3.desc": "Là nhà cung cấp dịch vụ gia công cơ khí chuyên nghiệp và uy tín hàng đầu trong khu vực.",
    "features.card4.title": "Đội ngũ xuất sắc",
    "features.card4.desc": "Đội ngũ nhân viên chuyên nghiệp và giàu kinh nghiệm, luôn mang đến dịch vụ tốt nhất cho khách hàng.",
    "features.service1.title": "Kinh doanh xuất nhập khẩu",
    "features.service1.desc": "Cung cấp dịch vụ xuất nhập khẩu hàng hóa chuyên nghiệp, đảm bảo an toàn và đúng hạn với mạng lưới đối tác toàn cầu.",
    "features.service2.title": "Gia công cơ khí",
    "features.service2.desc": "Dịch vụ gia công cơ khí chính xác với công nghệ hiện đại, đáp ứng mọi yêu cầu kỹ thuật khắt khe của khách hàng.",
    "features.service3.title": "Vận tải logistics",
    "features.service3.desc": "Hệ thống vận tải đa phương thức, tối ưu hóa chi phí và thời gian giao hàng cho mọi loại hình doanh nghiệp.",

    // CTA
    "cta.title": "Để giải đáp mọi thắc mắc vui lòng liên hệ với chúng tôi",
    "cta.button": "Liên hệ",

    // Footer
    "footer.copyright": "DongA Corp - All right reserved.",
    "footer.address": "156 Đ. Nam Kỳ Khởi Nghĩa, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    "footer.taxcode": "MST: 0314304520",
    "footer.product": "Sản phẩm",
    "footer.product.features": "Tính năng",
    "footer.product.integrations": "Tích hợp",
    "footer.product.pricing": "Giá cả & Kế hoạch",
    "footer.product.changelog": "Nhật ký thay đổi",
    "footer.product.method": "Phương pháp của chúng tôi",
    "footer.company": "Công ty",
    "footer.company.about": "Về chúng tôi",
    "footer.company.diversity": "Đa dạng & Hòa nhập",
    "footer.company.blog": "Blog",
    "footer.company.careers": "Nghề nghiệp",
    "footer.company.financial": "Báo cáo tài chính",
    "footer.resources": "Tài nguyên",
    "footer.resources.community": "Cộng đồng",
    "footer.resources.terms": "Điều khoản dịch vụ",
    "footer.resources.report": "Báo cáo lỗ hổng",
    "footer.social": "Mạng xã hội",
    "footer.bigtext": "Đơn giản",

    // Portfolio
    "portfolio.badge": "Tự hào là nhà xuất nhập khẩu Đông Á tốt nhất",
    "portfolio.name": "Ông Lê Quang Hùng",
    "portfolio.title": "Giám đốc điều hành",
    "portfolio.featured": "Thông tin nổi bật",
    "portfolio.fullname": "Họ và tên",
    "portfolio.role": "Chức danh",
    "portfolio.company": "CÔNG TY CỔ PHẦN TM DỊCH VỤ VẬN TẢI XUẤT NHẬP KHẨU ĐÔNG Á",
    "portfolio.company.full": "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ VẬN TẢI XUẤT NHẬP KHẨU ĐÔNG Á",
    "portfolio.contact": "Liên hệ & Thông tin",
    "portfolio.phone": "Điện thoại",
    "portfolio.email": "Email",
    "portfolio.website": "Website",
    "portfolio.address": "Địa chỉ",
    "portfolio.address.full": "156 Đường Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
  },
  en: {
    // Hero Section
    "hero.badge": "Proud to be the best East Asia import-export company",
    "hero.company.line1": "DONG A IMPORT EXPORT",
    "hero.company.line2": "TRANSPORT SERVICE",
    "hero.company.line3": "TRADING CORPORATION",
    "hero.description": "Customer satisfaction is our top priority",
    "hero.contact": "Contact",
    "hero.about": "About Us",

    // Features
    "features.title": "About Us",
    "features.badge": "Proud to be the best East Asia import-export company",
    "features.company.name": "DONG A IMPORT EXPORT TRANSPORT SERVICE",
    "features.company.highlight": "TRADING CORPORATION",
    "features.card1.title": "Core Expertise",
    "features.card1.desc": "Specializing in import-export business and mechanical processing with many years of industry experience.",
    "features.card2.title": "Professional Transportation",
    "features.card2.desc": "Providing professional import-export cargo transportation services, ensuring safety and on-time delivery.",
    "features.card3.title": "Reputable Processing",
    "features.card3.desc": "Leading professional and reputable mechanical processing service provider in the region.",
    "features.card4.title": "Excellent Team",
    "features.card4.desc": "Professional and experienced staff, always bringing the best service to customers.",
    "features.service1.title": "Import-Export Business",
    "features.service1.desc": "Providing professional import-export services, ensuring safety and on-time delivery with a global partner network.",
    "features.service2.title": "Mechanical Processing",
    "features.service2.desc": "Precision mechanical processing services with modern technology, meeting all strict technical requirements of customers.",
    "features.service3.title": "Logistics Transportation",
    "features.service3.desc": "Multi-modal transportation system, optimizing costs and delivery time for all types of businesses.",

    // CTA
    "cta.title": "For any questions, please contact us",
    "cta.button": "Contact",

    // Footer
    "footer.copyright": "DongA Corp - All rights reserved.",
    "footer.address": "156 Nam Ky Khoi Nghia St., Ben Nghe Ward, District 1, Ho Chi Minh City, Vietnam",
    "footer.taxcode": "Tax Code: 0314304520",
    "footer.product": "Product",
    "footer.product.features": "Features",
    "footer.product.integrations": "Integrations",
    "footer.product.pricing": "Pricing & Plans",
    "footer.product.changelog": "Changelog",
    "footer.product.method": "Our Method",
    "footer.company": "Company",
    "footer.company.about": "About Us",
    "footer.company.diversity": "Diversity & Inclusion",
    "footer.company.blog": "Blog",
    "footer.company.careers": "Careers",
    "footer.company.financial": "Financial Reports",
    "footer.resources": "Resources",
    "footer.resources.community": "Community",
    "footer.resources.terms": "Terms of Service",
    "footer.resources.report": "Report Vulnerability",
    "footer.social": "Social Media",
    "footer.bigtext": "Simple",

    // Portfolio
    "portfolio.badge": "Proud to be the best East Asia import-export company",
    "portfolio.name": "Mr Le Quang Hung",
    "portfolio.title": "Managing Director",
    "portfolio.featured": "Featured Information",
    "portfolio.fullname": "Full name",
    "portfolio.role": "Role",
    "portfolio.company": "DONG A IMPORT EXPORT TRANSPORT SERVICE TRADING CORPORATION",
    "portfolio.company.full": "DONG A IMPORT EXPORT TRANSPORT SERVICE TRADING CORPORATION",
    "portfolio.contact": "Contact & Bio",
    "portfolio.phone": "Phone",
    "portfolio.email": "Email",
    "portfolio.website": "Website",
    "portfolio.address": "Address",
    "portfolio.address.full": "156 Nam Ky Khoi Nghia St., Sai Gon Ward, Ho Chi Minh City, Vietnam",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.vi] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
