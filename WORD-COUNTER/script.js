import inquirer from "inquirer";

async function countWords() {
  const answers = await inquirer.prompt([
    {
      name: "Sentence",
      type: "input",
      message: "Enter your sentence to count the word: ",
    },
  ]);

  // Check if input is received properly
  console.log(`You entered: "${answers.Sentence}"`);

  // Split the sentence into words and trim extra spaces
  const words = answers.Sentence.trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Log the words array (optional) and the word count
  console.log(`Words in your sentence:`, words);
  console.log(`Your sentence word count is ${words.length}`);
}

// Call the function
countWords();
