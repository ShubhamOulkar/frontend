interface TogglerType {
    isOpen: boolean;
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileToggler({isOpen, setIsOpen}:TogglerType) {
    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
      };
    return  <button
                aria-expanded={isOpen}
                type="button"
                onClick={handleMobileMenu}
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
            >
                <span className="sr-only">Menu</span>
            </button>
}