const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const topicSelect = document.getElementById("topic");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formStatus = document.getElementById("form-status");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearValidation() {
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  messageInput.classList.remove("input-error");

  formStatus.className = "form-status hidden";
  formStatus.textContent = "";
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearValidation();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  let isValid = true;

  if (nameValue === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("input-error");
    isValid = false;
  }

  if (emailValue === "") {
    emailError.textContent = "Please enter your email address.";
    emailInput.classList.add("input-error");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (messageValue.length < 10) {
    messageError.textContent = "Please write a message of at least 10 characters.";
    messageInput.classList.add("input-error");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const selectedTopicText = topicSelect.options[topicSelect.selectedIndex].text;

  formStatus.textContent = `Thanks, ${nameValue}! Your message about "${selectedTopicText}" has been received.`;
  formStatus.className = "form-status success";

  contactForm.reset();
});