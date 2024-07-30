const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', senEmail )

const serviceId = 'service_t0napqp'
const templateId = 'template_3gdeljt'
const apikey = 'Q4LBARxx71GpZR0B5'

function senEmail(event){
      event.preventDefault()
      emailjs.init(serviceId)

      emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
      .then( resut => Swal.fire('Su mensaje se ha enviado con éxito.') )
     .catch( Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      }) )
      
      }