// THE SHIPPING OUTLET — shared behaviors

// mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav.main');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });
}

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// contact form -> opens the visitor's email app with the message pre-filled
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = form.querySelector('[name=name]').value.trim();
    const email = form.querySelector('[name=email]').value.trim();
    const msg = form.querySelector('[name=message]').value.trim();
    const subject = encodeURIComponent(`Website inquiry from ${name || 'a customer'}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}${email ? ` (${email})` : ''}`);
    window.location.href = `mailto:bill@ocshippingoutlet.com?subject=${subject}&body=${body}`;
  });
}
