// const { format } = require("path");
// const { Project } = require("../../models");

document.addEventListener('DOMContentLoaded', () => {
  const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#project-name').value.trim();
    const address = document.querySelector('#project-address').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    const category = document.querySelector('#project-category').value;
    console.log('category', category);

    if (name && address && description && category) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, address, description, category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }

      const delButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');

          const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete project');
          }
        }
      };
    }
  };

  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
});
