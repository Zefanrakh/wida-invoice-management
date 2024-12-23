function section3(l, t) {
  if (t > 45) {
    // The maximum sum of numbers from 1 to 9.
    return [];
  }
  // If there are a 'curtain number of types of numbers', then the variable t, minus the 'sum of the count of these types of numbers' - '1', must be greater than the largest number among that number types."
  let minimumSummation = 0;
  for (let i = 1; i < l; i++) {
    minimumSummation += i;
  }
  const largestNumberInList = t - minimumSummation;
  if (largestNumberInList < l) {
    return [];
  }

  let outputGroups = [];

  function addToGroup(currentNumber, currentGroup) {
    const sum = currentGroup.reduce((total, num) => total + num, 0);

    if (currentGroup.length > l || sum > t) {
      return;
    } else if (currentGroup.length === l && sum === t) {
      outputGroups.push([...currentGroup]);
      return;
    }

    // The variable largestNumberInList prevents unnecessary iterations or recursions, where if numbers above largestNumberInList are included, it would be impossible to produce a valid combination.
    for (let i = currentNumber; i <= largestNumberInList; i++) {
      currentGroup.push(i);
      addToGroup(i + 1, currentGroup);
      currentGroup.pop();
    }
  }

  addToGroup(1, []);

  return outputGroups;
}

console.log(section3(3, 8));
