import Autocomplete from "@mui/material/Autocomplete";
import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";

class Answers {
  timestamp: Date;
  name?: string;
  building?: string;
  startDate?: Date;
  endDate?: Date;
  eventTitle?: string;
  attendance?: number;
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

  setAttendance(attendance: number): void {
    this.attendance = attendance;
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

  getAttendance(): number | undefined {
    return this.attendance;
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
  const [isNameAnswered, setIsNameAnswered] = useState(false);

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
              setIsNameAnswered(true);
              console.log("Updated Answer Object:", answer);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Name" />}
        />
      </div>
      {isNameAnswered && (
        
          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={400}>
            <h2 style={{ marginTop: "20px" }}>Event Title?</h2>
            </Slide>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            />
<Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={400}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(event) => {
                const eventTitle = event.target.value; // Get the input value
                answer.setEventTitle(eventTitle); // Update the answer object
                console.log("Updated Event Title:", answer.getEventTitle());
              }}
            />
            </Slide>
          </div>
        
      )}
    </div>
  );
}
