import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map((link, index) => <a key={index} href={'#' + link}>{link}</a>)

  return <nav>{linkList}</nav>;
}

export default NavBar;
