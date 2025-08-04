    function sendEmail(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      // const message = document.getElementById("message").value;
      const phone = document.getElementById("phone").value;

      // Send email using EmailJS
      emailjs.send("service_u3c8aan", "template_iqtjjw5", {
        from_name: name,
        reply_to: email,
        message: phone,
        to_name: "Peak Academy"
      })
        .then(function (response) {
          alert("Email sent successfully!");
          document.getElementById("contact-form").reset(); // Reset form after successful send
        }, function (error) {
          console.error("Error: ", error);
          alert("Failed to send message. Please try again.");
           
        });
    }