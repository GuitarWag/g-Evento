export interface Event {
  id: string;
  title: string;
  type: string;
  formation: [Instrument] | [void];
  date: Date;
  musicians: [Musician] | [void];
  musiciansStatus: boolean;
  status:
    | 'sale'
    | 'sendedContract'
    | 'signedContract'
    | 'paid'
    | 'inPlanning'
    | 'inSprint'
    | 'done';
  dateOfCreation: number;
}
interface Instrument {
  name: string;
  icon: SVGMatrix | string;
}
export interface EventReq {
  title: string;
  type: string;
  formation: [Instrument] | [void];
  date: Date;
  musicians: [Musician] | [void];
  musiciansStatus: boolean;
  status:
    | 'sale'
    | 'sendedContract'
    | 'signedContract'
    | 'paid'
    | 'inPlanning'
    | 'inSprint'
    | 'done';
  dateOfCreation: number;
}

export interface Musician {
  id: string;
  name: string;
  phone: string;
  email: string;
  balance: number;
  dateOfCreation: number;
  payments: [
    {
      dateOfPayment: Date;
      value: number;
    },
  ];
}
export interface MusicianReq {
  name: string;
  phone: string;
  email: string;
  balance: number;
  dateOfCreation: number;
  payments:
    | [
        {
          dateOfPayment: Date;
          value: number;
        },
      ]
    | number;
}
