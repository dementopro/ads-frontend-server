import { IPlan } from "@/types/planning"

type Props = {
  planList: IPlan[]
}

const ListPlanning = ({ planList }: Props) => {

  async function onSave(plan: IPlan) {
    try {
      console.log('plan', plan)
      const res = await fetch(`/api/planning/save`, {
        method: 'POST',
        body: JSON.stringify(plan),
      })
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='bg-[#1B1C21] rounded-lg px-10 py-[30px] flex flex-col gap-5 mt-5'>
      <div className='flex justify-between text-[#848484]'>
        <div className='w-[100px]'>Date</div>
        <div>Requirement</div>
        <div className='w-[100px] text-center'>Save/Load</div>
      </div>
      <div className='flex flex-col gap-[10px] text-primary-gray'>
        {
          planList.map((plan, index) => (
            <div key={index} className='flex justify-between'>
              <div className='w-100px'>{plan.date || 'Today'}</div>
              <div>{plan.prompt}</div>
              <button onClick={() => onSave(plan)} className='text-white bg-primary-purple hover:opacity-80 cursor-pointer rounded-lg w-[96px] h-[28px]'>
                {plan.status || 'save'}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListPlanning
