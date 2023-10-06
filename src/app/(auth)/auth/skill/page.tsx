import clsx from 'clsx'
import SkillStepContent from '@/components/authFlow/SkillStep'

const SkillAuthPage = () => {
  return (
    <div
      className={clsx(
        'mx-auto h-full max-h-screen min-h-full md:max-w-11/12 lg:max-w-screen-md',
        'flex flex-col',
      )}
    >
      <SkillStepContent />
    </div>
  )
}

export default SkillAuthPage
