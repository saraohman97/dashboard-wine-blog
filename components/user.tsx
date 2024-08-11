"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User as UserIcon } from "lucide-react";
import { LuSunMoon } from "react-icons/lu";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const User = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <div className="bg-slate-100 dark:bg-slate-600 rounded-full p-2 border">
          <UserIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mitt konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon size={15} />
          Profil
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <LuSunMoon className="mr-2 h-4 w-4" />
            <span className="mr-2">Bakgrundsfärg</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <IoSunnyOutline className="mr-2 h-4 w-4" />
                <span>Ljus</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <IoMoonOutline className="mr-2 h-4 w-4" />
                <span>Mörk</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <MdComputer className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem>
          <IoIosLogOut size={15} />
          Logga ut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
