import React from 'react'

const Course = ({ course, refreshCourses }) => {
    const markCoursePurchased = async () => {
        try {
            await fetch('https://airtable-proxy-worker.signalnerves.workers.dev/courses', {
                method: 'PUT',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(
                    {
                        "records": [
                          {
                            "id": course.id,
                            "fields": {
                              "name": course.name,
                              "link": course.link,
                              "tags": course.tags,
                              "purchased" : true
                            }
                          }
                        ]
                      }
                ),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async (e) => {
        const id  = course.id
        try {
            await fetch(`https://airtable-proxy-worker.signalnerves.workers.dev/courses?records[]=${id}`, {
                method: 'DELETE',
                headers: {"Content-Type" : "application/json"},
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags && course.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!course.purchased && (
                <button className="btn btn-sm btn-primary" onClick={markCoursePurchased}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>Delete</button>
        </div>
    )
}
export default Course
