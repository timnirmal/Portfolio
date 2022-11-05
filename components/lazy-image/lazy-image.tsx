import { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ placeholder, src, alt, rounded, className, ...rest }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = src;

        imageToLoad.onload = () => {
            setLoading(false);
        };
    }, [src]);

    return (
        <Fragment>
            {loading ? placeholder : <img src={src} alt={alt} {...rest} className={
                rounded ? `rounded-full ${className}` : className
            }/>}
        </Fragment>
    );
};

LazyImage.propTypes = {
    placeholder: PropTypes.node,
    alt: PropTypes.string,
    src: PropTypes.string,
};

export default LazyImage;