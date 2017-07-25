/** create course action */
export function createCourse(course) {
    return { type: 'CREATE_COURSE', course: course };
}