const Navbar = () => {
    return (
      <div className="w-full bg-neutral-200 h-[111px] flex z-10 ">
        <img src="images/logo.svg" alt="Logo" className="w-[130px] h-[130px] m-5 absolute" />
        <div className="flex w-full ml-[130px]">
          <ul className="w-full flex justify-evenly p-1 items-center text-xl font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/joinus">Join Us</a>
            </li>
            <li>
              <a href="/FootPrints">FootPrints</a>
            </li>
            <li>
              <a href="/Resources">Resorces</a>
            </li>
            <li>
              <a href="/Events">Events</a>
            </li>
            <li>
                      <a href="/ContactUs">Contact Us</a>
                  </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;