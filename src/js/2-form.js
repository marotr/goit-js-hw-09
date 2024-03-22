try {
    const form = document.querySelector('.feedback-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        if (email === "" || message === "") {
            alert("All fields must be filled in");
            return;
        }
        const formData = {
            email: email,
            message: message
        };

        localStorage.removeItem("feedback-form-state");

        form.reset();

        console.log(formData);
    });

    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedFormData) {
        form.elements.email.value = savedFormData.email || '';
        form.elements.message.value = savedFormData.message || '';
    }

    form.addEventListener('input', function () {
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        const formData = {
            email: email,
            message: message
        };

        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    });
} catch (error) {
    
}
