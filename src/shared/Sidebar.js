import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// react router
import { Outlet } from "react-router-dom";

const navigation = [
    { name: "Home", href: "/", },
    { name: "About", href: "/about", },
    { name: "Nature", href: "/nature", },
    { name: "Photography", href: "/photography", },
    { name: "Travel", href: "/travels", },
    { name: "Music", href: "/music" },
    { name: "Arts", href: "/arts", },
];
const Sidebar = () => {
    return (
        <div className="flex min-h-screen flex-row h-screen" style="height:100%">
            <aside className="md:w-64 transform bg-neutral-900 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md ">
                {/* place sidebar here */}
                <div id="profile" className="mt-10 max-sm:mt-0 max-sm:invisible md:visible">
                    <img
                        src={require(`../images/4a.webp`)}
                        alt="Avatar user"
                        className="h-32 w-32 md:w-32 rounded-full mx-auto"
                    />
                    <div>
                        <h1 className="font-medium text-xl  text-center text-teal-500">
                            Dianne Corpuz
                        </h1>
                        <p className="text-xs text-gray-300 text-center">Software Developer /</p>
                        <p className="text-xs text-gray-300 text-center">Full Stack Developer</p>
                    </div>

                    {/*                     <div className="mt-8">
                        <p className="font-medium text-xs md:text-sm text-center text-teal-500">
                            <a href="https://corpzbrideee02.github.io/">
                                corpzbrideee02.github.io
                            </a>
                        </p>
                    </div> */}
                </div>

                <div className="mt-10 mb-4 max-sm:mt-0 max-sm:text-xs ">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className="navUL">
                            <label >{item.name} </label>
                        </NavLink>
                    ))}
                </div>
            </aside>
            <main className="main  flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0 bg-black">
                {/* Renders the child routes underneath */}
                <Outlet />
            </main>
        </div>
    );
};

export default Sidebar;
