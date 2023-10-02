'use client'
import { jobs } from '@/data/jobs'
import { IJob } from '@/types/jobs'
import { Icon } from '@iconify/react'
import { useState } from 'react'

type JobCardProps = {
  job: IJob
}

const JobCard = ({ job }: JobCardProps) => {

  const [isExpanded, setIsExpanded] = useState(false)



  return (
    <div
      className={`
        relative flex flex-col items-start justify-between gap-8 rounded-lg max-w-[1000px] p-6 border-2 border-black hover:border-primary-purple transition duration-300 ease-in-out
      `}
      style={{
        background: 'linear-gradient(180deg, #251F32ee 0%, #1B1C21ee 100%)'
      }}
    >
      <div className='flex flex-col sm:flex-row items-start justify-between gap-8 w-full'>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='font-semibold text-lg'>
            {job.title}
          </div>
          <p className='text-primary-gray text-sm'>
            {job.memo}
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='flex gap-1 items-center justify-center rounded-full text-base px-4 py-1 border border-primary-purple text-primary-purple'>
                <Icon icon='mdi:map-marker' />
                <span>100% remote</span>
              </div>
              <div className='flex gap-1 items-center justify-center rounded-full text-base px-4 py-1 border border-primary-purple text-primary-purple'>
                <Icon icon='mdi:clock-time-four-outline' />
                <span>Full-time</span>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='flex items-center justify-center gap-1 cursor-pointer hover:opacity-80'>
              <span>{isExpanded ? 'Hide' : 'Show'} details</span>
              <Icon icon='mdi:chevron-down' width={20} height={20}
                className={`transition duration-300 ease-in-out transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
        <a
          href="mailto:contactus@adsgency.ai"
          className='flex items-center justify-center gap-1 hover:opacity-80 text-base truncate text-white'>
          <span>Apply</span>
          <Icon icon='mdi:arrow-top-right' />
        </a>
      </div>
      {
        isExpanded && (
          <div className='w-full flex flex-col gap-3 transition-all duration-300'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg font-semibold'>
                Position Overview:
              </h3>
              <p className='text-sm text-white/70'>
                {job.overview}
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg font-semibold'>
                Responsibilities:
              </h3>
              <div className='text-sm text-white/70 flex flex-col gap-2'>
                {
                  job.responsibilities.map((responsibility, index) => (
                    <div key={index} className='flex gap-2'>
                      <span>{index + 1}. {responsibility}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg font-semibold'>
                Education and Experience:
              </h3>
              <p className='text-sm text-white/70'>
                {job.requirements}
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-lg font-semibold'>
                Technical Skills:
              </h3>
              <div className='text-sm text-white/70 flex flex-col gap-2'>
                {
                  job.skills.map((skill, index) => (
                    <div key={index} className='flex gap-2'>
                      <span>{index + 1}. {skill}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}


const JobList = () => {
  return (
    <>
      <h1 className='text-center text-2xl my-8 font-mono'>
        - Job List -
      </h1>
      <div className='flex flex-col items-center gap-8'>
        {
          jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        }
      </div>
    </>
  )
}

export default JobList
