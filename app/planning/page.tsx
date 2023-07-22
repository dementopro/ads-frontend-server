'use client'
import ListPlanning from '@/app/planning/ListPlanning'
import MyPlanning from '@/app/planning/MyPlanning'
import { SUCCESS_CODE } from '@/data/constant'
import AdminLayout from '@/layout/admin'
import { IPlan, IPlanningHistory, IPlanningObj } from '@/types/planning'
import { message, Spin } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import ReactGA from "react-ga4"

ReactGA.initialize("G-NQ34MWCQDB");
ReactGA.send({ hitType: "pageview", page: "/planning", title: "Planning - AdsGency AI" });

async function getHistory(): Promise<IPlanningObj[]>;
async function getHistory(id: number): Promise<IPlanningObj>;
async function getHistory(id?: number) {
  const res = await fetch(`/api/planning/history?id=${id}`, {
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IPlanningHistory = await res.json()
  if (data.status === SUCCESS_CODE) {
    if (id) {
      return data.planning
    }
    return data.planning_list
  } else {
    console.log('data', data)
    return []
  }
}

const PlanningPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [plan, setPlan] = useState<IPlan | null>(null)
  const [planList, setPlanList] = useState<IPlanningObj[] | null>(null)
  const [planId, setPlanId] = useState<number | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value)
  }

  useEffect(() => {
    updateList()
  }, [])

  useEffect(() => {
    if (planId) {
      messageApi.loading('Loading plan...', 1)
      getHistory(planId).then((res) => {
        setPlan(res.plan)
        messageApi.success('Load plan successfully')
      })
    }
  }, [planId])


  async function updateList() {
    setIsLoading(true)
    const res = await getHistory();
    setPlanList(res || [])
    setIsLoading(false)
  }


  async function onGenerate() {
    try {
      setIsGenerating(true)
      messageApi.loading('Generating plan...', 1)
      const res = await fetch(`/api/planning/generate?prompt=${prompt}`, {
        method: 'GET',
      })
      const data = await res.json()
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          console.log('data', data)
          messageApi.success(data.msg || 'Generate successfully')
          setPlan(data.planning_obj[0].plan)
          if (!planList) {
            setPlanList([data.planning_obj[0]])
          } else {
            setPlanList([data.planning_obj[0], ...planList.slice(0, 4)])
          }
        } else {
          console.log('data', data)
          messageApi.error(data.msg || 'Generate failed')
        }
      } else {
        console.log('error: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <AdminLayout>
      {contextHolder}
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Planning
        </h1>
        <Spin spinning={isGenerating} wrapperClassName='text-base'>
          <div className='border rounded-lg border-[#3A3A3A] bg-[#1B1C21] px-4 py-[18px] flex flex-col gap-[10px] justify-between'>
            <input type='text' value={prompt} onChange={handleChange} className='bg-transparent outline-none text-xl resize-none h-[30px]' placeholder='What are you selling?' />
            <div className='flex flex-wrap items-center justify-end gap-5'>
              <button onClick={onGenerate} className='bg-primary-purple hover:opacity-80 flex items-center justify-center w-[152px] h-[44px] rounded-lg truncate'>
                {isGenerating ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>
        </Spin>
        <ListPlanning planList={planList} setPlanId={setPlanId} updateList={updateList} />
        <MyPlanning plan={plan} />
      </section>
    </AdminLayout>
  )
}

export default PlanningPage
