/* EJ1.1
 import React from 'react';

const Content = ({ partExercises }) => {
    return <p>{partExercises.part}:{partExercises.exercises}</p>;
};

export default Content; */


// EJ1.2
import React from 'react';
import Parts from './Parts';

const Content = ({ partExercises }) => {
    return (
        <>
            <Parts partExercises={partExercises[0]} />
            <Parts partExercises={partExercises[1]} />
            <Parts partExercises={partExercises[2]} />
        </>
    )
};

export default Content;




