import React from "react";
import { TabType } from "../App";
import { Terminal } from "lucide-react";

interface SkeletonLoaderProps {
  tab: TabType;
}

export default function SkeletonLoader({ tab }: SkeletonLoaderProps) {
  // Common shimmering class or standard animate-pulse matching the system colors
  const pulseClass = "animate-pulse bg-zinc-800/40 border border-white/[0.03] rounded-md";

  switch (tab) {
    case "story":
      return (
        <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
          <div className="w-full max-w-5xl mx-auto space-y-12">
            {/* Header Area */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 font-mono text-xs text-brand-orange/60">
                <Terminal className="w-4 h-4 animate-pulse" />
                <div className={`h-3 w-36 ${pulseClass}`}></div>
              </div>
              <div className={`h-10 w-2/3 ${pulseClass}`}></div>
              <div className={`h-4 w-1/2 ${pulseClass}`}></div>
            </div>

            {/* Grid Split Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
              {/* Left Column (Main Story Bio) */}
              <div className="md:col-span-7 space-y-6">
                <div className={`h-5 w-1/4 ${pulseClass}`}></div>
                <div className="space-y-3">
                  <div className={`h-4 w-full ${pulseClass}`}></div>
                  <div className={`h-4 w-[95%] ${pulseClass}`}></div>
                  <div className={`h-4 w-[98%] ${pulseClass}`}></div>
                  <div className={`h-4 w-[92%] ${pulseClass}`}></div>
                </div>
                <div className="space-y-3 pt-4">
                  <div className={`h-4 w-full ${pulseClass}`}></div>
                  <div className={`h-4 w-[85%] ${pulseClass}`}></div>
                  <div className={`h-4 w-[90%] ${pulseClass}`}></div>
                </div>
              </div>

              {/* Right Column (Bio Stats/Infoboxes) */}
              <div className="md:col-span-5 space-y-4">
                <div className={`h-48 w-full ${pulseClass}`}></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`h-16 w-full ${pulseClass}`}></div>
                  <div className={`h-16 w-full ${pulseClass}`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case "projects":
      return (
        <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
          <div className="w-full max-w-5xl mx-auto space-y-12">
            {/* Title & Description skeletons */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-4 w-full md:w-2/3">
                <div className="flex items-center space-x-2 font-mono text-xs text-brand-orange/60">
                  <Terminal className="w-4 h-4 animate-pulse" />
                  <div className={`h-3 w-40 ${pulseClass}`}></div>
                </div>
                <div className={`h-10 w-3/4 ${pulseClass}`}></div>
                <div className="space-y-2">
                  <div className={`h-4 w-full ${pulseClass}`}></div>
                  <div className={`h-4 w-5/6 ${pulseClass}`}></div>
                </div>
              </div>
              <div className={`h-4 w-32 ${pulseClass} shrink-0`}></div>
            </div>

            {/* Grid Layout Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="border border-dark-border bg-dark-card/35 rounded-lg p-6 space-y-5 relative overflow-hidden flex flex-col justify-between h-[280px]"
                >
                  <div className="space-y-4">
                    {/* Header stats */}
                    <div className="flex justify-between items-center">
                      <div className={`h-3.5 w-1/3 ${pulseClass}`}></div>
                      <div className={`h-3.5 w-1/4 ${pulseClass}`}></div>
                    </div>

                    {/* Title */}
                    <div className={`h-7 w-2/3 ${pulseClass}`}></div>

                    {/* Description Paragraph */}
                    <div className="space-y-2">
                      <div className={`h-4 w-full ${pulseClass}`}></div>
                      <div className={`h-4 w-11/12 ${pulseClass}`}></div>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex space-x-2 pt-1">
                      <div className={`h-5 w-14 ${pulseClass}`}></div>
                      <div className={`h-5 w-16 ${pulseClass}`}></div>
                      <div className={`h-5 w-12 ${pulseClass}`}></div>
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="border-t border-dark-border/40 pt-4 flex justify-between items-center">
                    <div className={`h-4.5 w-28 ${pulseClass}`}></div>
                    <div className={`h-7 w-24 ${pulseClass}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "capabilities":
      return (
        <div className="space-y-12">
          {/* Skills Grid Section */}
          <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border grid-pattern">
            <div className="w-full max-w-5xl mx-auto space-y-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 font-mono text-xs text-brand-orange/60">
                  <Terminal className="w-4 h-4 animate-pulse" />
                  <div className={`h-3 w-36 ${pulseClass}`}></div>
                </div>
                <div className={`h-10 w-2/3 ${pulseClass}`}></div>
                <div className={`h-4 w-1/2 ${pulseClass}`}></div>
              </div>

              {/* Skills Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((colIndex) => (
                  <div
                    key={colIndex}
                    className="border border-dark-border bg-dark-card/30 rounded p-6 space-y-4"
                  >
                    <div className={`h-6 w-1/2 ${pulseClass} mb-4`}></div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((itemIndex) => (
                        <div key={itemIndex} className="space-y-1">
                          <div className="flex justify-between">
                            <div className={`h-3.5 w-1/3 ${pulseClass}`}></div>
                            <div className={`h-3.5 w-10 ${pulseClass}`}></div>
                          </div>
                          <div className={`h-2 w-full ${pulseClass}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border dot-pattern">
            <div className="w-full max-w-5xl mx-auto space-y-12">
              <div className="space-y-4">
                <div className={`h-4 w-32 ${pulseClass}`}></div>
                <div className={`h-10 w-1/2 ${pulseClass}`}></div>
              </div>

              {/* Chronological Vertical Line Timeline */}
              <div className="relative pl-6 md:pl-0 border-l border-dark-border/40 space-y-8">
                {[1, 2, 3].map((timelineIndex) => (
                  <div key={timelineIndex} className="relative md:grid md:grid-cols-12 md:gap-8 items-center">
                    {/* Timestamp badge */}
                    <div className="md:col-span-3 font-mono text-xs mb-3 md:mb-0 md:text-right">
                      <div className={`inline-block h-5 w-24 ${pulseClass} md:mr-4`}></div>
                    </div>

                    {/* Timeline circle spacer */}
                    <div className="absolute left-[-29px] md:left-[24.2%] top-1.5 w-4 h-4 rounded-full bg-zinc-800 border-2 border-dark-border"></div>

                    {/* Content Box */}
                    <div className={`md:col-span-8 bg-dark-card/20 border border-dark-border/40 rounded p-6 space-y-3`}>
                      <div className={`h-5 w-1/3 ${pulseClass}`}></div>
                      <div className={`h-4.5 w-1/4 ${pulseClass}`}></div>
                      <div className="space-y-1.5 pt-2">
                        <div className={`h-3 w-11/12 ${pulseClass}`}></div>
                        <div className={`h-3 w-5/6 ${pulseClass}`}></div>
                        <div className={`h-3 w-4/5 ${pulseClass}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );

    case "contact":
      return (
        <section className="py-24 px-4 sm:px-6 md:px-8 border-b border-dark-border dot-pattern">
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column Information */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 font-mono text-xs text-brand-orange/60">
                    <Terminal className="w-4 h-4 animate-pulse" />
                    <div className={`h-3 w-32 ${pulseClass}`}></div>
                  </div>
                  <div className={`h-10 w-5/6 ${pulseClass}`}></div>
                  <div className="space-y-2">
                    <div className={`h-4 w-full ${pulseClass}`}></div>
                    <div className={`h-4 w-11/12 ${pulseClass}`}></div>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <div className={`h-12 w-3/4 ${pulseClass}`}></div>
                  <div className={`h-12 w-3/4 ${pulseClass}`}></div>
                </div>
              </div>

              {/* Right Column Form Container */}
              <div className="border border-dark-border bg-dark-card/40 rounded p-8 space-y-6">
                <div className={`h-6 w-1/3 ${pulseClass}`}></div>

                {/* Form fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className={`h-3 w-16 ${pulseClass}`}></div>
                    <div className={`h-10 w-full ${pulseClass}`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className={`h-3 w-16 ${pulseClass}`}></div>
                    <div className={`h-10 w-full ${pulseClass}`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className={`h-3 w-20 ${pulseClass}`}></div>
                    <div className={`h-32 w-full ${pulseClass}`}></div>
                  </div>
                </div>

                {/* Submit button */}
                <div className={`h-11 w-full bg-brand-orange/25 border border-brand-orange/30 rounded`}></div>
              </div>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}
