import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className="bg-black">
                <div className="container mx-auto py-8">
                    <div className="flex items-center space-x-8">
                        <div>
                            <Link
                                href="/"
                            >
                                <Image
                                    src="/images/BS-logo.png"
                                    alt="Baroen Space"
                                    width={500}
                                    height={500}
                                    className="w-32"
                                />
                            </Link>
                        </div>
                        <div>
                            <div className="text-4xl text-white leading-5 font-normal mb-2">Baroen Space🚀🚀</div>
                            <div className="w-full max-w-xl py-1">
                                <p className="text-sm text-white leading-4 font-normal tracking-wide">Baroen Space designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-4">
                <nav className="py-4">
                    <ul role="navigation" className="flex space-x-6 items-center">
                        <li>
                            <Link
                                href="/"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >🏠 Home</Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >😂 Profile</Link>
                        </li>
                        <li>
                            <Link
                                href="/visi-misi"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >💐 Visi & Misi</Link>
                        </li>
                        <li>
                            <Link
                                href="/produk-kami"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >🎁 Produk Kami</Link>
                        </li>
                        <li>
                            <Link
                                href="/kontak-kami"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >☎️ Kontak Kami</Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="px-6 py-2.5 bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                            >🎉 About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container mx-auto py-3">
                <div className="flex justify-start gap-12">
                    <div className="w-full max-w-xs">
                        <div className="w-full inline-flex border-2 border-black rounded-2xl shadow-sm p-8">
                            <nav className="w-full p-2">
                                <ul role="navigation" className="w-full flex flex-col gap-4">
                                    <li>
                                        <Link
                                            href="/artikel"
                                            className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                                        >😎 Artikel</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/event"
                                            className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                                        >🥳 Event</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/galery"
                                            className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                                        >🪄 Galery Foto</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/klien-lami"
                                            className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"
                                        >🍕 Klien Kami</Link>
                                    </li>
                                    <li>
                                        <div className="text-sm text-slate-700 font-semibold leading-6 mb-3 px-4">Login</div>
                                        <div className="flex flex-col gap-4">
                                            <ul className="w-full pl-12 flex flex-col gap-4">
                                                <li>
                                                    <Link
                                                        href="/signin"
                                                        className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"

                                                    >🍉 Sign In</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/signout"
                                                        className="px-6 py-4 w-full bg-black hover:bg-pink-500 rounded-2xl shadow-sm text-white hover:text-black text-sm font-normal tracking-wide inline-flex items-center"

                                                    >🥶 Sign Up</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
