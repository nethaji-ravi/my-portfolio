

// var data = [
//     {
//       AboutDevTypeText: "<span>I am a Software Developer with a Nine months of internship experience, possessing a strong foundation in Java, Spring Boot, Php ,SQL and JavaScript. I have actively contributed to live projects and successfully developed Five innovative tools. Committed to continuous learning, I am eager to contribute my skills to dynamic software development teams."
//     }
//   ];
  
//   var allElements = document.getElementsByClassName("typeing");
//   for (var j = 0; j < allElements.length; j++) {
//     var currentElementId = allElements[j].id;
//     var currentElementIdContent = data[0][currentElementId];
//     var element = document.getElementById(currentElementId);
//     var devTypeText = currentElementIdContent;
  
//     // type code
//     var i = 0, isTag, text;
//     (function type() {
//       text = devTypeText.slice(0, ++i);
//       if (text === devTypeText) return;
//       element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
//       var char = text.slice(-1);
//       if (char === "<") isTag = true;
//       if (char === ">") isTag = false;
//       if (isTag) return type();
//       setTimeout(type, 60);
//     })();
//   }
  
const element = document.querySelector('#terminal-animation');
const finalText = '$ I am a Software Developer with a Two Years of experience, possessing a strong foundation in Java, Spring Boot, Php, SQL, Html, CSS, JavaScript, React, Node And Express, . I have actively contributed to live projects and successfully developed Five innovative tools. Committed to continuous learning, I am eager to contribute my skills to dynamic software development teams.';

window.onload = () => terminalType(0, element, finalText);

function terminalType(count, element, finalText) {
  if (count < finalText.length) {
    element.textContent += finalText.charAt(count);
    count++;
    setTimeout(terminalType, 50, count, element, finalText);
  }
}

const currentYear = new Date().getFullYear();
  
// Set the text content dynamically
document.getElementById("copyright-text").textContent = `${currentYear} © All rights reserved.`;

// const degreeToRadian = (angle) => angle * (Math.PI / 180);

//     const radius = 140; // Increase radius to position text further from the image
//     const textContainer = document.querySelector("#text-container-profile");
//     const text = textContainer.dataset.text;
//     const characters = text.split("");
//     const icons = JSON.parse(textContainer.dataset.icons);

//     const deltaAngle = 360 / characters.length;
//     const characterOffsetAngle = 90; // Align text upright
//     let currentAngle = 0;

//     icons.forEach((icon) => {
//       const span = document.createElement("span");
      
//       // Insert the SVG or use an `<img>` tag for your icons
//       span.innerHTML = `
//         <img 
//           src="/images/spinner/${icon}.svg" 
//           alt="${icon}" 
//           style="width: 24px; height: 24px;"
//         />
//       `;
    
//       // Calculate position for each icon
//       const xPos = radius * Math.cos(degreeToRadian(currentAngle));
//       const yPos = radius * Math.sin(degreeToRadian(currentAngle));
    
//       // Position the icon
//       span.style.position = "absolute";
//       span.style.transform = `translate(${xPos}px, ${yPos}px)`;
//       span.style.transformOrigin = "center";
    
//       currentAngle += deltaAngle;
//       textContainer.appendChild(span);
//     });

const degreeToRadian = (angle) => angle * (Math.PI / 180);

// Adjust the radius to position icons further from the image
const radius = 140;
const textContainer = document.querySelector("#text-container-profile");

// List of icons (you can replace these with paths to your SVGs or images)
const icons = JSON.parse(textContainer.dataset.icons);

const deltaAngle = 360 / icons.length;
let currentAngle = 0;

icons.forEach((icon) => {
  const span = document.createElement("span");

  // Insert the SVG or use an `<img>` tag for your icons
  span.innerHTML = `
    <img 
      src="/images/spinner/${icon}.svg" 
      alt="${icon}" 
      style="width: 24px; height: 24px;"
    />
  `;

  // Calculate position for each icon
  const xPos = radius * Math.cos(degreeToRadian(currentAngle));
  const yPos = radius * Math.sin(degreeToRadian(currentAngle));

  // Position the icon
  span.style.position = "absolute";
  span.style.transform = `
    translate(${xPos}px, ${yPos}px) 
    rotate(${currentAngle + 90}deg) /* Rotate to face the center */
  `;
  span.style.transformOrigin = "center";

  currentAngle += deltaAngle;
  textContainer.appendChild(span);
});


// Include the EmailJS library
document.addEventListener("DOMContentLoaded", () => {
  // Replace with your EmailJS service ID, template ID, and public key
  const serviceID = "your_service_id";
  const templateID = "your_template_id";
  const publicKey = "your_public_key";

  // Initialize EmailJS
  emailjs.init(publicKey);

  // Add event listener to the form
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create the email data object
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email
    emailjs
      .send(serviceID, templateID, templateParams)
      .then(
        (response) => {
          alert("Message sent successfully!");
          contactForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  });
});

