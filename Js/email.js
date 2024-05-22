(function() {
emailjs.init("user_nq4WrbYgadMHpOydG4pts");
})();
</script>
<script>
   const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_q36arc8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      swal({
  title: "Check Your Email!",
  text: "Email sent successfully",
  icon: "success",
  
});
    });
});