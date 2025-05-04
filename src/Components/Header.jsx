import { Box, Burger, Drawer, Group, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top whenever the path changes
    window.scrollTo({ top: 0 });
  }, [location]);
  return (
    <Box className="bg-[rgba(255,255,255,0.7)] backdrop-blur-md text-[#048cfc] lg:px-32 md:py-3 fixed z-50 w-full">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <NavLink to={"/"}>
            <img
              // onClick={() => handleNavigation("/")}
              src="https://res.cloudinary.com/dax11nwlt/image/upload/v1737296048/monitagcolorlogo_oqikga.png"
              alt="logo"
              className="logo-width cursor-pointer"
            />
          </NavLink>

          <Group h="100%" gap={50} visibleFrom="sm" className="text-[#048cfc]">
            {/* Use NavLink for navigation buttons */}
            <NavLink
              to="aboutus"
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}  font-PoppinsSemiBold`
              }
            >
              ABOUT US
            </NavLink>

            <NavLink
              to="news"
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}  font-PoppinsSemiBold`
              }
            >
              NEWS & RESOURCES
            </NavLink>

            <NavLink
              to="careers"
              className={({ isActive }) =>
                isActive
                  ? `${classes.link} ${classes.linkActive}   `
                  : `${classes.link}   font-PoppinsSemiBold`
              }
            >
              CAREERS
            </NavLink>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        color="black"
        size="100%"
        padding="md"
        title={
          <img
            src="https://res.cloudinary.com/dax11nwlt/image/upload/v1737296048/monitagcolorlogo_oqikga.png"
            alt="logo"
            className="logo-width cursor-pointer"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          {/* <Divider my="sm" /> */}
          <div className="flex flex-col gap-10 mt-10">
            <NavLink
              to="/"
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="aboutus"
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
              ABOUT US
            </NavLink>

            <NavLink
              to="news"
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
              NEWS & RESOURCES
            </NavLink>

            <NavLink
              to="careers"
              onClick={closeDrawer}
              className={({ isActive }) =>
                isActive
                  ? `${classes.link2} ${classes.linkActive2}`
                  : `${classes.link2}  font-PoppinsLight`
              }
            >
              CAREERS
            </NavLink>
          </div>

          {/* <Divider my="sm" /> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
