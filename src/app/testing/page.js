import React from 'react'
import WorkExperiencePage from '@/components/self-made/workexperience'
import BlurFade from '@/components/magic-ui/blur-fade'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade >
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <WorkExperiencePage />
        </div>
    </div>
  )
}

export default page
