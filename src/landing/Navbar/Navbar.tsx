import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Shop", href: "/app/ecommerce/shop", current: false },
  { name: "About Us", href: "#aboutus-section", current: false },
  { name: "Services", href: "#services-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="p-3 mx-auto max-w-7xl md:p-6 lg:px-8">
          <div className="relative flex items-center h-12 sm:h-20">
            <div className="flex items-center flex-1 sm:justify-between">
              {/* LOGO */}

              <div className="flex items-center flex-shrink-0 border-right">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-2xl font-semibold text-black sm:text-4xl"
                >
                  <div className="w-10 h-10 rounded-full element" />
                  coinvest
                </Link>
              </div>
              {/* LINKS */}

              <div className="items-center hidden lg:flex border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks hover:text-black",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <button className='justify-end hidden px-6 py-4 text-xl font-semibold bg-transparent rounded-full lg:flex lg:px-12 navbutton hover:bg-navyblue hover:text-white'>Contact us</button> */}
              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
