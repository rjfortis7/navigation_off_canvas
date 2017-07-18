export default function contactForm() {
  const d = document,
    form = d.forms[0]

  form.addEventListener('submit', e => {
    e.preventDefault()

    alert('El formulario se procesa')
  })
}
