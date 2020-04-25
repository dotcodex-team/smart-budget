import React from 'react';
import { useRouter } from 'next/router';
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({});

export default function Home() {
  // const classes = useStyles();
  const routes = useRouter();

  return (
    <div>
      <button type="button" className="button is-primary">
        {routes.query.id}
      </button>
    </div>
  );
}
