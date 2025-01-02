import Autocomplete from "@mui/material/Autocomplete";
import { useState, useRef } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import type { Dayjs } from "dayjs";
import Typography from "@mui/material/Typography";
import { RsTile } from "./RsTile";
class Answers {
  timestamp: Date;
  name?: string;
  building?: string;
  startDate?: Date;
  endDate?: Date;
  eventTitle?: string;
  room?: string;
  eventDescription?: string;
  roomSecondChoice?: string;
  roomThirdChoice?: string;
  AVServices?: boolean;
  minors?: boolean;
  food?: boolean;
  alcohol?: boolean;
  tentRented?: boolean;
  openFlame?: boolean;
  collectingMoney?: boolean;
  jointActivity?: boolean;
  ticketSales?: boolean;
  honorsStudent?: boolean;
  chairSetUp?: boolean;

  constructor() {
    this.timestamp = new Date();
  }

  // Setters

  setName(name: string): void {
    this.name = name;
  }

  setBuilding(building: string): void {
    this.building = building;
  }

  setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }

  setEventTitle(eventTitle: string): void {
    this.eventTitle = eventTitle;
  }

  setRoom(room: string): void {
    this.room = room;
  }

  setEventDescription(eventDescription: string): void {
    this.eventDescription = eventDescription;
  }

  setRoomSecondChoice(roomSecondChoice: string): void {
    this.roomSecondChoice = roomSecondChoice;
  }

  setRoomThirdChoice(roomThirdChoice: string): void {
    this.roomThirdChoice = roomThirdChoice;
  }

  setAVServices(AVServices: boolean): void {
    this.AVServices = AVServices;
  }

  setMinors(minors: boolean): void {
    this.minors = minors;
  }

  setFood(food: boolean): void {
    this.food = food;
  }

  setAlcohol(alcohol: boolean): void {
    this.alcohol = alcohol;
  }

  setTentRented(tentRented: boolean): void {
    this.tentRented = tentRented;
  }

  setOpenFlame(openFlame: boolean): void {
    this.openFlame = openFlame;
  }

  setCollectingMoney(collectingMoney: boolean): void {
    this.collectingMoney = collectingMoney;
  }

  setJointActivity(jointActivity: boolean): void {
    this.jointActivity = jointActivity;
  }

  setTicketSales(ticketSales: boolean): void {
    this.ticketSales = ticketSales;
  }

  setHonorsStudent(honorsStudent: boolean): void {
    this.honorsStudent = honorsStudent;
  }

  setChairSetUp(chairSetUp: boolean): void {
    this.chairSetUp = chairSetUp;
  }

  // Getters

  getTimestamp(): Date {
    return this.timestamp;
  }

  getName(): string | undefined {
    return this.name;
  }

  getBuilding(): string | undefined {
    return this.building;
  }

  getStartDate(): Date | undefined {
    return this.startDate;
  }

  getEndDate(): Date | undefined {
    return this.endDate;
  }

  getEventTitle(): string | undefined {
    return this.eventTitle;
  }

  getRoom(): string | undefined {
    return this.room;
  }

  getEventDescription(): string | undefined {
    return this.eventDescription;
  }

  getRoomSecondChoice(): string | undefined {
    return this.roomSecondChoice;
  }

  getRoomThirdChoice(): string | undefined {
    return this.roomThirdChoice;
  }

  getAVServices(): boolean | undefined {
    return this.AVServices;
  }

  getMinors(): boolean | undefined {
    return this.minors;
  }

  getFood(): boolean | undefined {
    return this.food;
  }

  getAlcohol(): boolean | undefined {
    return this.alcohol;
  }

  getTentRented(): boolean | undefined {
    return this.tentRented;
  }

  getOpenFlame(): boolean | undefined {
    return this.openFlame;
  }

  getCollectingMoney(): boolean | undefined {
    return this.collectingMoney;
  }

  getJointActivity(): boolean | undefined {
    return this.jointActivity;
  }

  getTicketSales(): boolean | undefined {
    return this.ticketSales;
  }

  getHonorsStudent(): boolean | undefined {
    return this.honorsStudent;
  }

  getChairSetUp(): boolean | undefined {
    return this.chairSetUp;
  }
}

