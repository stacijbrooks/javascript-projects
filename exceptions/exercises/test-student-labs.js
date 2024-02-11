// function gradeLabs(labs) {
//   for (let i=0; i < labs.length; i++);
//     let lab = labs[i];
//     {
//       try {
//         let result = lab.runLab(3);
//   } catch (error) {
//     console.log(`Error evaluating lab for ${lab.student}: ${error.message}`);
//     result = "Error thrown";
//   }
//     console.log(`${lab.student} code worked: ${result === 27}`);
//   };

// let studentLabs = [
//   {
//     student: 'Carly',
//     runLab: function (num) {
//         return Math.pow(num, num);
//     }
//   },
//   {
//     student: 'Erica',
//     runLab: function (num) {
//         return num * num;
//     }
//   }
// ];

// gradeLabs(studentLabs);
// };
// console.log(result);

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3);
    } catch (error) {
      console.log(`Error evaluating lab for ${lab.student}: ${error.message}`);
      result = "Error thrown";
    }
    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);
