function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }

  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }

  Book.prototype.getBookInfo = function () {
    return `
      <div class="book">
        <h2>${this.title}</h2>
        <p><strong>Author:</strong> ${this.author.name}</p>
        <p><strong>Genre:</strong> ${this.genre}</p>
        <p><strong>Price:</strong> $${this.price}</p>
      </div>
    `;
  };

  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "British");

  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 25.99);
  const book2 = new Book("1984", author2, "Dystopian Fiction", 19.99);

  const bookstoreElement = document.getElementById("bookstore");
  bookstoreElement.innerHTML = book1.getBookInfo() + book2.getBookInfo();