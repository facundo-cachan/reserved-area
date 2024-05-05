type Phone = number;
type Email = string;
type Address = {
  street: string;
  local: string;
  province?: string;
};
type PersonProps = {
  id: number;
  name: string;
  surname: string;
  birthdate: Date;
  phone: Phone;
  email: Email;
  address?: Address;
};
enum LevelProps {
  "Aprendiz" = 1,
  "Compañero" = 2,
  "Maestro" = 3,
}
enum RolesGL {
  "Delegado Titular Asamblea",
  "Delegado Suplente Asamblea",
  "Delegado Hogar",
  "Delegado Biblioteca",
}
enum Roles {
  "Venerable Maestro",
  "1er Vigilante",
  "2do Vigilante",
  "Orador",
  "Secretario",
  "Tesorero",
  "Hospitalario",
  "Experto",
  "Maestro De Ceremonias",
  "Guarda Templo Interno",
  "Guarda Templo Externo",
}
type MemberProps = PersonProps & {
  matricula: number;
  level: LevelProps;
  rol?: keyof typeof Roles;
  rolGL?: keyof typeof RolesGL;
};
const members: Array<MemberProps> = [
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96651,
    name: "Matias Carlos",
    surname: "FROMENT",
    level: 3,
    rol: "1er Vigilante",
    address: { street: "Bonpland 2029", local: "CABA" },
    phone: 5491169806226,
    email: "liok03@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96370,
    name: "Juan Martin",
    surname: "SANCHEZ",
    level: 3,
    rol: "Orador",
    address: { street: "Av Raul Scalabrini Ortiz 2683 2ºD", local: "CABA" },
    phone: 5491149469717,
    email: "juanmartin_sg@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 95311,
    name: "Diego",
    surname: "DERINCOVSKY",
    level: 3,
    rol: "Secretario",
    address: { street: "La Pampa 1210", local: "CABA" },
    phone: 5491133548375,
    email: "diegodh@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 100399,
    name: "Mario Alejandro",
    surname: "KATZENELL",
    level: 3,
    rol: "Tesorero",
    address: { street: "14 de Julio 1333 4º A", local: "CABA" },
    phone: 5491167113174,
    email: "mkatzenell@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 100214,
    name: "Diego Gabriel",
    surname: "MEDOLLA",
    level: 3,
    rol: "Hospitalario",
    address: { street: "Arevalo 2338 1º C", local: "CABA" },
    phone: 5491168189220,
    email: "diegomedolla@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("31-07-81"),
    matricula: 92968,
    name: "Facundo",
    surname: "CACHAN",
    level: 3,
    rol: "Experto",
    address: { street: "Chile 986", local: "CABA" },
    phone: 5491151110483,
    email: "facundorc@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 93994,
    name: "Federico Miguel",
    surname: "TOMA",
    level: 3,
    rol: "Guarda Templo Interno",
    address: { street: "Arenales 2251", local: "CABA" },
    phone: 5491158086690,
    email: "fedetoma@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 99408,
    name: "Juan Jose",
    surname: "RODIL",
    level: 3,
    rol: "Guarda Templo Externo",
    address: { street: "Fragata Pte. Sarmiento 2226", local: "CABA" },
    phone: 5491136561360,
    email: "jjrodil@yahoo.com.ar",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 98664,
    name: "Nicolas Carlos",
    surname: "ABAD",
    level: 2,
    address: { street: "J.M.Gutierrez 2385", local: "CABA" },
    phone: 5491133864700,
    email: "nicolasabad@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 104243,
    name: "Lautaro",
    surname: "ARAGON",
    level: 1,
    address: { street: "Gral.Toribio de Luzuriaga 981", local: "Hurlingham" },
    phone: 5491168567764,
    email: "lautaroaragonh@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 100218,
    name: "Martin Ignacio",
    surname: "ARIAS",
    level: 2,
    address: { street: "Guardia Vieja", local: "CABA" },
    phone: 5491123095688,
    email: "ariasmartinignacio@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 102690,
    name: "Alejandro",
    surname: "CHARA",
    level: 1,
    address: { street: "Avenida Las Heras 2950", local: "CABA" },
    phone: 5493855145263,
    email: "charaalejandro5@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 99407,
    name: "Nicolas",
    surname: "FASSONI",
    level: 1,
    address: { street: "Gascon 932", local: "CABA" },
    phone: 5491156309936,
    email: "nicolasfassoni@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 98348,
    name: "Pablo",
    surname: "FERRARA",
    level: 2,
    address: { street: "Arroyo 881", local: "CABA" },
    phone: 5491166267859,
    email: "ferrarapablo79@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 98321,
    name: "German",
    surname: "FRATTINI",
    level: 2,
    address: { street: "Gelabert 578", local: " corrientes" },
    phone: 54937954778812,
    email: "germantrc@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 100641,
    name: "Mauricio",
    surname: "GATTI",
    level: 1,
    address: { street: "Av.Fiorotto 356", local: " Pueblo Belgrano" },
    phone: 5493446499704,
    email: "mauriciodavicopgb@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96394,
    name: "Ignacio Facundo",
    surname: "GIL",
    level: 2,
    address: { street: "San Jose 338", local: "CABA" },
    phone: 5491152620070,
    email: "iortelli@agba.com.ar",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96386,
    name: "Rafael Brian",
    surname: "KIRCHUCK",
    level: 2,
    address: { street: "Marcelo T de Alvear 2331", local: "CABA" },
    phone: 5491134422941,
    email: "briangimenez@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96313,
    name: "Gabriel",
    surname: "KUSZNIR",
    level: 2,
    address: { street: "Paroissien 2776 PB 3", local: "CABA" },
    phone: 5491166869614,
    email: "gziblat@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 101079,
    name: "Juan Ezequiel",
    surname: "LOZANO",
    level: 3,
    address: { street: "Ferre 2238", local: "Lanus" },
    phone: 5491165863894,
    email: "juanelozano@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 99091,
    name: "Mariano Alfredo",
    surname: "MONTES",
    level: 1,
    address: { street: "Soler 4136", local: "CABA" },
    phone: 5491149271995,
    email: "marianomontes83@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 95393,
    name: "Yamil Dario",
    surname: "RUDKO",
    level: 3,
    rol: "Maestro De Ceremonias",
    address: { street: "PARANA 261", local: "CABA" },
    phone: 5491135010466,
    email: "hola@yamilsantoro.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 101430,
    name: "Felipe",
    surname: "GIMENEZ LOSANO",
    level: 2,
    address: { street: "Av. Alvear 1502 piso 4", local: "CABA" },
    phone: 5491131500737,
    email: "fgimenezlosano@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 101080,
    name: "Miguel",
    surname: "GOMEZ GOLDIN",
    level: 2,
    address: { street: "Virrey Loreto 2443", local: "CABA" },
    phone: 5492944735135,
    email: "mgomezgoldin@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 90712,
    name: "Juan Bautista",
    surname: "TORRES LOPEZ",
    level: 3,
    rol: "2do Vigilante",
    address: { street: "Tacuari 119", local: "CABA" },
    phone: 5491164484172,
    email: "jbtorreslopez@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 101976,
    name: "Eduardo",
    surname: "DEL PIANO",
    level: 2,
    address: { street: "Pacheco de Melo 1943", local: "CABA" },
    phone: 5491144053201,
    email: "cocodp98@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 102587,
    name: "Paulo Daniel",
    surname: "DEL VALLE",
    level: 1,
    address: { street: "Nogoyá 670", local: "Olivos" },
    phone: 5491136907940,
    email: "pauloddelvalle@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 96369,
    name: "Pablo Ariel",
    surname: "DI PERNA",
    level: 2,
    address: {
      street: "Teniente Cnel De Roa 1871",
      local: "Playa Union Rawson",
    },
    phone: 5492804412622,
    email: "pabloarieldasneves@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 102666,
    name: "Augusto",
    surname: "ARDILES DIAZ",
    level: 2,
    address: { street: "Avendida Santa Fe 2630", local: "CABA" },
    phone: 5492215942900,
    email: "augustoardillesdiaz@gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 101975,
    name: "Martin Juan",
    surname: "BUSACCA VIGO",
    level: 2,
    address: { street: "Bacacay 4763", local: "CABA" },
    phone: 5491137992121,
    email: "busaccavigo @gmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 100827,
    name: "Juan Ignacio",
    surname: "CARRANZA FERREYRA",
    level: 1,
    address: { street: "Honduras 3724", local: "CABA" },
    phone: 5491164013231,
    email: "jicarranza@hotmail.com",
  },
  {
    id: 11111,
    birthdate: new Date("01-01-01"),
    matricula: 98322,
    name: "Carlos Javier",
    surname: "CORREA CANO",
    level: 2,
    address: { street: "Washington 2313", local: "CABA" },
    phone: 5491166437915,
    email: "javiercorreacano@hotmail.com",
  },
];
