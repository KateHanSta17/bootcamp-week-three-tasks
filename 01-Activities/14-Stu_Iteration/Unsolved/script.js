  const studentNames = ['Andre', 'Karl', 'Rashida', 'Olivia', 'Carter'];
  console.log('Array Length= ', studentNames.length);
  console.log('for loop:');
  for (let i = 0; i < studentNames.length; i++) {
    console.log(`Great to see you, ${studentNames[i]}!`);
  }
  console.log('for of loop:');
  for (const student of studentNames) {
    console.log(`Great to see you, ${student}!`);
  }