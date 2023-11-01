import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';

export const StoryCard = () => {
  return (
    <div className="relative">
      <div
        className="absolute flex justify-center items-center z-10 left-5 top-16 
      rounded-full border w-14 h-14 bg-green-700 text-white"
      >
        <Image
          src="/text9.png"
          removeWrapper
          alt="Relaxing app background"
          className="absolute rotate-12 -top-8 -left-2 z-0 w-full h-full"
        />
        <p className="font-extrabold">FREE</p>
      </div>
      <div
        className="absolute flex justify-center items-center z-10 left-[80px] 
      mini:left-[100px] top-16 rounded-full border w-14 h-14 bg-green-700 text-white"
      >
        <Image
          src="/pdf.png"
          removeWrapper
          alt="Relaxing app background"
          className="absolute rotate-12 -top-8 -left-2 z-0 w-full h-full "
        />
        <p className="font-extrabold">FREE</p>
      </div>
      <div
        className="absolute flex justify-center items-center z-10 left-[140px] 
      mini:left-[180px] top-16 rounded-full border w-14 h-14 bg-orange-600 text-white"
      >
        <Image
          src="/audio.png"
          removeWrapper
          alt="Relaxing app background"
          className="absolute rotate-12 -top-8 -left-2 z-0 w-full h-full object-fill "
        />
        <p className="font-extrabold">PRO</p>
      </div>
      <div
        className="absolute flex justify-center items-center z-10 left-[200px] 
      mini:left-[260px] top-16 rounded-full border w-14 h-14 bg-orange-600 text-white"
      >
        <Image
          src="/carousel.png"
          removeWrapper
          alt="Relaxing app background"
          className="absolute rotate-12 -top-8 -left-2 z-0 w-full h-full"
        />
        <p className="font-extrabold">PRO</p>
      </div>
      <Card
        isFooterBlurred
        className="w-full laptop:h-[120px] mini:h-[140px] h-[180px] col-span-12 
        sm:col-span-7 first:mt-0 mt-24 border-1 border-solid border-yellow-500 shadow-2xl "
      >
        <CardHeader className="absolute z-10 top-5 w-full items-start justify-between">
          <p className=" text-amber-400 px-2 py-1 rounded-lg text-2xl font-bold  bg-purple-800/70">
            Frumoasa adormentata
          </p>
          <h4 className="hidden laptop:flex font-medium text-fuchsia-400 bg-blue-900 px-2 py-1 rounded-lg text-xl ml-auto mr-20 ">
            Romanian folclor story
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/panoramic.jpg"
        />
        <CardFooter className="absolute bg-violet-950/5 bottom-0 z-10 h-8 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/logo2.png"
            />
            <div className="hidden mini:flex  flex-col bg-orange-700 rounded-md px-2  justify-center">
              <p className="text-md">AI narrated story</p>
            </div>
          </div>
          <Button
            radius="full"
            className={`${buttonStyles({
              color: 'secondary',
              radius: 'full',
              variant: 'shadow',
              size: 'md'
            })}, h-6 py-1`}
          >
            See the story
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
