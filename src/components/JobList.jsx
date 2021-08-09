import Job from "./Job"

const JobList = ({ jobs, jobSelected }) => (
    <div>
        {jobs.map((job) => 
            <Job key={job.id} job={job} jobSelected={jobSelected} />
        )}
    </div>
)

export default JobList