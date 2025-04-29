import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectTimeLineDetails} = props
  /* const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimeLineDetails */
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectTimeLineDetails
  return (
    <div className="project-timeline-container">
      <img alt="project-img" className="project-image" src={imageUrl} />
      <div className="project-title-and-duration-div">
        <h1 className="project-title-text">{projectTitle}</h1>
        <div className="duration-icon-and-text-div">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description-text">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
