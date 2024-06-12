import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <Image
          src="/logo.png"
          alt="My Logo"
          width={150} 
          height={150} 
          priority={true}
        />
      </div>
    </Link>
  );
};

export default Logo;
