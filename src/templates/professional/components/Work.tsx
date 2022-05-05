import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ExperienceItem } from 'src/stores/experience.interface';

export default function Work({ work }: { work: ExperienceItem[] }) {
  return (
    <div>
      {work.map((company, index) => (
        <Timeline key={`${company.name}-${index}`} className="p-0 flex-initial text-[1em]">
          <TimelineItem className="before:hidden text-[1em]">
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              {index !== work.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceHeader work={company} />
              <p className="text-xs">{company.summary}</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
}

function ExperienceHeader({ work }: { work: ExperienceItem }) {
  return (
    <>
      <div className="flex justify-between items-end">
        <div className="font-medium">{work.name}</div>
        <div className="italic text-xs">
          {work.startDate} - {work.endDate}
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="font-medium text-xs">{work.position}</div>
        <div className="italic text-xs">{work.startDate}</div>
      </div>
    </>
  );
}
