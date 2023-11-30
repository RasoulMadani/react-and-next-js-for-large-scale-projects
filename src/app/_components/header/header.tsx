import Image from "next/image";
import TopNavigation from "./TopNavigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between">
        <Image 
          src="/images/Logo-light.svg"
          width={100}
          height={36}
          alt="کلاسبن"
        />
        <TopNavigation/>
        <span>user Authentication</span>
      </div>
    </header>
  );
};
