import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

export default function Dropdown({ setRegion, region }) {
    const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

    return (
        <Listbox value={region} onChange={setRegion}>
            <div className="relative w-48">
                <ListboxButton
                    className="w-full cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2
                 text-left text-sm text-gray-900 shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {region}
                </ListboxButton>
                <ListboxOptions
                    className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md
                 bg-white py-1 text-sm shadow-lg ring-1 ring-black/5"
                >
                    {options.map((option) => (
                        <ListboxOption
                            key={option}
                            value={option}
                            className="cursor-pointer select-none px-4 py-2 text-sm text-gray-900 data-[headlessui-state=active]:bg-blue-500 data-[headlessui-state=active]:text-white"
                        >
                            {option}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>

    );
}