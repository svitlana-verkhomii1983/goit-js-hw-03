function slugify(title) {
    
    let lowerCaseTitle = title.toLowerCase(); // Перетворюємо всі символи рядка в нижній регістр
  
    let slug = lowerCaseTitle.replace(/ /g, '-');   // Заміщуємо пробіли на тире
    
    return slug;
}

// Перевірка функції
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"