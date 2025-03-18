
export default class Answers {
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