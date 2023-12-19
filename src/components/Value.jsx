import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion";

export const Value = () => {
  return (
    <section className="w-full mt-16 px-8 py-4 flex flex-col lg:justify-center lg:items-center">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="hidden lg:block">
          <img
            src="./value.png"
            alt="image"
            className="rounded-lg border border-orange-400 lg:w-[350px] lg:h-[460px] md:w-[250px]"
          />
        </div>
        <div className="capitalize flex flex-col">
          <div>
            <h2 className="text-2xl font-medium text-orange-400">Our Value</h2>
            <h1 className="mb-1 text-4xl font-bold tracking-wide text-slate-700">
              Value We Give to You
            </h1>
            <p className="opacity-70 text-slate-600 w-[520px] text-[16px]">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better.
            </p>
          </div>
          <Accordion
            className="flex flex-col gap-2 drop-shadow-sm mt-2"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem key={i} className="drop-shadow-md bg-gray-50" uuid={i}>
                  <AccordionItemHeading className="flex flex-row justify-center items-center gap-2 bg-slate-100">
                    <AccordionItemButton className="w-full flex flex-row items-center justify-between px-8 py-4">
                      <div className="flex flex-row justify-center items-center p-2 bg-orange-400 rounded text-white drop-shadow-sm">
                        {item.icon}
                      </div>
                      <h2 className="font-bold text-slate-700 tracking-wide">{item.heading}</h2>
                      <div className="flex items-center justify-center">
                        <MdOutlineArrowDropDown size={30} color="white" className="bg-gradient-to-l from-blue-600 to-blue-500 rounded-sm" />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="w-[450px] font-medium opacity-70 text-slate-700">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
