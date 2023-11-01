import { Delius_Swash_Caps } from 'next/font/google';
import { GeistSans, GeistMono } from 'geist/font';

// font to use for stories text
const delius = Delius_Swash_Caps({ subsets: ['latin'], weight: '400' });

export { delius, GeistSans, GeistMono };
