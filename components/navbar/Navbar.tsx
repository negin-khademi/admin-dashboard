import CartButton from './CartButton';
import Container from '../global/Container';
import DarkMode from './DarkMode';
import LinkDropdown from './LinkDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex gap-4 flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinkDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
