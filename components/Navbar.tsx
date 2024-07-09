import logo from "@/public/Logo-Horizontal-White-Transparent.svg"
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
    <nav className="fixed z-50 py-5 px-10">
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-3 w-[100vw] h-16 items-center justify-between">
        <a href="#home">
            <Image
                src="/Logo-Text-White-Transparent.svg"
                alt="Vercel Logo"
                className="col-span-1"
                width={150}
                height={50}
                priority
            />
        </a>
        <div className="col-span-2">
            <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                <a href="#home" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                <a href="#story" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Story</a>
                <a href="#collections" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Collections</a>
                <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
            </div>
            </div>
        </div>
        </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#home" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
      <a href="#story" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Story</a>
      <a href="#collections" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Collections</a>
      <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
    </div>
  </div>
</nav>

    </>
  )
}
