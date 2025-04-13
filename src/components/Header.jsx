function Header({title,description}) {
    return (
      <div className="ml-4 mt-4 mb-4">
        <h2 className="font-weight: 700;">{title}</h2>
        <p>{description}</p>
      </div>
    );
}

export default Header;