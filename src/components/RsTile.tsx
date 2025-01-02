import RoomSelection from "./RoomSelection";
import type React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface Room {
  index: number;
  name: string;
  imageSrc: string;
  radioOptions: RadioOption[];
}

interface rsTileProps {
    booleanArray: Array<boolean>;
    rooms: Room[];
   i: number;
    j: number;

  }

  export const RsTile: React.FC<rsTileProps> = ({
    booleanArray,
    rooms,
    i,
    j,
  }) => {
    return (
      <>
        {Array.from({ length: j - i }).map((_, index) => {
          const currentIndex = i + index; // Increment i for each iteration
          return (
            booleanArray[currentIndex] && (
              <div key={currentIndex}>
                <RoomSelection
                  imageSrc={rooms[currentIndex - 4].imageSrc}
                  radioOptions={rooms[currentIndex - 4].radioOptions}
                  slideIn={booleanArray[currentIndex]}
                />
              </div>
            )
          );
        })}
      </>
    );
  };