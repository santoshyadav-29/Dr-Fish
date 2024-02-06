type chemicals = {
  title: string;
  color: string;
  key: string;
  data: Array<{ name: string; value: number }>;
};

const phValue: chemicals = {
  title: "PH Value",
  color: "red",
  key: "value",
  data: [
    {
      name: "Sunday",
      value: 7.1,
    },
    {
      name: "Monday",

      value: 8,
    },
    {
      name: "Tuesday",

      value: 5.5,
    },
    {
      name: "Wenesday",
      value: 9.5,
    },
    {
      name: "Thursday",
      value: 7.2,
    },
    {
      name: "Friday",
      value: 6.7,
    },
    {
      name: "Saturday",
      value: 7.4,
    },
  ],
};

const nitrogen: chemicals = {
  title: "Nitrogen",
  color: "blue",
  key: "n",
  data: [
    {
      name: "Sunday",
      value: 7.1,
    },
    {
      name: "Monday",

      value: 8,
    },
    {
      name: "Tuesday",

      value: 5.5,
    },
    {
      name: "Wenesday",
      value: 9.5,
    },
    {
      name: "Thursday",
      value: 7.2,
    },
    {
      name: "Friday",
      value: 6.7,
    },
    {
      name: "Saturday",
      value: 7.4,
    },
  ],
};

const oxygen: chemicals = {
  title: "Oxygen",
  color: "green",
  key: "o",
  data: [
    {
      name: "Sunday",
      value: 7.1,
    },
    {
      name: "Monday",

      value: 8,
    },
    {
      name: "Tuesday",

      value: 5.5,
    },
    {
      name: "Wenesday",
      value: 9.5,
    },
    {
      name: "Thursday",
      value: 7.2,
    },
    {
      name: "Friday",
      value: 6.7,
    },
    {
      name: "Saturday",
      value: 7.4,
    },
  ],
};

const potassium: chemicals = {
  title: "Potassium",
  color: "yellow",
  key: "p",
  data: [
    {
      name: "Sunday",
      value: 33,
    },
    {
      name: "Monday",

      value: 39,
    },
    {
      name: "Tuesday",

      value: 25,
    },
    {
      name: "Wenesday",
      value: 42,
    },
    {
      name: "Thursday",
      value: 25,
    },
    {
      name: "Friday",
      value: 35,
    },
    {
      name: "Saturday",
      value: 40,
    },
  ],
};




//   phValue:
//     phValue.data.reduce((acc, curr) => acc + curr.value, 0) /
//     phValue.data.length,
//   nitrogen:
//     nitrogen.data.reduce((acc, curr) => acc + curr.value, 0) /
//     nitrogen.data.length,
//   oxygen:
//     oxygen.data.reduce((acc, curr) => acc + curr.value, 0) / oxygen.data.length,
//   potassium:
//     potassium.data.reduce((acc, curr) => acc + curr.value, 0) /
  //     potassium.data.length,
  



  

  
  

export { phValue, nitrogen, oxygen, potassium, avegereadings };
