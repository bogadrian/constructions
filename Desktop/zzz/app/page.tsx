import { subtitle, title } from '@/components/prinitivies/primitives';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import { StoryCard } from '../components/storyCard';

export default function Home() {
  return (
    <>
      <div className="overflow-auto">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-sky-950 bg-opacity-5 rounded-xl border-1 border-orange-400 ">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Get the narration of</h1>
            <h1 className={title({ color: 'violet' })}> fantasy stories</h1>
            <br />
            <h1 className={title()}>fly your dreams away!</h1>
            <h2 className={subtitle({ class: 'mt-4' })}>
              Ai generated human dreams
            </h2>
          </div>
          <div className="flex gap-3">
            <Link
              isExternal
              as={NextLink}
              href={siteConfig.links.docs}
              className={buttonStyles({
                color: 'secondary',
                radius: 'full',
                variant: 'shadow'
              })}
            >
              Browse our stories
            </Link>
          </div>
        </section>
        <div className="mt-10 laptop:ml-20 ">
          <h1 className={subtitle({ color: 'violet' })}>
            Ziziri last publihed stories:
          </h1>
        </div>
        <section className="flex flex-col laptop:ml-20 laptop:mr-20">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </section>
      </div>
    </>
  );
}
