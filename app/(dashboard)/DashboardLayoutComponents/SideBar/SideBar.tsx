"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Logo from "../../../assets/logo.svg";
import ProjectsIcon from "../../../assets/icons/folder.svg";
import statisticsIcon from "../../../assets/icons/statistics.svg";
import EpicsIcons from "../../../assets/icons/epics.svg";
import TasksIcon from "../../../assets/icons/tasks.svg";
import MembersIcon from "../../../assets/icons/members.svg";
import DetailsIcon from "../../../assets/icons/details.svg";
import CollapseIcon from "../../../assets/icons/collapse.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open sidebar"
        className="fixed left-4 top-4 z-40 rounded-md bg-white p-2 text-slate-700 shadow-md lg:hidden"
      >
        <span className="text-xl">☰</span>
      </button>

      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 bg-surface-low flex-col 
           px-4 py-5 transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${
             isMobileOpen ? "translate-x-0" : "-translate-x-full"
           }`}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between px-2">
          <Logo />
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close sidebar"
            className="text-xl text-slate-500 lg:hidden"
          >
            ×
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex-col justify-between">
          <ul className="space-y-2">
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-md  px-2.5 py-2 text-left text-[11px] font-medium text-slate-700"
              >
                <ProjectsIcon />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-md  px-2.5 py-2 text-left text-[11px] font-medium text-slate-700"
              >
                <ProjectsIcon />
                <span>My Statistics</span>
              </button>
            </li>
            <div className="my-4 border-t border-slate-200" />
            {/* Active Project */}
            <li>
              <button
                type="button"
                onClick={() => setIsProjectOpen(!isProjectOpen)}
                className="flex w-full items-center justify-between rounded-md bg-[#DCE3FF] px-2.5 py-2 text-left text-[11px] font-medium text-slate-700"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <ProjectsIcon />
                  <span className="truncate">Active Project Name</span>
                </span>

                <span className="ml-2 text-sm">
                  {isProjectOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {isProjectOpen && (
                <ul className="mt-1 space-y-1 pl-2">
                  {" "}
                  <EpicsIcons />
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="space-y-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[11px] text-slate-700 transition hover:bg-white"
          >
            <CollapseIcon />

            <span>Collapse</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[11px] text-red-500 transition hover:bg-red-50"
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
