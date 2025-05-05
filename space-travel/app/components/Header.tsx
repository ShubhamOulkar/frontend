import { useState } from "react";
import Logo from "~/assets/logo.svg?react"
import PrimaryNavigation from "~/components/PrimaryNavigation";
import MobileToggler from "./MobileToggler";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="primary-header flex">
      <div className="header-child-1">
        <Link to="/" title="go to home page"><Logo className="logo" /></Link>
      </div>
      <div className="header-child-2">
        <MobileToggler isOpen={isOpen} setIsOpen={setIsOpen}/>
        <PrimaryNavigation isOpen={isOpen} />
      </div>
    </header>
  );
}
