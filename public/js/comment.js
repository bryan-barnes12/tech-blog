const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();

  if (comment) {
    const id = event.target.getAttribute('id');
    const testVar = JSON.stringify({ comment });
    const response = await fetch(`/api/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to create project');
    }
  }
};

if (document.querySelector('.new-project-form')) {
  document
    .querySelector('.new-project-form')
    .addEventListener('click', newFormHandler);
}
