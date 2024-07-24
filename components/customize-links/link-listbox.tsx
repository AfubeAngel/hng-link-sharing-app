import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { platforms } from "../../data/platforms";

const PlatformDropdown: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Listbox as="div" value={value} onChange={onChange} className="relative">
      {({ open }) => (
        <>
          <Listbox.Button className="flex items-center w-[255px] md:w-[600px] lg:w-[525px] xl:w-[688px] border border-gray-300 px-4 py-2 rounded bg-white shadow-md focus:outline-none">
            <span className="flex items-center">
              {value ? (
                <>
                  <Image
                    src={platforms.find((platform) => platform.name === value)?.icon || "/icons/github.svg"}
                    alt={value}
                    width={24}
                    height={24}
                  />
                  <span className="ml-3 text-[#333333]">{value}</span>
                </>
              ) : (
                <span className="text-[#333333] font-normal ">Github</span>
              )}
            </span>
            <svg className="ml-auto w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </Listbox.Button>

          <Listbox.Options
            className={`absolute z-10 mt-2 w-[255px] md:w-[600px] lg:w-[525px] xl:w-[688px] bg-white border border-gray-300 rounded shadow-lg ${
              open ? "block" : "hidden"
            }`}
          >
            {platforms.map((platform) => (
              <Listbox.Option
                key={platform.name}
                value={platform.name}
                as="div"
              >
                {({ active, selected }) => (
                 <div className={`flex items-center px-4 py-2 cursor-pointer ${active ? 'bg-gray-100 text-[#333333]' : 'text-[#333333]'} border-b border-gray-200 last:border-b-0`}>
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={24}
                      height={24}
                    />
                    <span
                      className={`ml-2 ${
                        selected
                          ? "font-semibold text-[#333333]"
                          : "text-[#333333]"
                      }`}
                    >
                      {platform.name}
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

export default PlatformDropdown;
