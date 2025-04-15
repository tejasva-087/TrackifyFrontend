import React, { useEffect } from "react";

import { CaretDown, Gear, Log } from "@phosphor-icons/react";
import Link from "./ui/Link";

function UserMenu({ className = "", userImageSeed }) {
  useEffect(() => {}, []);
  return (
    <div className={`${className} user-menu flex items-center gap-0.5`}>
      {/* LINK TO USER PROFILE IF CLICKED */}
      <a href="/settings" className="user-menu__btn flex items-center gap-0.5">
        <img
          src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${userImageSeed}&backgroundColor=F9D05B`}
          className="w-14 h-14 rounded-xl"
          alt="User's avatar"
        />
        <CaretDown className="text-3xl text-[var(--color-black-tertiary)]" />
      </a>

      <div className="user-menu__options absolute top-full right-0 p-3">
        {/* MENU OPTIONS OPEN IF HOVERED*/}
        <div className="border border-[var(--color-white-tertiary)] bg-[var(--color-white-primary)] pr-10 pl-10 pt-12 pb-12 w-[20vw] rounded-2xl flex flex-col gap-8">
          {/* USER MENU HEADER */}
          <figure className="flex flex-col items-center gap-4 border-b border-[var(--color-white-tertiary)] pb-8">
            <img
              src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${userImageSeed}&backgroundColor=F9D05B`}
              className="w-16 h-16 rounded-xl"
              alt="User's avatar"
            />
            <figcaption className="text-4xl font-bold">
              Tejasva Khandelwal
            </figcaption>
          </figure>

          {/* USER MENU OPTIONS */}
          <div className="flex flex-col gap-3 ">
            <Link
              href="/settings"
              className="p-4 transition hover:pointer hover:bg-[var(--color-white-secondary)] rounded-xl"
            >
              <div className="flex items-center gap-2">
                <Gear weight="light" className="text-4xl" />
                <p className="text-3xl">Settings</p>
              </div>
            </Link>
            <Link
              href="/home"
              className="p-4 transition hover:pointer hover:bg-[var(--color-white-secondary)] rounded-xl"
            >
              <div className="flex items-center gap-2">
                <Gear weight="light" className="text-4xl" />
                <p className="text-3xl">Log out</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
