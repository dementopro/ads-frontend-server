import Empty from "@/components/Empty"
import { SUCCESS_CODE } from "@/data/constant"
import { IPlanningObj } from "@/types/planning"
import { formatDate, getToday } from "@/utils"
import { message } from "antd"
import { useRouter } from "next/navigation"

type Props = {
  planList: IPlanningObj[] | null,
  setPlanId: (id: number) => void
}

const ListPlanning = ({ planList, setPlanId }: Props) => {
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();

  async function onSave(plan: IPlanningObj) {
    if (plan.id) {
      setPlanId(plan.id)
      return
    }
    try {
      messageApi.loading('Saving plan...')
      const res = await fetch(`/api/planning/save`, {
        method: 'POST',
        body: JSON.stringify(plan),
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          console.log('data', data)
          messageApi.success(data.msg || 'Saved successfully')
          router.refresh()
        } else {
          messageApi.error(data.msg || 'Saved failed')
        }
      } else {
        console.log('error: ', data)
      }
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {contextHolder}
      <div className='bg-[#1B1C21] rounded-lg px-10 py-[30px] flex flex-col gap-5 mt-5'>
        <div className='flex justify-between text-[#848484]'>
          <div className='w-[100px]'>Date</div>
          <div>Requirement</div>
          <div className='w-[100px] text-center'>Save/Load</div>
        </div>
        <div className='flex flex-col gap-[10px] text-primary-gray'>
          {!planList && <Empty text="Loading..." />}
          {planList?.length === 0 && <Empty />}
          {
            !!planList && planList.map((plan, index) => (
              <div key={index} className='flex justify-between'>
                <div className='w-100px'>
                  {plan.date ? formatDate(plan.date) : getToday()}
                </div>
                <div>{plan.prompt}</div>
                <button onClick={() => onSave(plan)} className='text-white bg-primary-purple hover:opacity-80 cursor-pointer rounded-lg w-[96px] h-[28px]'>
                  {plan.id ? 'load' : 'save'}
                </button>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default ListPlanning
