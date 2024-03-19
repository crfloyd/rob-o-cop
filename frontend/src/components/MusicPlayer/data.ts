import { v4 as uuidv4 } from "uuid";

export type SongData = {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: string | string[];
  id: string;
};

export function getSongList(): SongData[] {
  return [
    {
      name: "MX 7000",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/5960/3000x3000.jpg?height=1050&width=1050",
      artist: "Lupus Nocte",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/MX%207000/ES_MX%207000.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
    {
      name: "Motional Overload",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/9395/3000x3000.jpg?height=1050&width=1050",
      artist: "Daniel Fridell",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/dDjuHs_Motional%20Overload/ES_Motional%20Overload.mp3",
      color: "gradient-1",
      id: uuidv4(),
    },
    {
      name: "Deep Space Samurai",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/8411/3000x3000.jpg?height=1050&width=1050",
      artist: "Forever Sunset",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/UOEQnq_Deep%20Space%20Samurai/ES_Deep%20Space%20Samurai.mp3",
      color: "gradient-2",
      id: uuidv4(),
    },
    {
      name: "Code Red",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/11724/3000x3000.jpg?height=1050&width=1050",
      artist: "Rijko",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Code%20Red/ES_Code%20Red.mp3",
      color: "gradient-3",
      id: uuidv4(),
    },
    {
      name: "Adolescent Orange",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/3333/3000x3000.jpg?height=1050&width=1050",
      artist: "Falcon Dives",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Adolescent%20Orange/ES_Adolescent%20Orange.mp3",
      color: ["#4BAA8C", "#0E1D13"],
      id: uuidv4(),
    },
    {
      name: "Entre T\u00fa y Yo (Instrumental Version)",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/11731/3000x3000.jpg?height=1050&width=1050",
      artist: "Nico Rengifo",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/LXmY9l_Entre%20T%C3%BA%20y%20Yo%20(Instrumental%20Version)/ES_Entre%20T%C3%BA%20y%20Yo%20(Instrumental%20Version).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Locked In",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/11668/3000x3000.jpg?height=1050&width=1050",
      artist: "Aiyo",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/ABzEBg_Locked%20In/ES_Locked%20In.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "Backseat Rider",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/6740/3000x3000.jpg?height=1050&width=1050",
      artist: "Lupus Nocte",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Backseat%20Rider/ES_Backseat%20Rider.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "Fallin for U",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/5832/3000x3000.jpg?height=1050&width=1050",
      artist: "STRLGHT",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Fallin%20for%20U/ES_Fallin%20for%20U.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
    },
    {
      name: "On The Knife",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/583/3000x3000.jpg?height=1050&width=1050",
      artist: "Future Joust",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/nXAlmA_On%20The%20Knife/ES_On%20The%20Knife.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
    {
      name: "Breathe Again",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/3302/3000x3000.jpg?height=1050&width=1050",
      artist: "Crystal Shards",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Breathe%20Again/ES_Breathe%20Again.mp3",
      color: ["#4BAA8C", "#0E1D13"],
      id: uuidv4(),
    },
    {
      name: "Family Fun Fitness",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/5960/3000x3000.jpg?height=1050&width=1050",
      artist: "Lupus Nocte",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Family%20Fun%20Fitness/ES_Family%20Fun%20Fitness.mp3",
      color: ["#F4B29A", "#994244"],
      id: uuidv4(),
    },
    {
      name: "Fridays",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/5900/3000x3000.jpg?height=1050&width=1050",
      artist: "Lupus Nocte",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Fridays/ES_Fridays.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
    {
      name: "Night Driver",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/6629/3000x3000.jpg?height=1050&width=1050",
      artist: "Seamus McNamara",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Night%20Driver/ES_Night%20Driver.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
    },
    {
      name: "MEGA WOMAN IV",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/3591/3000x3000.jpg?height=1050&width=1050",
      artist: "Daniel Gunnarsson",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/MEGA%20WOMAN%20IV/ES_MEGA%20WOMAN%20IV.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
    {
      name: "Survive",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/2407/3000x3000.jpg?height=1050&width=1050",
      artist: "Soara",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/Survive/ES_Survive.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
    },
    {
      name: "Follow The Trail",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/583/3000x3000.jpg?height=1050&width=1050",
      artist: "Future Joust",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/14EgPD_Follow%20The%20Trail/ES_Follow%20The%20Trail.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
    {
      name: "City Lights, City Dreams",
      cover:
        "https://cdn.epidemicsound.com/curation-assets/commercial-release-cover-images/2324/3000x3000.jpg?height=1050&width=1050",
      artist: "Forever Sunset",
      audio:
        "https://audiocdn.epidemicsound.com/ES_ITUNES/City%20Lights,%20City%20Dreams/ES_City%20Lights,%20City%20Dreams.mp3",
      color: ["#EF8EA9", "#72629E"],
      id: uuidv4(),
    },
  ];
}
