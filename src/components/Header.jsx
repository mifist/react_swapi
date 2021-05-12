import {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
// icons
import {Planet} from '@styled-icons/boxicons-regular/Planet';
import {Starship} from '@styled-icons/simple-icons/Starship';
import {RecentActors} from '@styled-icons/material/RecentActors';
import {Film} from '@styled-icons/icomoon/Film';

const Header = (props) => {
  const {color, title, logo, bgImage, changeColorOnScroll} = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    // toggled
    if (mobileOpen) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove('nav-open');
      document
        .getElementsByClassName('navbar-toggler')[0]
        .classList.remove('toggled');
    } else {
      document.body.getElementsByTagName('header')[0].classList.add('nav-open');
      document
        .getElementsByClassName('navbar-toggler')[0]
        .classList.add('toggled');
    }
  };

  const headerColorChange = useCallback(() => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(color);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(changeColorOnScroll.color);

      document
        .getElementsByClassName('sw-app-navbar')[0]
        .classList.remove('navbar-' + color);
      document
        .getElementsByClassName('sw-app-navbar')[0]
        .classList.add('navbar-' + changeColorOnScroll.color);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(color);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(changeColorOnScroll.color);

      document
        .getElementsByClassName('sw-app-navbar')[0]
        .classList.add('navbar-' + color);
      document
        .getElementsByClassName('sw-app-navbar')[0]
        .classList.remove('navbar-' + changeColorOnScroll.color);
    }
  }, [changeColorOnScroll.color, changeColorOnScroll.height, color]);

  useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  }, [changeColorOnScroll, headerColorChange]);

  const BrandComponent = ({title, logo}) => (
    <NavLink exact to="/" className='navbar-brand'>
      {logo ? (
        <img className='logotype' src={logo} alt={title} title={title} />
      ) : (
        <span href='/' className='logobrang'>
          {title}
        </span>
      )}
    </NavLink>
  );

  return (
    <header id='sw-app-header' className={`header ${color}`}>
      <nav
        id='sectionsNav'
        color-on-scroll='100'
        className={`sw-app-navbar navbar navbar-${color} navbar-color-on-scroll fixed-top navbar-expand-lg`}
      >
        <div className='container'>
          <div className='navbar-translate'>
            <BrandComponent title={title} logo={logo} />
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={handleDrawerToggle}
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='navbar-toggler-icon'></span>
              <span className='navbar-toggler-icon'></span>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div
            className='collapse navbar-collapse'
            style={{transform: mobileOpen ? 'translateZ(0)' : ''}}
          >
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <NavLink exact to="/episodes" className='nav-link'>
                  <Film />
                  Episodes
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact to="/characters" className='nav-link'>
                  <RecentActors />
                  Characters
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact to="/planets" className='nav-link'>
                  <Planet />
                  Planets
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink exact to="/starships" className='nav-link'>
                  <Starship />
                  Starships
                </NavLink>
              </li>
                {/* <li className='dropdown nav-item'>
                <span
                  href={'#'}
                  data-toggle='dropdown'
                  className='dropdown-toggle nav-link'
                >
                  <i className='material-icons'>apps</i> Components
                </span>
                <div className='dropdown-menu dropdown-with-icons'>
                  <span href={'#'} className='dropdown-item'>
                    <i className='material-icons'>layers</i> All Components
                  </span>
                  <span href={'#'} className='dropdown-item'>
                    <i className='material-icons'>content_paste</i>
                    Documentation
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div
        className='page-header'
        data-parallax='true'
        style={bgImage && {backgroundImage: `url(${bgImage})`}}
      ></div>
    </header>
  );
};

Header.defaultProps = {
  color: 'transparent',
  changeColorOnScroll: {
    height: 90,
    color: 'dark',
  },
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  bgImage: PropTypes.string,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number,
    color: PropTypes.oneOf(['transparent', 'white', 'dark']),
  }),
  color: PropTypes.oneOf(['transparent', 'white', 'dark']),
};

export default Header;
