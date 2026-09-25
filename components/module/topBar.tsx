import { container, info } from "@/lib/settings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
const { phone, email, bEmail, location } = info;
export default function TopBar() {
  return (
    <div className={`bg-black `}>
      <div className={cn(container)}>
        <div className="flex items-center justify-between py-[5px] w-full">
          <ul className="flex items-center gap-5 text-sm text-[#fff]">
            <li>
              <Link href={`#`}>{phone}</Link>
            </li>
            <li>
              <Link href={`#`}>{bEmail}</Link>
            </li>
            <li>
              <Link href={`#`}>{location}</Link>
            </li>
          </ul>

          <ul className={`flex gap-5`}>
            <li>
              <Link href={`/?name=ctr-name`} className="text-sm text-[#fff]">
                {`Certificate Name`}
              </Link>
            </li>
            <li>
              <Link href={`/?name=nickname`} className="text-sm text-[#fff]">
                {`Nickname`}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
