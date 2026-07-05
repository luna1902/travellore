import swiss from "../assets/images/swiss.jpeg"
import maldives from "../assets/images/maldives.jpeg";
import santorini from "../assets/images/santorini.jpeg";
import kyoto from "../assets/images/kyoto.jpeg";
import cappadocia from "../assets/images/cappadocia.jpeg";

export interface Destination {

    id:number;

    title:string;

    country:string;

    image:string;

    rating:number;

    description:string;

}

export const destinations:Destination[]=[

{

id:1,

title:"Swiss Alps",

country:"Switzerland",

image:swiss,

rating:4.9,

description:
"Snow covered mountains, crystal lakes and breathtaking hiking trails."

},

{

id:2,

title:"Maldives",

country:"Indonesia",

image:maldives,

rating:4.8,

description:
"Luxury overwater villas surrounded by turquoise ocean."

},

{

id:3,

title:"Santorini",

country:"Greece",

image:santorini,

rating:4.9,

description:
"Whitewashed buildings, blue domes and unforgettable sunsets."

},

{

id:4,

title:"Kyoto",

country:"Japan",

image:kyoto,

rating:4.7,

description:
"Ancient temples, cherry blossoms and traditional Japanese culture."

},

{

id:5,

title:"Cappadocia",

country:"Turkey",

image:cappadocia,

rating:4.8,

description:
"Hot air balloons floating over magical rock formations."

}

];