export const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">Toko Buku Asadel</div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                New Arrival
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/search">
                Search
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
