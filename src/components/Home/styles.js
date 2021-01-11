// import { makeStyles } from '@material-ui/core/styles';

// .background {
//     background-color: white;
//   }
  
//   .imgRes {
//     width: 100%;
//   }
  
//   .ready {
//     transition: transform .2s;
//     text-align: center;
//     text-decoration: none;
//   }
  
//   .ready:link {
//     text-decoration: none;
//   }
  
//   .ready:visited {
//     text-decoration: none;
//   }
  
//   .ready:hover {
//     transform: scale(1.1);
//     text-decoration: none;
//     color: #707070;
//   }
  
//   .here {
//     text-decoration: none;
//   }
  
//   .here:link {
//     text-decoration: none;
//   }
  
//   .here:visited {
//     text-decoration: none;
//   }
  
//   .here:hover {
//     color: rgb(184, 212, 207);
//     text-decoration: none;
//   }

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

