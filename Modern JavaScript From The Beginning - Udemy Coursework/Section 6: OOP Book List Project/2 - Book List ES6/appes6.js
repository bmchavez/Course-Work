class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add Class
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const UIcontainer = document.querySelector('.container');
    const UIform = document.querySelector('#book-form');

    // Insert alert
    UIcontainer.insertBefore(div, UIform);

    // Timeout after 3 second
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
  function(e){
    // Get form values
    const UItitle = document.getElementById('title').value,
          UIauthor = document.getElementById('author').value,
          UIisbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(UItitle, UIauthor, UIisbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(UItitle === '' || UIauthor === '' || UIisbn === ''){
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      // Add book to list
      ui.addBookToList(book);
      ui.showAlert('Book added to list!', 'success');
      // Clear fields
      ui.clearFields();
    }

    e.preventDefault();
  });

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success')

  e.preventDefault();
})