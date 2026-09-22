"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GridIcon, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import UserNavigation from "./usernavigation";
import { ItemActions } from "../ui/item";
export default function AdminFooterUserSection() {
  const [activeMenu, setActiveMenu] = useState(false);
  useEffect(() => {
    function handleClick() {
      setActiveMenu(false);
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [activeMenu]);
  return (
    <>
      <div
        className={`absolute flex items-center w-full p-3 bottom-0 bg-[#34495e] left-0 cursor-pointer `}
        onClick={() => {
          console.log("Hello world!");
          setActiveMenu(!activeMenu);

          console.log(activeMenu);
        }}
      >
        <div className={`w-1/5 flex items-center justify-center`}>
          <Avatar>
            <AvatarImage
              src={`/man.png`}
              className="grayscale bg-black"
              alt="Naim Bhuiya"
            />
          </Avatar>
        </div>
        <div className={`w-3/5 `}>
          <p className={`text-white text-[16px]`}>Naim Bhuiya</p>
          <p className={`text-white text-[10px]`}>Administrator</p>
        </div>
        <Button
          className={`w-1/5 h-[50px] flex items-center justify-center cursor-pointer bg-transparent hover:bg-transparent`}
        >
          <Settings className={`size-6 text-white`} />
        </Button>
      </div>
      {activeMenu ? (
        <UserNavigation
          className={`absolute left-[calc(100%_+_10px)] bottom-[10px]  rounded`}
        />
      ) : null}
    </>
  );
}

export function HeaderUserNavigation() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function handleClick() {
      setActive(false);
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [active]);
  return (
    <>
      <Avatar
        onClick={() => {
          setActive(!active);
        }}
      >
        <AvatarImage
          src={`/man.png`}
          className="grayscale bg-black"
          alt="Naim Bhuiya"
        />
      </Avatar>
      {active ? (
        <UserNavigation
          className={`absolute top-[100%] right-[0px] right-[10px]`}
        />
      ) : null}
    </>
  );
}

export function AdminHeader() {
  return (
    <div className={`p-[15px] w-full bg-[#ffffff] flex shadow-xs relative`}>
      <div className={`w-1/2 flex`}>
        <input
          className={`w-10/12 mr-[10px] border-[1px] border-[#ecf0f1] px-[10px] py-[5px] rounded-full`}
          type="text"
          placeholder={`Search`}
        />
        <button className={`w-2/12 bg-black text-white rounded-full`}>
          Search
        </button>
      </div>
      <div className={`w-1/2 flex items-center justify-end`}>
        <div className={`mr-[40px] p-[10px] border-[1px] border-[#ecf0f1]`}>
          <ItemActions>
            <GridIcon className="size-8" />
          </ItemActions>
        </div>
        <div className={`mr-[10px]`}>
          <p className={`text-black text-right text-[16px]`}>Naim Bhuiya</p>
          <p className={`text-black text-right text-[10px]`}>Administrator</p>
        </div>
        <HeaderUserNavigation />
      </div>
    </div>
  );
}
