'use client'
// Importing necessary modules and components
import { Icon } from "@iconify/react"

// Define the ToTop component
const ToTop = () => {

  // Function to scroll to the top of the page smoothly
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {
        // Render a button that triggers the toTop function when clicked
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