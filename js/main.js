document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  let lastScrollPos = window.scrollY;

  function handleScroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > lastScrollPos) {
      // Scrolling down, hide the header
      header.classList.add("hidden");
    } else {
      // Scrolling up, show the header
      header.classList.remove("hidden");
    }

    lastScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", handleScroll);
});


const inputs = document.querySelectorAll('.contact-input');

  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });



  // Replace YOUR_DISCORD_WEBHOOK_URL with your actual Discord webhook URL
const discordWebhookUrl = 'https://discord.com/api/webhooks/1132443910170497164/nl4OKZ2tXVgjydb_jXdlvRHPgT7Plmz434E9znhv-LKpVUDq6cXO8xNrBrpTEya39uoe';

// Function to send form data to Discord
function sendFormDataToDiscord(data) {
  fetch(discordWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `New form submission:
Name: ${data['First Name']} ${data['Last Name']}
Email: ${data['email']}
Message: ${data['message']}
      `,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Form submitted successfully!');
      // You can add more actions here after the form is successfully submitted.
    })
    .catch((error) => {
      console.error('Error sending form data to Discord:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting traditionally

      const formData = new FormData(contactForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      sendFormDataToDiscord(formDataObject);
    });
  }
});
