import { NavLink, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    return (
        <NavLink
            to={to}
            style={{
                color: match ? 'rgb(99, 52, 186)' : 'rgb(179, 161, 222)',
            }}
            {...props}
        >
            {children}
        </NavLink>
    )
}
export {CustomLink};
