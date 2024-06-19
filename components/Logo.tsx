import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src="/logo.png"
        alt="My Logo"
        width={150} 
        height={150} 
        priority={true}
      />
    </div>
  );
};

export default Logo;