export default function Form() {
  const answer = new Answers();
  const toggledIndices = useRef(new Set<number>()); // Track toggled indices
  const [boolArray, setBoolArray] = useState(new Array(40).fill(false));
  const prevIndexRef = useRef<number>(-1); // Initialize with -1 to represent no index selected
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleIndexTemp = (newIndex: number) => {
    // If the previous index is valid, set it to false
    if (prevIndexRef.current !== -1 && prevIndexRef.current !== newIndex) {
      setBoolArray((prevArray) => {
        const updatedArray = [...prevArray];
        updatedArray[prevIndexRef.current] = false; // Disable old index
        updatedArray[newIndex] = true; // Enable new index
        return updatedArray;
      });
    } else if (prevIndexRef.current !== newIndex) {
      setBoolArray((prevArray) => {
        const updatedArray = [...prevArray];
        updatedArray[newIndex] = true; // Enable new index
        return updatedArray;
      });
    }

    prevIndexRef.current = newIndex; // Update the previous index to the current one
  };

  const toggleIndexPerm = (index: number) => {
    if (toggledIndices.current.has(index)) {
      return; // Skip if already toggled
    }

    // Mark the index as toggled
    toggledIndices.current.add(index);

    setBoolArray((prevArray) =>
      prevArray.map((value, i) => (i === index ? !value : value))
    );
  };

  const rooms = [
    {
      name: "Cullen College of Engineering Building",
      index: 4,
      imageSrc: "/images/engineering.jpg",
      radioOptions: [
        { value: "commons", label: "Commons (Engineering Pit)" },
        { value: "w205d3", label: "W205 D3 [65]" },
        { value: "e220d3", label: "E220 D3 [26]" },
        { value: "102d", label: "102D [44]" },
        { value: "n61d", label: "N61D [48]" },
        { value: "w122d3", label: "W122 D3 [124]" },
        { value: "l2d2", label: "L2D2 [220]" },
      ],
    },
    {
      name: "Agnes Arnold Auditorium",
      index: 5,
      imageSrc: "/images/aaa.jpg",
      radioOptions: [
        { value: "AAA1", label: "AAA 1 [?]" },
        { value: "AAA2", label: "AAA 2 [?]" },
      ],
    },
    {
      name: "Agnes Arnold Hall",
      index: 6,
      imageSrc: "/images/agnes.jpg",
      radioOptions: [{ value: "unavailable", label: "Currently Unavailable!" }],
    },
    {
      name: "Architecture Building",
      index: 7,
      imageSrc: "/images/archi.jpg",
      radioOptions: [
        { value: "room402", label: "Room 402 [40]" },
        { value: "room209", label: "Room 209 [34]" },
        { value: "room215", label: "Room 215 [8]" },
        { value: "room219", label: "Room 219 [21]" },
        { value: "room150", label: "Room 150 [222]" },
      ],
    },
    {
      name: "Classroom and Business Building (CBB)",
      index: 8,
      imageSrc: "/images/cbb.jpg",
      radioOptions: [
        { value: "cbb104", label: "CBB 104 [80]" },
        { value: "cbb106", label: "CBB 106 [80]" },
        { value: "cbb108", label: "CBB 108 [80]" },
        { value: "cbb110", label: "CBB 110 [80]" },
        { value: "cbb118", label: "CBB 118 [80]" },
        { value: "cbb120", label: "CBB 120 [80]" },
        { value: "cbb122", label: "CBB 122 [80]" },
        { value: "cbb124", label: "CBB 124 [80]" },
        { value: "cbb214", label: "CBB 214 [48]" },
      ],
    },
    {
      name: "Cemo Hall (CEMO)",
      index: 9,
      imageSrc: "/images/cemo.jpg",
      radioOptions: [
        { value: "cemo100d", label: "CEMO 100D [431](may be unavailable)" },
      ],
    },
    {
      name: "Cougar Village",
      index: 10,
      imageSrc: "/images/cv.jpg",
      radioOptions: [{ value: "inprogress", label: "inprogress" }],
    },
    {
      name: "Elizabeth D. Rockwell Pavillion",
      index: 11,
      imageSrc: "/images/edrp.jpg",
      radioOptions: [{ value: "figureitout", label: "figureitout" }],
    },
    {
      name: "Farish Hall",
      index: 12,
      imageSrc: "/images/farish.jpg",
      radioOptions: [
        { value: "fh101", label: "FH 101 (Kiva Room)[?]" },
        { value: "fh131", label: "FH 131 [32]" },
        { value: "fh135", label: "FH 135 [48]" },
        { value: "fh211", label: "FH 211 [49]" },
        { value: "fh213", label: "FH 213 [49]" },
        { value: "fh215", label: "FH 215 [49]" },
        { value: "fh217", label: "FH 217 [49]" },
        { value: "fh218", label: "FH 218 [49]" },
        { value: "fh219", label: "FH 219 [49]" },
        { value: "fh222a", label: "FH 222 A [49]" },
        { value: "fh232", label: "FH 232 [70]" },
        { value: "fh307", label: "FH 307 [44]" },
      ],
    },
    {
      name: "Fleming Building",
      index: 13,
      imageSrc: "/images/fleming.jpg",
      radioOptions: [
        { value: "f154", label: "F 154 [40]" },
        { value: "f160", label: "F 160 [308]" },
      ],
    },
    {
      name: "Fred J. Heyne Building",
      index: 14,
      imageSrc: "/images/fred.jpg",
      radioOptions: [
        { value: "h28", label: "H 28 [?]" },
        { value: "h30", label: "H 30 [?]" },
        { value: "h34", label: "H 34 [?]" },
      ],
    },
    {
      name: "Garrison Gym",
      index: 15,
      imageSrc: "/images/garrison.jpg",
      radioOptions: [
        { value: "garg201", label: "GAR G 201 [97]" },
        { value: "garg202", label: "GAR G 202 [164]" },
      ],
    },
    {
      name: "Honors College",
      index: 16,
      imageSrc: "/images/honors.jpg",
      radioOptions: [
        { value: "212c", label: "212C (The Commons)[60]" },
        { value: "212s", label: "212S (Large Classroom)[49] " },
        { value: "212p", label: "212P (Martel Room)[20]" },
        { value: "202b", label: "202B (Deans Conference Room)[10]" },
        { value: "212d", label: "212D (Estess Library)[24]" },
        { value: "212j", label: "212J (Fishbowl 1)[22]" },
        { value: "212l", label: "212L (Fishbowl 2)[25]" },
        { value: "212", label: "212 (Computer Center)[16]" },
      ],
    },
    {
      name: "Isabel C. Cameron",
      index: 17,
      imageSrc: "/images/isabel.jpg",
      radioOptions: [
        { value: "cam105", label: "CAM 105 [28]" },
        { value: "cam101", label: "CAM 101 [69]" },
        { value: "cam103", label: "CAM 103 [29]" },
      ],
    },
    {
      name: "Oberholtzer Hall",
      index: 18,
      imageSrc: "/images/oberholtzer.jpg",
      radioOptions: [{ value: "inprogress", label: "Ober-inprogress" }],
    },
    {
      name: "Outdoor Space",
      index: 19,
      imageSrc: "/images/outdoor.jpg",
      radioOptions: [{ value: "inprogress", label: "outdoor-inprogress" }],
    },
    {
      name: "Philip Guthrie Hoffman Hall (PGH)",
      index: 20,
      imageSrc: "/images/pgh.jpg",
      radioOptions: [{ value: "inprogress", label: "PGH-inprogress" }],
    },
    {
      name: "Science and Engineering Complex (SEC)",
      index: 21,
      imageSrc: "/images/sec.jpg",
      radioOptions: [
        { value: "sec100", label: "SEC 100 (SEC Auditorium)[546]" },
        { value: "sec101", label: "SEC 101 [280]" },
        { value: "sec102", label: "SEC 102 [228]" },
        { value: "sec104", label: "SEC 104 [136]" },
        { value: "sec105", label: "SEC 105 [109]" },
        { value: "sec201", label: "SEC 201 [56]" },
        { value: "sec202", label: "SEC 202 [60]" },
        { value: "sec203", label: "SEC 203 [55]" },
        { value: "sec204", label: "SEC 204 [63]" },
        { value: "sec205", label: "SEC 205 [61]" },
        { value: "sec206", label: "SEC 206 [61]" },
      ],
    },
    {
      name: "Science and Research 1 (SR1)",
      index: 22,
      imageSrc: "/images/sr1.jpg",
      radioOptions: [
        { value: "sr116", label: "SR 116 [202]" },
        { value: "sr117", label: "SR 117 [303]" },
      ],
    },
    {
      name: "Science Building",
      index: 23,
      imageSrc: "/images/science.jpg",
      radioOptions: [
        { value: "s101", label: "S 101 [36]" },
        { value: "s102", label: "S 102 [38]" },
        { value: "s105", label: "S 105 [96]" },
        { value: "s114", label: "S 114 [50]" },
        { value: "s116", label: "S 116 [46]" },
        { value: "s120", label: "S 120 [42]" },
        { value: "s202", label: "S 202 [36]" },
      ],
    },
    {
      name: "Student Center North and South",
      index: 24,
      imageSrc: "/images/student.jpg",
      radioOptions: [{ value: "inprogress", label: "student-inprogress" }],
    },
    {
      name: "Teaching Unit 2",
      index: 25,
      imageSrc: "/images/tu2.jpg",
      radioOptions: [
        { value: "tu2144", label: "TU2 144 [106]" },
        { value: "tu2211", label: "TU2 211 [72]" },
        { value: "tu2215", label: "TU2 215 [35]" },
        { value: "tu2240", label: "TU2 240 [98]" },
      ],
    },
    {
      name: "Other Building",
      index: 26,
      imageSrc: "/images/other.jpg",
      radioOptions: [{ value: "figureitout", label: "other-figureitout" }],
    },
  ];

  const buildings = rooms.map(room => room.name);


  interface RadioOption {
    value: string;
    label: string;
  }

  interface Room {
    imageSrc: string;
    radioOptions: RadioOption[];
  }

  const names = [
    "Richard Luong",
    "Emily Nguyen",
    "Kelsey Wong",
    "Muskaan Trivedi",
    "Gabriel Valenzona",
    "Rachel Pham",
    "Zaid Azhar",
    "Raphael Co",
    "Matthew Dennis",
    "Siam Bhuiyan",
    "Duong Nguyen",
    "Hailey Bui",
    "Mi Mach",
    "Trevor Drummond",
    "Trieu Dinh",
  ];

  return (
    <div className="formatForm">
      {/* name question */}
      <h2>What is Your Name?</h2>
      <Autocomplete
        id="nameInput"
        autoSelect
        sx={{ width: 300 }}
        options={names}
        onChange={(event, newValue) => {
          if (newValue) {
            // Only call setName if newValue is not null
            answer.setName(newValue); // Update the selected name
            toggleIndexPerm(0);
            console.log("Updated Answer Object:", answer);
          }
        }}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />

      {/* event title question*/}
      {boolArray[0] && (
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <h2 style={{ marginTop: "20px" }}>Event Title?</h2>
          </Slide>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          />
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <TextField
              id="eventTitle"
              label="Title"
              variant="outlined"
              onChange={(event) => {
                const eventTitle = event.target.value.trim(); // Get the input value
                answer.setEventTitle(eventTitle); // Update the answer object
                toggleIndexPerm(1);
              }}
            />
          </Slide>
        </div>
      )}
      {/* event description question*/}
      {boolArray[1] && (
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <h2 style={{ marginTop: "20px" }}>Event Description?</h2>
          </Slide>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          />
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <TextField
              id="eventDescription"
              label="Description"
              variant="outlined"
              multiline
              fullWidth
              minRows={2}
              onChange={(event) => {
                const eventDescription = event.target.value.trim(); // Get the input value
                answer.setEventDescription(eventDescription); // Update the answer object
                toggleIndexPerm(2);
              }}
            />
          </Slide>
        </div>
      )}
      {/* start and end times questions*/}
      {boolArray[2] && (
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={350}
        >
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              display: "static",
            }}
          >
            <Stack direction="column">
              <h2 style={{ marginTop: "20px" }}>When is your Event?</h2>
              <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="Start Time"
                      sx={{ width: "200px" }}
                      onChange={(newValue: Dayjs | null) => {
                        answer.setStartDate(
                          newValue ? newValue.toDate() : new Date()
                        );
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="End Time"
                      sx={{ width: "200px" }}
                      onChange={(newValue: Dayjs | null) => {
                        answer.setEndDate(
                          newValue ? newValue.toDate() : new Date()
                        );
                        toggleIndexPerm(3);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
            </Stack>
          </div>
        </Slide>
      )}

      {/* what room question*/}
      {boolArray[3] && (
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <h2 style={{ marginTop: "20px" }}>What Building?</h2>
          </Slide>

          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Autocomplete
  id="buildingInput"
  autoSelect
  fullWidth
  sx={{ width: 375 }}
  options={buildings}
  onChange={(event, newValue) => {
    if (newValue) {
      answer.setBuilding(newValue); // Update the selected name
      console.log(answer.getBuilding());
      
      const room = rooms.find(r => r.name === answer.getBuilding());
      toggleIndexTemp(room ? room.index : -1);

    }
  }}
  renderInput={(params) => (
    <TextField {...params} label="Building" />
  )}
/>
            </Box>
          </Slide>
          <Slide
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >
            <Typography variant="subtitle1" gutterBottom>
              {" "}
              Don't know which building is which? click{" "}
              <a
                href="https://uh.edu/maps/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ font: "inherit" }}
              >
                me
              </a>
              ! <br /> If you'd like to reserve a room not listed select "Other
              Building". <br /> Select "Outdoor Space" to reserve an outdoor
              space! (lol)
            </Typography>
          </Slide>
        </div>
      )}
      <RsTile booleanArray={boolArray} rooms={rooms} i={4} j={27} />
    </div>
  );
}
