type Person = {
  id: string;
  firstname: string;
  lastname: string;
  position: string;
  phone: string;
  email: string;
  photo: string;
  managerId: string;
  manager: string;
};

type People = Person[];

interface Message {
  id: string;
  text: string;
  type: 'info' | 'error' | 'success';
}

declare module '*.svg' {
  const path: string;
  export default path;
}

declare module '*/people.json' {
  export const people: People;
}
