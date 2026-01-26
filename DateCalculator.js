function calculateYears(startDate) {
    const today = new Date();
    const start = new Date(startDate);
    let years = today.getFullYear() - start.getFullYear();
    const monthDifference = today.getMonth() - start.getMonth();

    // Adjust years if the start date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < start.getDate())) {
        years--;
    }
    
    return years;
}

// Set birthdate to March 31, 2004
const birthDate = '2004-03-31';
const ageElement = document.getElementById('age');
if (ageElement) {
    ageElement.textContent = calculateYears(birthDate);
}

// Set experience start date to Otktober 10 2019
const experienceStartDate = '2019-10-13';
const experienceYears = calculateYears(experienceStartDate);
const experienceElement = document.getElementById('experience');
if (experienceElement) {
    experienceElement.textContent = experienceYears;
}
const heroExperienceElement = document.getElementById('hero-experience');
if (heroExperienceElement) {
    heroExperienceElement.textContent = experienceYears;
}

// start of HKU September 9 2024
const hkuStartDate = '2024-09-02';
const hkuElement = document.getElementById('hku');
if (hkuElement) {
    hkuElement.textContent = calculateYears(hkuStartDate) + 1;
}