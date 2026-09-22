type NavigationItem = {
  title: string;
  link: string;
};

export default function UserNavigation({ className }: { className: string }) {
  const data: NavigationItem[] = [
    {
      title: "Profile",
      link: "#",
    },
    {
      title: "Log in",
      link: "#",
    },
    {
      title: "Log out",
      link: "#",
    },
  ];

  return (
    <ul className={`w-[300px] z-50  bg-white border-[1px] ${className}`}>
      {data.map((item) => {
        return (
          <li
            onClick={() => console.log(item)}
            className={`px-[10px] py-[5px] text-black font-normal cursor-pointer border-b-[1px] border-[#eee]`}
            key={item.title}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
