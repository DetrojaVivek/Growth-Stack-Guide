import React from 'react';
import { Download, Zap, Compass, ShieldCheck } from 'lucide-react';

const trustPillars = [
  {
    icon: Download,
    iconColor: '#6C4DFF',
    iconBg: '#F3F0FF',
    title: 'Modular Notion Systems',
    description: 'Turnkey digital workspaces engineered to organize your operations immediately.',
  },
  {
    icon: Zap,
    iconColor: '#10B981',
    iconBg: '#EBFBEE',
    title: 'Copy-Paste AI Workflows',
    description: 'Field-tested prompt chains that automate drafting, scheduling, and admin tasks.',
  },
  {
    icon: Compass,
    iconColor: '#3B9EFF',
    iconBg: '#EBF5FF',
    title: 'Beginner-Friendly Systems',
    description: 'Zero code required. Simple, actionable setups built for solo creators.',
  },
  {
    icon: ShieldCheck,
    iconColor: '#D97706',
    iconBg: '#FEF3C7',
    title: 'No Fluff or Fake Claims',
    description: 'Real testing notes and transparent affiliate disclosures. Never guru hype.',
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full border-y border-[var(--border-color)] bg-white py-8 sm:py-10">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl hover:bg-[#FAF8F2] transition-colors"
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs"
                  style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
