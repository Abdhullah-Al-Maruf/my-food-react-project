
import Img from "../../assets/myfood-logo.png";

export default function Navbar() {

  const handleTheme = (e) => {
    const theme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle rounded-md text-white bg-amber-600">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a>About</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-15 " src={Img} alt="logo" />
          <h2 className="font-bold  text-lg font-roboto ">
            My<span className="text-amber-500">Food</span>
          </h2>
        </div>
      </div>


      {/* CENTER (LG ONLY) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Menu</a></li>
          <li><a>About</a></li>
        </ul>
      </div>


      {/* RIGHT */}
      <div className="navbar-end gap-4">
 <label className="toggle text-base-content">
          <input
            type="checkbox"
            value="dark"
            className="theme-controller"
            onChange={handleTheme}
          />
          {/* Sun */}
          <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>
          {/* Moon */}
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {/* Cart */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator bg-amber-500 text-neutral-100 p-2 rounded-full">
              <i className="fa-solid fa-cart-shopping "></i>
              <span className=" p-2 text-sm indicator-item text-neutral">
                0
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">0 Items</span>
              <span className="text-info">Subtotal: 0</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="avatar"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        

      </div>
    </div>
  );
}