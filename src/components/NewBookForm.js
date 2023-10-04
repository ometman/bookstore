export default function NewBookForm() {
  return (
    <div className="form-container">
      <h2 className="newbookform-title">Add New Book</h2>
      <form action="" method="" id="newbookform" className="newbookform">
        <input id="booktitle" className="booktitle" type="text" placeholder="Book title" />
        <input id="bookauthor" className="bookauthor" type="text" placeholder="Author" />
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
}
