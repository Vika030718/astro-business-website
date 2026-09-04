function initContactModal() {
  const modal = document.querySelector("[data-contact-modal]");
  const openButtons = document.querySelectorAll("[data-contact-open]");
  const closeButtons = document.querySelectorAll("[data-contact-close]");

  if (!modal) return;

  const openModal = () => {
    modal.classList.add("contact-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const firstInput = modal.querySelector("input, select, textarea, button");
    firstInput?.focus();
  };

  const closeModal = () => {
    modal.classList.remove("contact-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => {
    if (button.dataset.contactBound === "true") return;

    button.dataset.contactBound = "true";

    button.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach((button) => {
    if (button.dataset.contactCloseBound === "true") return;

    button.dataset.contactCloseBound = "true";
    button.addEventListener("click", closeModal);
  });

  if (document.body.dataset.contactEscBound !== "true") {
    document.body.dataset.contactEscBound = "true";

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }
}

function initContactForms() {
  const forms = document.querySelectorAll("[data-contact-form]");

  const encodeFormData = (data) => {
    return new URLSearchParams(data).toString();
  };

  forms.forEach((form) => {
    if (form.dataset.contactFormBound === "true") return;

    form.dataset.contactFormBound = "true";

    const statusMessage = form.querySelector("[data-contact-status]");
    const submitButton = form.querySelector("[data-contact-submit]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!statusMessage || !submitButton) return;

      const formData = new FormData(form);

      statusMessage.textContent = "";
      statusMessage.classList.remove(
        "contact-form__status--success",
        "contact-form__status--error",
      );

      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encodeFormData(formData),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        form.reset();

        statusMessage.textContent =
          "Thank you. Your message has been received and our team will follow up.";
        statusMessage.classList.add("contact-form__status--success");
      } catch (error) {
        statusMessage.textContent =
          "Something went wrong. Please try again or call 111-111-1111.";
        statusMessage.classList.add("contact-form__status--error");
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  });
}

function initContactTools() {
  initContactModal();
  initContactForms();
}

document.addEventListener("DOMContentLoaded", initContactTools);
document.addEventListener("astro:page-load", initContactTools);
