import Empty from "@/components/Empty";
import { SUCCESS_CODE } from "@/data/constant";
import { IPlanningObj } from "@/types/planning";
import { formatDate, getToday } from "@/utils";
import { message } from "antd";
import { useRouter } from "next/navigation";

// Define the props for the component
type Props = {
  planList: IPlanningObj[] | null; // List of planning objects or null
  setPlanId: (id: number) => void; // Function to set the plan ID
  updateList: () => void; // Function to update the list
};

// Define the ListPlanning component
const ListPlanning = ({ planList, setPlanId, updateList }: Props) => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  // Function to save a plan
  async function onSave(plan: IPlanningObj) {
    // If the plan already has an ID, set the plan ID and return
    if (plan.id) {
      setPlanId(plan.id);
      return;
    }
    try {
      messageApi.loading('Saving plan...'); // Display a loading message
      const res = await fetch(`/api/planning/save`, {
        method: 'POST',
        body: JSON.stringify(plan),
      });
      const data = await res.json();
      if (res.ok) {
        if (data.status === SUCCESS_CODE) {
          console.log('data', data);
          messageApi.success(data.msg || 'Saved successfully'); // Show success message
          router.refresh(); // Refresh the page
          updateList(); // Update the list of plans
        } else {
          messageApi.error(data.msg || 'Saved failed'); // Show error message
        }
      } else {
        console.log('error: ', data);
      }
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  }

  // Render the component
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
          {planList && planList.map((plan, index) => (
            <div key={index} className='flex justify-between'>
              <div className='w-100px'>
                {plan.date ? formatDate(plan.date) : getToday()}
              </div>
              <div>{plan.prompt}</div>
              <button
                onClick={() => onSave(plan)}
                className='text-white bg-primary-purple hover:opacity-80 cursor-pointer rounded-lg w-[96px] h-[28px]'>
                {plan.id ? 'load' : 'save'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPlanning;