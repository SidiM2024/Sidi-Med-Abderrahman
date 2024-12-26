function sendToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `مرحبًا،\n\nاسمي: ${name}\nرقم الهاتف: ${phone}\nعنوان المشروع: ${subject}\nتفاصيل المشروع:\n${message}`;
    const whatsappNumber = "30647036";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
}
