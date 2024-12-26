import { Box, Typography } from '@mui/material';
import { TitleWithTimeline } from 'src/components/TitleWithTimeline';

export const LeftSection = () => {
  return (
    <Box>
      <Typography variant="h6">About Me</Typography>
      <Typography variant="body1">
        Motivated software engineer with experience in web technologies,
        focusing on frontend development using React and TypeScript. I enjoy
        building user-friendly applications and am always eager to learn new
        technologies and improve my skills. A proactive problem-solver with
        excellent communication skills, seeking opportunities to contribute to
        innovative projects. Open to relocation and excited to grow as part of a
        dynamic team.
      </Typography>
      <Typography variant="h6">Experience</Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="Full-Stack Software Engineer at trivago N.V. Düsseldorf, Germany"
          time="April 2020 - Present"
        />
        <ul>
          <li>
            Developed and maintained user-facing features using{' '}
            <strong>TypeScript</strong>,<strong>React</strong>, and{' '}
            <strong>Material-UI</strong>.
          </li>
          <li>
            Optimized build processes and application performance leveraging
            tools like <strong>Vite</strong>.
          </li>
          <li>
            Wrote unit and integration tests using <strong>Jest</strong> and{' '}
            <strong>vitest</strong> to ensure code quality and stability.
          </li>
          <li>
            Integrated <strong>GraphQL</strong> to interact with a mesh
            connecting multiple backend services, ensuring seamless data flow.
          </li>
          <li>
            Occasionally worked with <strong>MySQL</strong> for specific tasks,
            focusing on data consistency and query optimization.
          </li>
          <li>
            Collaborated with cross-functional teams in an agile environment,
            ensuring smooth project delivery.
          </li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="Advertiser Quality Assurance at trivago N.V. Düsseldorf, Germany"
          time="April 2020 - November 2021"
        />
        <ul>
          <li>
            Maintain and test selectors and functions with the usage of internal
            tools, web technologies and basic python programming knowledge
          </li>
          <li>
            Investigate and document issues such as price discrepancies to
            ensure price quality
          </li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="Web Programming at the Medicine Faculty in Duisburg-Essen University,
          Germany"
          time="January 2019 - May 2020"
        />
        <ul>
          <li>Maintain the code and debug the issues in PHP</li>
          <li>
            Create an interactive system that allows user to reserve different
            rooms at the University.
          </li>
          <li>Build and implement frontend with Javascript, HTML and CSS.</li>
        </ul>
      </Typography>
      <Typography variant="h6">Education</Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="BSc Computer Software Engineering at Duisburg-Essen University,
          Germany"
          time="October 2016 - September 2021"
        />
        <ul>
          <li>
            Thesis: “Puppet Theater: A Scenario Creator to Examine Social
            Setting”
          </li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="German Studies at L.A.N.E.S national education school in Duisburg,
          Germany"
          time="May 2016 - August 2016"
        />
      </Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="German Studies at Fremdsdprachenforum a language school in Cologne,
          Germany"
          time="November 2014 - August 2015"
        />
      </Typography>
      <Typography variant="body1">
        <TitleWithTimeline
          jobTitle="High School at Yani in Kfar Yassif, Israel"
          time="September 2011 - June 2014"
        />
      </Typography>
    </Box>
  );
};
