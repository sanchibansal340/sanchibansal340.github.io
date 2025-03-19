import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const NavButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active',
})(({ active, theme }) => ({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'none',
    position: 'relative',
    '&::after': active
        ? {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: -4,
              height: '8px',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q10 10, 20 5 T40 5 T60 5 T80 5 T100 5' stroke='%23F29251' stroke-width='3' fill='transparent'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom',
          }
        : {},
    transition: 'color 0.4s ease',
    '&:hover': {
        backgroundColor: 'inherit',
        color: theme.palette.secondary.main,
    },
}))

export default NavButton
