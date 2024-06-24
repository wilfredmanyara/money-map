import React from 'react';

interface ResponsiveVideoProps {
  src: string;
}

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({ src }) => {
  return (
    <div className="mt-10 max-w-[450px] mx-auto sm:max-w-full sm:w-4/5 lg:w-3/5 xl:w-2/5">
      <>
        <div className="hidden dark:block w-full blur-[120px] rounded-full h-32 absolute bg-emerald-500/80 -z-10 top-0" />
      </>
      <div
        className="relative border-8 border-emerald-300 border-opacity-10 rounded-2xl overflow-hidden"
        style={{ paddingTop: "56.25%", height: 0 }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
          src={src}
          style={{ border: "none" }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ResponsiveVideo;
