function showSection(section) {
    // Hide all sections
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('contact').classList.add('hidden');
 
    // Show the selected section
    if (section === 'home') {
        document.getElementById('home').classList.remove('hidden');
    } else if (section === 'about') {
        document.getElementById('about').classList.remove('hidden');
    } else if (section === 'contact') {
        document.getElementById('contact').classList.remove('hidden');
    }
}
 
// Show the home section by default when the page loads
showSection('home');