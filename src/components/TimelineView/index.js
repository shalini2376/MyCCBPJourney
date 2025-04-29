import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="timelineview-container">
      <h1 className="my-journey-heading">MY JOURNEY OF <br/> CCBP 4.0</h1>
      <Chrono
        scrollable={{scrollbar: true}}
        items={timelineItemsList.map(item => ({title: item.title}))}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'black',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: 'black',
          titleColor: 'black',
        }}
      >
        {timelineItemsList.map(eachItem => (
          <div key={eachItem.id}>
            {eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard courseTimelineDetails={eachItem} />
            ) : (
              <ProjectTimelineCard projectTimeLineDetails={eachItem} />
            )}
          </div>
        ))}
      </Chrono>
    </div>
  )
}
export default TimelineView
