import React from 'react';
import { createUseStyles } from 'react-jss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const arrayItem = [
  {
    titulo: 'Home',
    path: '/',
    icon: ''
  },
  {
    titulo: 'Testing',
    icon: '',
    subItem: [
      {
        subTitulo: 'Test',
        path: '/test'
      }
    ]
  },
  {
    titulo: 'titulo 3',
    path: '/titulo3',
    icon: '',
    subItem: [
      {
        subTitulo: 'subtitulo 3',
        path: '/subtitulo3'
      }
    ]
  }
];

const useStyles = createUseStyles({
  root: {
    display: 'inline-flex'
  },
  sidebar: {
    padding: 15,
    background: '#f8f8f8',
    width: 330,
    height: '100vh',
    '& p': {
      color: 'red'
    }
  }
});

const Layout = props => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <aside className={classNames('menu', classes.sidebar)}>
        <p className="menu-label">General</p>
        <ul className="menu-list">
          {arrayItem.map((item, idx) => (
            <li key={idx}>
              {item.subItem ? (
                <a>{item.titulo}</a>
              ) : (
                <Link href={item.path}>
                  <a
                    className={classNames({
                      'is-active': item.path === router.route
                    })}
                  >
                    {item.titulo}
                  </a>
                </Link>
              )}

              {item.subItem && (
                <ul>
                  {item.subItem.map((subItem, i) => (
                    <Link key={i} href={subItem.path}>
                      <a
                        className={classNames({
                          'is-active': subItem.path === router.route
                        })}
                      >
                        {subItem.subTitulo}
                      </a>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      {props.children}
    </div>
  );
};
export default Layout;
