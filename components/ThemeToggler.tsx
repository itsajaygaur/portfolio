"use client"
import { useTheme } from 'next-themes'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";


const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
      <Dropdown classNames={{
        base: "before:bg-default-200 min-w-[100px]", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }} >
      <DropdownTrigger>
        <Button isIconOnly variant='light' >
            <MdOutlineWbSunny className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size={18}  />
            <RiMoonClearFill className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" size={18} />
        </Button>
      </DropdownTrigger> 
      <DropdownMenu aria-label="Static Actions" >
        <DropdownItem onClick={() => setTheme('light')} key="light"  >Light</DropdownItem>
        <DropdownItem onClick={() => setTheme('dark')} key="dark">Dark</DropdownItem>
        <DropdownItem onClick={() => setTheme('system')} key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ThemeToggler