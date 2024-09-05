import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  NextUIProvider,
  DropdownItem,
  Tooltip,
  Image,
} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import events from "../../events_data";

function Graphs() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const handleEventChange = (eventIndex) => {
    setSelectedEvent(events[eventIndex]);
  };
  return (
    <div className="flex-col w-full sm:w-2/3 h-screen flex items-center justify-center text-4xl font-bold bg-black text-white gap-10">
      <NextUIProvider>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col space-y-4 justify-center items-center">
            <Tooltip
              content="Select an event from the dropdown"
              placement="top"
            >
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    auto
                    icon={<FaChevronDown />}
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 font-bold font-raleway uppercase flex items-center justify-between"
                  >
                    {selectedEvent ? selectedEvent.date : "Select Event"}
                    <div>▼</div>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  {events.map((event, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleEventChange(index)}
                      className="w-full text-blue-600 hover:bg-orange-100 font-raleway"
                    >
                      {event.date}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Tooltip>
            <Image
              isZoomed
              width={900}
              height={600}
              alt="NextUI Fruit Image with Zoom"
              src={selectedEvent.img}
            />
          </div>
        </div>
      </NextUIProvider>
    </div>
  );
}

export default Graphs;
