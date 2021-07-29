import { makeStyles } from '@material-ui/core/styles';

export const HeadingTheme = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        borderRadius: 40,
        padding: 30,
        lineHeight: 1.5,
        boxShadow: `0px 2px 8px rgba(0,0,0,0.05)`,
        transition: 'transform 280ms ease-in-out, box-shadow 200ms ease-in-out',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0px 4px 16px rgba(0,0,0,0.1)'
        },
    },
    keys: {
        marginTop: 20,
        display: 'flex'
    },
    keyIcon: {
        marginLeft: 20,
        fontSize: 34,
        transform: 'rotate(-90deg)',
        color: 'rgb(37, 150, 190)',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '7px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 400
    },
    pos: {
        marginBottom: 12,
    }
}));