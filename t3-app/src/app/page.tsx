import { unstable_noStore as noStore } from "next/cache";
import { api } from "@0/trpc/server";
import Link from "next/link";

export default async function Home() {
  noStore();
  const jobs = await api.crackeddevs.getJobs.query();

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Jobs</h1>
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="border border-gray-300 p-5 m-5 rounded-md"
        >
          <h2 className="text-2xl mb-2">{job.title}</h2>
          <p className="mb-2">{job.description}</p>
          <p className="mb-2">Company: {job.company}</p>
          <p className="mb-2">Technologies: {job.technologies.join(', ')}</p>
          <p className="mb-2">Main Technology: {job.main_technology}</p>
          <p className="mb-2">Job Type: {job.job_type}</p>
          <p className="mb-2">Salary: {job.max_payment_usd} USD</p>
          <p className="mb-2">Location: {job.location_iso || 'Remote'}</p>
          <p className="mb-2">Applications: {job.applications}</p>
          <p className="mb-2">Views: {job.views}</p>
          <Link href={job.apply_url} className="text-blue-500 hover:underline">Apply Here</Link>
        </div>
      ))}
    </div>
  );
}