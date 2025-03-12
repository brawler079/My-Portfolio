import { socialMediaLinks } from "../lib/social";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <section id="contact" className="flex flex-col justify-start items-center px-8 mx-6 pb-10 sm:mx-8 md:mx-14 sm:px-12 lg:px-16">
            <div className="flex md:hidden flex-col items-center">
                <a
                    href="mailto:anandabhilakshay@gmail.com"
                    className="text-slate-300 text-sm font-mono pb-3">
                    anandabhilakshay@gmail.com
                </a>
                <div className="flex flex-row p-2">
                {socialMediaLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="p-3">
                        <img src={item.icon.src} alt={item.name} className="w-6 h-6" />
                    </a>
                ))}
                </div>
            </div>
            <header>
                <h1 className="text-slate-300 text-sm">
                    Designed & Built by Abhilakshay Anand © {date}
                </h1>
            </header>
        </section>
    )
}

export default Footer