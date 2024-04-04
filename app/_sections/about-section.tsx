import Image from "next/image";





const AboutSection = () => {
  return (
    <section>
      <Image
        src="/bannerHome.png"
        alt="Taskenow Banner"
        width={0}
        height={0}
        className="h-auto w-full object-cover mb-5"
        sizes="100vw"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-5 ">
        <div className="flex flex-col items-center justify-center gap-y-4 text-center">
          <h1 className="text-2xl font-bold uppercase md:text-3xl">
            Thorough inspection
            to identify & resolve
            issues
          </h1>
          <p className="text-sm font-light dark:text-white/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever 
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default AboutSection;
