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

const stars = document.querySelectorAll('.star');
const feedback = document.querySelector('.rating-feedback');
const submitButton = document.getElementById('submit-rating');
let selectedRating = 0;

// تفعيل النجوم عند النقر
stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('active'));
    star.classList.add('active');
    selectedRating = star.getAttribute('data-value');
    feedback.textContent = `لقد اخترت ${selectedRating} من 5 نجوم!`;
  });

  // تغيير اللون عند التمرير
  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.style.color = '#ccc');
    star.style.color = '#ffd700';
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.style.color = s.classList.contains('active') ? '#ffd700' : '#ccc');
  });
});

// إرسال التقييم
submitButton.addEventListener('click', () => {
  if (selectedRating > 0) {
    const phoneNumber = '30647036'; // ضع رقم واتساب الخاص بك هنا
    const message = `مرحبا، تم تقييم خدماتك بـ ${selectedRating} من 5 نجوم.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    alert('سيتم إرسال التقييم الآن.');
    window.open(whatsappLink, '_blank');
  } else {
    alert('الرجاء اختيار عدد النجوم قبل الإرسال.');
  }
});
