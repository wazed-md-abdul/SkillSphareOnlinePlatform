import React from 'react';
import CourseCard from './CourseCardForAll';

const CourseCardSection = ({ course }) => {
    return (
        <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                   {
                    course.map((course, index) => (
                    <CourseCard key={course.id} course={course} />
                    ))
                   }


                </div>
        
        </>
    );
};

export default CourseCardSection;