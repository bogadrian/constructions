import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from '@nextui-org/navbar';
import { Avatar } from '@nextui-org/avatar';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import NextLink from 'next/link';

import { TwitterIcon } from '@/components/icons/icons';
import { ThemeSwitch } from '@/components/theme/theme-switch';

export const Navbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: 'bg-default-100',
  //       input: 'text-sm'
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={['command']}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 tablet:basis-full ">
        <NavbarBrand as="li" className="gap-3 max-w-fit max-h-fit ">
          <NextLink
            className="gap-1 mt-20 tablet:w-48 tablet:h-32 -mr-6  justify-center items-center 
			"
            href="/"
          >
            {/* <Logo /> */}
            <Image
              src="/log2.png"
              className="hidden tablet:flex w-48 h-32 flex-1"
            />
          </NextLink>
          <NextLink href="/">
            <p className="font-bold text-4xl">Ziziri Stories</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden laptop:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden tablet:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden laptop:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          {/* <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        {/* <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <div className="hidden laptop:flex gap-4 items-center">
            <Avatar
              isBordered
              color="primary"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="laptop:hidden flex basis-1 pl-4 " justify="end">
        {/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 tablet:mt-20 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <div
              className={
                item.href === '/profile' ? 'flex items-center my-1' : 'my-1'
              }
            >
              {item.href === '/profile' && (
                <NavbarItem>
                  <div className="  mr-4">
                    <Avatar
                      isBordered
                      color="primary"
                      src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    />
                  </div>
                </NavbarItem>
              )}

              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            </div>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
