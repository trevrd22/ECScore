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
import Typography from '@mui/material/Typography';

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
  const [boolArray, setBoolArray] = useState(new Array(20).fill(false));

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
    "Other Building"
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

  return (
    <div className="format">
      {/* name question */}
      <h2>What is Your Name?</h2>
      <div>
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
      </div>

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
            <Autocomplete
          id="nameInput"
          autoSelect
          fullWidth
          sx={{ width: 375, marginLeft: "15px"}}
          options={buildings}
          onChange={(event, newValue) => {
            if (newValue) {
              // Only call setName if newValue is not null
              answer.setBuilding(newValue); // Update the selected name
              toggleIndexPerm(4);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Building" />}
        />
          </Slide>

          <Slide
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={350}
          >

<Typography variant="subtitle1" gutterBottom> Don't know which building is which? click <a href="https://uh.edu/maps/" target="_blank" rel="noopener noreferrer" style={{ font: "inherit" }}>me</a>! <br /> If you'd like to reserve a room not listed, select "Other Building".</Typography>
          </Slide>

        </div>
      )}
    </div>
  );
}
