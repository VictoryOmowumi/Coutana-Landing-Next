import Image from "next/image";
import { Icon } from "@iconify/react";

const lists = [
  {
    title: "Custom Fit",
    description: "Shop the latest trendy styles",
    icon: <Icon icon="twemoji:dress" width="50" />,
  },
  {
    title: "Custom Fit",
    description: "Shop the latest trendy styles",
    icon: <Icon icon="twemoji:running-shirt" width="50" />,
  },
  {
    title: "Custom Fit",
    description: "Shop the latest trendy styles",
    icon: <Icon icon="noto-v1:dress" width="50" />,
  },
  {
    title: "Custom Fit",
    description: "Shop the latest trendy styles",
    icon: <Icon icon="fxemoji:dress" width="50" />,
  },
];

export const Box = () => {
  return (
    <div className="md:rounded-t-full rounded-md shadow-md w-11/12 mx-auto mt-5 bg-[#3a3a50] p-8 md:h-[10rem] text-white">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:px-20 px-4">
        {lists.map(({ title, description, icon }) => (
          <div>
            <div className="flex items-center justify-start">
              <p className="font-bold text-lg mr-4">{title}</p>
              {icon}
            </div>
            <p className="text-[#c6c7cd] my-4">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
