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
function sendFormDataToDiscord(data, file) {
  const formData = new FormData();
  formData.append('content', `New form submission:
Name: ${data['First Name']} ${data['Last Name']}
Email: ${data['email']}
Message: ${data['message']}`);

  if (file) {
      formData.append('file', file);
  }

  fetch(discordWebhookUrl, {
      method: 'POST',
      body: formData,
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

function resetFormFields() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.reset();
  }
}

function removeNotEmptyClass() {
  const conInpWraps = document.querySelectorAll('.conInp-wrap');
  conInpWraps.forEach((conInpWrap) => {
      conInpWrap.classList.remove('not-empty');
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

          const fileInput = document.querySelector('input[name="attachment"]');
          const file = fileInput ? fileInput.files[0] : null;

          sendFormDataToDiscord(formDataObject, file);

          removeNotEmptyClass();
          // Reset form fields
          resetFormFields();
      });
  }
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



