import { FaUsers } from "react-icons/fa6";
import { PiSealWarningBold } from "react-icons/pi";
import { FaRegClipboard } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function SideBar() {
  return (
    <>
      <div className="md:grid md:w-80 md:border-r-2 md:border-[#1f2937] md:h-screen hidden ml-4">
        <h1 className="h-0 font-bold text-center">
          <img
            src="/luna.png"
            alt="Logo luna"
            className="m-8 mx-auto transition-all duration-500 cursor-pointer size-14 md:size-10 hover:scale-150"
          />
        </h1>

        <div className="items-center mr-4 mb-80 lg:mb-40 2xl:mb-64">
          <section className="mt-4 mr-0" id="sidebar_overview">
            <div className="text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer text-center items-center p-2 font-semibold flex">
              <RiHome2Line className="ml-[6.1rem]" />
              <a href="" className="mx-auto ml-2">
                Resumen
              </a>
            </div>

            <div className="text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer text-center items-center p-2 font-semibold flex">
              <RiSettingsLine className="ml-[6.5rem]" />
              <a href="" className="mx-auto ml-2">
                Ajustes
              </a>
            </div>
          </section>

          <section className="mt-12" id="sidebar_principal">
            <div className="text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer text-center items-center p-2 font-semibold flex">
              <FaUsers className="ml-[6.2rem]" />
              <a href="" className="mx-auto ml-2">
                Usuarios
              </a>
            </div>

            <div className="text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer text-center items-center p-2 font-semibold flex">
              <PiSealWarningBold className="ml-24" />
              <a href="" className="mx-auto ml-2">
                Denuncias
              </a>
            </div>

            <div className="text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer text-center items-center p-2 font-semibold flex">
              <FaRegClipboard className="ml-[6.5rem]" />
              <a href="" className="mx-auto ml-2">
                Pizarra
              </a>
            </div>
          </section>


        </div>
        
        <div className="text-center text-[#afb6c2] hover:bg-[#111827] hover:text-white transition-all duration-200 rounded cursor-pointer my-auto mr-4 font-semibold p-4 flex items-center justify-between">
              <FaCircleUser className="size-8"/>
              <h2 className="mr-36">Usuario</h2>
              <BsThreeDotsVertical className="size-4"/>
        </div>
        
      </div>
    </>
  );
}
