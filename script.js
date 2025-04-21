const form = document.querySelector('.hero-buttons');
const emailInput = form.querySelector('input');
const getStartedButton = form.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = emailInput.value.trim();

    // Simple email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulated form submission
    alert(`✅ Thank you! Your email "${email}" has been submitted.`);
    
    // Clear input field
    emailInput.value = '';
});
