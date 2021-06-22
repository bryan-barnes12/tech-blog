const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const deleteButtonHandler = async (id) => {
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const editButtonHandler = async (id) => {
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

if (document.querySelector('.new-project-form')) {
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
}

// if (document.querySelector('#delete')) {
//   document.querySelector('#delete').addEventListener('click', delButtonHandler);
// }

if (document.querySelector('.postdiv')) {
  document
    .querySelector('.postdiv')
    .addEventListener('click', function (event) {
      const btnId = event.target.id;
      const btn = document.getElementById(btnId);
      const postId = btn.getAttribute('data-id');
      if (btn.getAttribute('data-operation') === 'delete') {
        deleteButtonHandler(postId);
        document.location.replace(`/dashboard`);
      }
      if (btn.getAttribute('data-operation') === 'edit') {
        document.location.replace(`/editpost/${postId}`);
      }
      console.log(id);
    });
}

if (document.querySelector('#editpost')) {
  document
    .querySelector('#editpost')
    .addEventListener('click', function (event) {
      event.preventDefault();
      const btnId = event.target.id;
      const btn = document.getElementById(btnId);
      const postId = btn.getAttribute('data-id');
      editButtonHandler(postId);
    });
}
