'use client'
import { Icon } from "@iconify/react"

const ToTop = () => {

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {
        <div className={`fixed bottom-8 right-8 z-50 max-sm:hidden`}>
          <button
            onClick={toTop} title='To Top'
            className='bg-primary-purple text-white/80 hover:opacity-80 rounded-full w-10 h-10 flex items-center justify-center'
          >
            <Icon icon='mdi:rocket-launch-outline' className='-rotate-45' width={22} height={22} />
          </button>
        </div>
      }
    </>
  )
}

export default ToTop
