import React, { ReactElement } from 'react';

interface HeaderProps {
    component: React.ComponentType<any>; // Adjust the type to accept any React component
}

const Header = (props: HeaderProps): ReactElement => {
    const { component: Component } = props; // Rename 'component' to 'Component' to follow convention
  
    return (
        <div>
            <Component /> {/* Use the Component as a JSX element */}
        </div>
    );
};

export default Header;
