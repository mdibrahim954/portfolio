"use client";
import {
  ChartGantt,
  ChevronRightIcon,
  Mail,
  Newspaper,
  Settings,
  WrapText,
} from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

interface DashboardNavigationItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

export default function DasboardNavigation() {
  // const params = useParams();
  let slug = usePathname();
  const splitedSlug = slug?.replace(/^\//, "").split("/") ?? [];
  const lastPath = splitedSlug[splitedSlug.length - 1];
  slug = lastPath;
  // console.log("Params: ", slug);

  const data: DashboardNavigationItem[] = [
    {
      title: "Dashboard",
      link: "admin",
      icon: <ChartGantt className="size-5" />,
    },
    {
      title: "Message",
      link: "message",
      icon: <Mail className="size-5" />,
    },
    {
      title: "Subscribers",
      link: "subscribers",
      icon: <Newspaper className="size-5" />,
    },
    {
      title: "Post",
      link: "post",
      icon: <WrapText className="size-5" />,
    },
  ];

  //   const [current, setCurrent] = useState("");
  return (
    <>
      {data.map((item, i) => {
        return (
          <Item
            key={i}
            className={`bg-transparent  rounded-full ${
              typeof slug !== "undefined" && slug === item.link.trim()
                ? " bg-[#dfe4ea] text-black"
                : typeof slug === "undefined" && i === 0
                ? " bg-[#dfe4ea] text-black"
                : "text-white hover:!text-black hover:!bg-[#dfe4ea]"
            }`}
            variant="default"
            size="sm"
            asChild
          >
            <Link href={`/admin/${item.link !== "admin" ? item.link : ""}`}>
              <ItemMedia>{item.icon}</ItemMedia>
              <ItemContent>
                <ItemTitle>{item.title}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </Link>
          </Item>
        );
      })}
    </>
  );
}
