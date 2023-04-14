function getMatchingStrings(courses, input) {
    if (input === ''){
      return []
    }
    const matchingStrings = courses.filter(course => course.name.toLowerCase().includes(input.toLowerCase()));
    return matchingStrings;
  }

  module.exports = {getMatchingStrings};