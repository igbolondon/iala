import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  height?: "sm" | "md" | "lg" | "xl";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image = "src/assets/community.JPG",
  children,
  height = "lg",
}) => {
  const heightClasses = {
    sm: "h-64",
    md: "h-80",
    lg: "h-96",
    xl: "h-screen",
  };

  return (
    <div
      className={`relative ${heightClasses[height]} bg-gradient-to-t from-[#007A33] to-green-100 overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl md:text-2xl text-green-100 mb-6">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
