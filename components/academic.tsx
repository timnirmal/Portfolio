import {skeleton} from '../helpers/utils';
import {Fragment} from 'react';
import PropTypes from 'prop-types';

const ListItem = ({time, degree, institution, description}) => (
    <li className="mb-5 ml-4">
        <div
            className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
            style={{left: '-4.5px'}}
        ></div>
        <div className="my-0.5 text-xs">{time}</div>
        <h3 className="font-semibold">{degree}</h3>
        <div className="mb-3 font-normal">{institution}</div>
        <div className="text-xs">{description}</div>
    </li>

);

const Academic = ({loading, academic}) => {
    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 2; index++) {
            array.push(
                <ListItem
                    key={index}
                    time={skeleton({
                        width: 'w-5/12',
                        height: 'h-4',
                    })}
                    degree={skeleton({
                        width: 'w-6/12',
                        height: 'h-4',
                        className: 'my-1.5',
                    })}
                    institution={skeleton({width: 'w-6/12', height: 'h-3'})}
                />
            );
        }

        return array;
    };

    return (
        <>
            {academic?.length !== 0 && (
                <div className="card shadow-lg compact bg-base-100">
                    <div className="card-body">
                        <div className="mx-3">
                            <h5 className="card-title">
                                {loading ? (
                                    skeleton({width: 'w-32', height: 'h-8'})
                                ) : (
                                    <span className="text-base-content opacity-70">
                    Academic
                  </span>
                                )}
                            </h5>
                        </div>
                        <div className="text-base-content text-opacity-60">
                            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                                {loading ? (
                                    renderSkeleton()
                                ) : (
                                    <Fragment>
                                        {academic.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                time={`${item.from} - ${item.to}`}
                                                degree={item.degree}
                                                institution={item.institution}
                                                description={item.description}
                                            />
                                        ))}
                                    </Fragment>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

Academic.propTypes = {
    loading: PropTypes.bool.isRequired,
    academic: PropTypes.array.isRequired,
};

ListItem.propTypes = {
    time: PropTypes.node,
    degree: PropTypes.node,
    institution: PropTypes.node,
    description: PropTypes.node,
};

export default Academic;

// school: "University of Sri Jayewardenepura",
//             degree: "BSc ENGINEERING (Hons)",
//             date: "December 2019 – Present",
//             description: "Minor in Data Management",