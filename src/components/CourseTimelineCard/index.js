import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props

  /* const {
  categoryId,
  title,
  courseTitle,
  description,
  duration,
  tagsList
  } = courseTimelineDetails */

  const {courseTitle, description, duration, tagsList} = courseTimelineDetails
  // console.log(courseTimelineDetails)
  return (
    <div className="course-timeline-crad-container">
      <div className="title-and-duration-div">
        <h1 className="course-title-text">{courseTitle}</h1>
        <div className="icon-and-duration-div">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description-text">{description}</p>
      <div className="course-tag-name-div">
        {tagsList.map(eachItem => (
            <p key={eachItem.id} className="course-tags-text">
              {eachItem.name}
            </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
