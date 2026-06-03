const words = ['Software Tester', 'Web Developer', 'Tech Enthusiast'];
let i = 0;

setInterval(() => {
    document.getElementById('typing').innerText = words[i % words.length];
    i++;
}, 1500);


// FORM ELEMENTS
const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");


// TOAST FUNCTION
function showToast(message, type="success"){
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = "toast show " + type;

    setTimeout(() => {
        toast.className = "toast";
    }, 3000);
}


// FORM SUBMIT
form.addEventListener("submit", function(e){
    e.preventDefault();

    // loading state
    sendBtn.classList.add("loading");
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    emailjs.sendForm("service_wp1rgb9", "template_2or25on", this)
    .then(() => {
        return emailjs.sendForm("service_wp1rgb9", "template_ycku1di", this);
    })
    .then(() => {
    showToast("Message sent successfully!", "success");

    document.getElementById("success-sound").play();

    form.reset();
})
.catch((error) => {
    showToast("Failed to send message!", "error");

    console.log(error);
})
    .finally(() => {
        sendBtn.classList.remove("loading");
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message";
    });
});