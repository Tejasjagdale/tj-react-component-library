import { HeaderProps } from 'components/Types/Header';
import React, { ReactElement } from 'react';

const Header = (props: HeaderProps): ReactElement => {
    const { component: Component } = props; // Rename 'component' to 'Component' to follow convention

    return (
        <div>
            <Component /> {/* Use the Component as a JSX element */}
        </div>
    );
};

export default Header;
