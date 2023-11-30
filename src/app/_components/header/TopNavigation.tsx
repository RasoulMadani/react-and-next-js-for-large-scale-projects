"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ری اکت و نکست",
    href: "/courses",
  },
  {
    title: "مطالب و مقالات",
    href: "/blog",
  },
];
const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-x-8 ms-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={`navigation-${item.href}`}>
            <Link
              className={clsx(
                `dark:backdrop:hover:text-primary transition-colors pb-2`,
                isActive &&
                  "border-b-2 dark:text-primary dark:border-primary/30"
              )}
              href={item.href}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
