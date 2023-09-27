import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
    {
        name: "Dashboard",
        link: "/",
    },
    {
        name: "Profile",
        link: "/profile",
    },
    {
        name: "Login",
        link: "/login",
    },
    {
        name: "Signup",
        link: "/signup",
    },
];

const Footer = () => {
    return (
        // <footer className="bg-zinc-900 py-12 px-4 text-base text-white sm:px-6 md:px-8 lg:py-16 lg:px-8 lg:pb-8">
        //     <div className="mx-auto max-w-7xl">
        //         <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
        //             Quick Links
        //         </h3>
        //         <ul className="grid gap-x-8 sm:grid-cols-2  md:flex">
        //             {footerLinks.map((link) => (
        //                 <li key={link.name}>
        //                     <Link
        //                         to={link.link}
        //                         className="text-base text-zinc-300 hover:text-white"
        //                     >
        //                         {link.name}
        //                     </Link>
        //                 </li>
        //             ))}
        //         </ul>
        //         <div className="my-4 flex items-center gap-6">
        //             <a
        //                 href="https://github.com/ehasan8115/todolist-mern"
        //                 target="_blank"
        //                 rel="noopener noreferrer nofollow"
        //                 className="text-gray-400 hover:text-gray-300"
        //             >
        //                 <span className="sr-only">GitHub</span>
        //                 <svg
        //                     className="h-6 w-6"
        //                     fill="currentColor"
        //                     viewBox="0 0 24 24"
        //                     aria-hidden="true"
        //                 >
        //                     <path
        //                         fillRule="evenodd"
        //                         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        //                         clipRule="evenodd"
        //                     ></path>
        //                 </svg>
        //             </a>
        //             <a
        //                 href="https://www.linkedin.com/in/delano-lourenco-a9022a190/"
        //                 target="_blank"
        //                 rel="noopener noreferrer nofollow"
        //                 className="text-gray-400 hover:text-gray-300"
        //             >
        //                 <span className="sr-only">Linkedin</span>
        //                 <svg
        //                     className="flex h-5 w-5"
        //                     fill="currentColor"
        //                     aria-hidden="true"
        //                     viewBox="0 0 24 24"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        //                 </svg>
        //             </a>
        //         </div>
        //     </div>
        // </footer>

        <h1>Hello</h1>
    );
};

export default Footer;
