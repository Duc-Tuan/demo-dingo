import Link from "next/link";

const menu = [
  {
    id: 1,
    name: "Blog",
    path: "/Blog",
  },
  {
    id: 2,
    name: "Single blog",
    path: "/Blog/SingleBlog",
  },
  {
    id: 3,
    name: "Elements",
    path: "/Blog/Elements",
  },
];

function Menu({ children, path, classnames, dropdown }) {
  const handleClick = (e) => {
    dropdown && e.preventDefault();
  };

  return (
    <Link href={path}>
      <li className={`nav-item ${dropdown ? "dropdown" : ""}`}>
        {dropdown ? (
          <>
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={handleClick}
            >
              Blog
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {menu.map((data) => {
                return (
                  <Link href={data.path} key={data.id}>
                    <a className="dropdown-item">{data.name}</a>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <a onClick={handleClick} className={classnames}>
            {children}
          </a>
        )}
      </li>
    </Link>
  );
}

export default Menu;
