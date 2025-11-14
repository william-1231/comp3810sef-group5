document.querySelector('form')?.addEventListener('input', async function () {
  const formData = new FormData(this);
  const params = new URLSearchParams(formData);
  const res = await fetch('/tasks?' + params);
  const html = await res.text();
  document.body.innerHTML = new DOMParser().parseFromString(html, 'text/html').body.innerHTML;
});