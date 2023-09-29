function BookCard() {
  return (
    <div className="books">
      Books
      {/*  {contacts.length ? (
                 <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                        <NavLink
                            to={`contacts/${contact.id}`}
                            className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                        >
                            <Link to={`contacts/${contact.id}`}>
                            {contact.first || contact.last ? (
                                <>
                                {contact.first} {contact.last}
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                            {contact.favorite && <span>★</span>}
                            </Link>
                        </NavLink>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>
                    <i>No contacts</i>
                    </p>
                )}
                </div>
                </div>

                <div id="form-container">
                    <form id="search-form" role="search">
                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>
                    </form>
                    <Form method="post">
                    <button type="submit">New</button>
                    </Form>
                    </div> */}
    </div>
  );
}

export default BookCard;
