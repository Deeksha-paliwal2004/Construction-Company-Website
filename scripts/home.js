function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

 
 document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Stop the default form submission

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset(); // Clear the form
    } else {
      alert('Oops! Something went wrong.');
    }
  } catch (error) {
    alert('Something went wrong while sending the message.');
  }
});
 