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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RoomSelection from "./RoomSelection";

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

  const buildings: string[] = [
    "Cullen College of Engineering Building",
    "Agnes Arnold Auditorium",
    "Agnes Arnold Hall",
    "Architecture Building",
    "Cemo Hall (CEMO)",
    "Classroom and Business Building (CBB)",
    "Cougar Village",
    "Elizabeth D. Rockwell Pavillion",
    "Farish Hall",
    "Fleming Building",
    "Fred J. Heyne Building",
    "Garrison Gym",
    "Honors College",
    "Isabel C. Cameron",
    "Oberholtzer Hall",
    "Philip Guthrie Hoffman Hall (PGH)",
    "Science and Engineering Complex (SEC)",
    "Science and Research 1 (SR1)",
    "Science Building",
    "Student Center North and South",
    "Teaching Unit 2",
    "Other Building",
    "Outdoor Space",
  ];

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

  const rooms = [
    {
      imageSrc: "/images/engineering.jpg",
      radioOptions: [
        { value: "Commons", label: "Commons (Engineering Pit)" },
        { value: "W205D3", label: "W205 D3 [65]" },
        { value: "E220D3", label: "E220 D3 [26]" },
        { value: "102D", label: "102D [44]" },
        { value: "N61D", label: "N61D [48]" },
        { value: "W122D3", label: "W122 D3 [124]" },
        { value: "L2D2", label: "L2D2 [220]" },
      ],
    },
    {
      imageSrc: "/images/agnes.jpg",
      radioOptions: [{ value: "unavailable", label: "Currently Unavailable!" }],
    },
    {
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
      imageSrc: "/images/aaa.jpg",
      radioOptions: [
        { value: "AAA1", label: "AAA 1 [?]" },
        { value: "AAA2", label: "AAA 2 [?]" },
      ],
    },
    {
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
      imageSrc: "/images/cemo.jpg",
      radioOptions: [
        { value: "cemo100d", label: "CEMO 100D [431](may be unavailable)" },
      ],
    },
    {
      imageSrc: "/images/cv.jpg",
      radioOptions: [{ value: "inprogress", label: "inprogress" }],
    },
    {
      imageSrc: "/images/edrp.jpg",
      radioOptions: [{ value: "figureitout", label: "figureitout" }],
    },
    {
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
        { value: "fh219", label: "FH 219 [49]" },
        { value: "fh232", label: "FH 232 [70]" },
        { value: "fh307", label: "FH 307 [44]" },
      ],
    },
    {
      imageSrc: "/images/fleming.jpg",
      radioOptions: [
        { value: "f154", label: "F 154" },
        { value: "f160", label: "F 160" },
      ],
    },
    {
      imageSrc: "/images/fred.jpg",
      radioOptions: [
        { value: "h28", label: "H 28" },
        { value: "h30", label: "H 30" },
        { value: "h34", label: "H 34" },
      ],
    },
    {
      imageSrc: "/images/garrison.jpg",
      radioOptions: [
        { value: "garg201", label: "GAR G 201" },
        { value: "garg202", label: "GAR G 202" },
      ],
    },
    {
      imageSrc: "/images/honors.jpg",
      radioOptions: [{ value: "212C", label: "212C (The Co" }],
    },
    {
      imageSrc: "/images/isabel.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/oberholtzer.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/outdoor.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/pgh.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/sec.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/sr1.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/science.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/student.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/tu2.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
    {
      imageSrc: "/images/other.jpg",
      radioOptions: [{ value: "unavailable", label: "cu" }],
    },
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
                    /* This will be the key to which indice is which*/
                    switch (answer.getBuilding()) {
                      case "Cullen College of Engineering Building":
                        toggleIndexTemp(4);
                        break;

                      case "Agnes Arnold Auditorium":
                        toggleIndexTemp(5);
                        break;

                      case "Agnes Arnold Hall":
                        toggleIndexTemp(6);
                        break;

                      case "Architecture Building":
                        toggleIndexTemp(7);
                        break;

                      case "Classroom and Business Building (CBB)":
                        toggleIndexTemp(8);
                        break;

                      case "Cemo Hall (CEMO)":
                        toggleIndexTemp(9);
                        break;

                      case "Cougar Village":
                        toggleIndexTemp(10);
                        break;

                      case "Elizabeth D. Rockwell Pavillion":
                        toggleIndexTemp(11);
                        break;

                      case "Farish Hall":
                        toggleIndexTemp(12);
                        break;

                      case "Fleming Building":
                        toggleIndexTemp(13);
                        break;

                      case "Fred J. Heyne Building":
                        toggleIndexTemp(14);
                        break;

                      case "Garrison Gym":
                        toggleIndexTemp(15);
                        break;

                      case "Honors College":
                        toggleIndexTemp(16);
                        break;

                      case "Isabel C. Cameron":
                        toggleIndexTemp(17);
                        break;

                      case "Oberholtzer Hall":
                        toggleIndexTemp(18);
                        break;

                      case "Outdoor Space":
                        toggleIndexTemp(19);
                        break;

                      case "Philip Guthrie Hoffman Hall (PGH)":
                        toggleIndexTemp(20);
                        break;

                      case "Science and Engineering Complex (SEC)":
                        toggleIndexTemp(21);
                        break;

                      case "Science and Research 1 (SR1)":
                        toggleIndexTemp(22);
                        break;

                      case "Science Building":
                        toggleIndexTemp(23);
                        break;

                      case "Student Center North and South":
                        toggleIndexTemp(24);
                        break;

                      case "Teaching Unit 2":
                        toggleIndexTemp(25);
                        break;

                      case "Other Building":
                        toggleIndexTemp(26);
                        break;

                      default:
                        // Optional default case
                        console.log("Building not found or selected");
                        break;
                    }
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

      {boolArray[4] && (
        <div>
          <RoomSelection
            imageSrc={rooms[0].imageSrc}
            radioOptions={rooms[0].radioOptions}
            slideIn={boolArray[4]}
          />
        </div>
      )}

      {boolArray[5] && (
        <div>
          <RoomSelection
            imageSrc={rooms[1].imageSrc}
            radioOptions={rooms[1].radioOptions}
            slideIn={boolArray[5]}
          />
        </div>
      )}

      {boolArray[6] && (
        <div>
          <RoomSelection
            imageSrc={rooms[2].imageSrc}
            radioOptions={rooms[2].radioOptions}
            slideIn={boolArray[6]}
          />
        </div>
      )}

      {boolArray[7] && (
        <div>
          <RoomSelection
            imageSrc={rooms[3].imageSrc}
            radioOptions={rooms[3].radioOptions}
            slideIn={boolArray[7]}
          />
        </div>
      )}

      {boolArray[8] && (
        <div>
          <RoomSelection
            imageSrc={rooms[4].imageSrc}
            radioOptions={rooms[4].radioOptions}
            slideIn={boolArray[8]}
          />
        </div>
      )}

      {boolArray[9] && (
        <div>
          <RoomSelection
            imageSrc={rooms[5].imageSrc}
            radioOptions={rooms[5].radioOptions}
            slideIn={boolArray[9]}
          />
        </div>
      )}

      {boolArray[10] && (
        <div>
          <RoomSelection
            imageSrc={rooms[6].imageSrc}
            radioOptions={rooms[6].radioOptions}
            slideIn={boolArray[10]}
          />
        </div>
      )}

      {boolArray[11] && (
        <div>
          <RoomSelection
            imageSrc={rooms[7].imageSrc}
            radioOptions={rooms[7].radioOptions}
            slideIn={boolArray[11]}
          />
        </div>
      )}

      {boolArray[12] && (
        <div>
          <RoomSelection
            imageSrc={rooms[8].imageSrc}
            radioOptions={rooms[8].radioOptions}
            slideIn={boolArray[12]}
          />
        </div>
      )}

      {boolArray[13] && (
        <div>
          <RoomSelection
            imageSrc={rooms[9].imageSrc}
            radioOptions={rooms[9].radioOptions}
            slideIn={boolArray[13]}
          />
        </div>
      )}

      {boolArray[14] && (
        <div>
          <RoomSelection
            imageSrc={rooms[10].imageSrc}
            radioOptions={rooms[10].radioOptions}
            slideIn={boolArray[14]}
          />
        </div>
      )}

      {boolArray[15] && (
        <div>
          <RoomSelection
            imageSrc={rooms[11].imageSrc}
            radioOptions={rooms[11].radioOptions}
            slideIn={boolArray[15]}
          />
        </div>
      )}

      {boolArray[16] && (
        <div>
          <RoomSelection
            imageSrc={rooms[12].imageSrc}
            radioOptions={rooms[12].radioOptions}
            slideIn={boolArray[16]}
          />
        </div>
      )}

      {boolArray[17] && (
        <div>
          <RoomSelection
            imageSrc={rooms[13].imageSrc}
            radioOptions={rooms[13].radioOptions}
            slideIn={boolArray[17]}
          />
        </div>
      )}

      {boolArray[18] && (
        <div>
          <RoomSelection
            imageSrc={rooms[14].imageSrc}
            radioOptions={rooms[14].radioOptions}
            slideIn={boolArray[18]}
          />
        </div>
      )}

      {boolArray[19] && (
        <div>
          <RoomSelection
            imageSrc={rooms[15].imageSrc}
            radioOptions={rooms[15].radioOptions}
            slideIn={boolArray[19]}
          />
        </div>
      )}

      {boolArray[20] && (
        <div>
          <RoomSelection
            imageSrc={rooms[16].imageSrc}
            radioOptions={rooms[16].radioOptions}
            slideIn={boolArray[20]}
          />
        </div>
      )}

      {boolArray[21] && (
        <div>
          <RoomSelection
            imageSrc={rooms[17].imageSrc}
            radioOptions={rooms[17].radioOptions}
            slideIn={boolArray[21]}
          />
        </div>
      )}

      {boolArray[22] && (
        <div>
          <RoomSelection
            imageSrc={rooms[18].imageSrc}
            radioOptions={rooms[18].radioOptions}
            slideIn={boolArray[22]}
          />
        </div>
      )}

      {boolArray[23] && (
        <div>
          <RoomSelection
            imageSrc={rooms[19].imageSrc}
            radioOptions={rooms[19].radioOptions}
            slideIn={boolArray[23]}
          />
        </div>
      )}

      {boolArray[24] && (
        <div>
          <RoomSelection
            imageSrc={rooms[20].imageSrc}
            radioOptions={rooms[20].radioOptions}
            slideIn={boolArray[24]}
          />
        </div>
      )}

      {boolArray[25] && (
        <div>
          <RoomSelection
            imageSrc={rooms[21].imageSrc}
            radioOptions={rooms[21].radioOptions}
            slideIn={boolArray[25]}
          />
        </div>
      )}

      {boolArray[26] && (
        <div>
          <RoomSelection
            imageSrc={rooms[22].imageSrc}
            radioOptions={rooms[22].radioOptions}
            slideIn={boolArray[26]}
          />
        </div>
      )}
    </div>
  );
}
