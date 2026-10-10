import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

export const APPLY_URL = 'https://tally.so/r/RGMKQv';

interface ApplyLinkProps {
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'h-10 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
};

const ApplyLink: React.FC<ApplyLinkProps> = ({ size = 'lg', className = '', onClick }) => (
  <a
    href={APPLY_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-2 rounded-full bg-accent font-semibold text-ink transition-[transform,background-color] duration-200 hover:bg-[#ff85ae] active:scale-[0.98] ${sizes[size]} ${className}`}
  >
    Apply now
    <ArrowUpRight weight="bold" className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

export default ApplyLink;
