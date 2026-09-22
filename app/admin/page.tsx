import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageCircle } from "lucide-react";

export default function AdminPage() {
  return (
    <div>
      <div className={`flex gap-5`}>
        <div className={`w-1/3 shadow-sm p-4 rounded bg-white border`}>
          <div className={`flex `}>
            <div className={`w-9/12`}>
              <h3 className={`uppercase font-medium font-[18px] opacity-75`}>
                Total Message Last 7 Days
              </h3>
              <p className={`font-medium font-[18px]`}>200</p>
            </div>
            <div className={`w-3/12 flex justify-end`}>
              <MessageCircle />
            </div>
          </div>

          <div className={`mt-4`}>
            <p className={`text-black font-[16px] font-medium`}>
              <span className={`text-green-500`}>+10%</span> vs last week
            </p>
          </div>
        </div>
        <div className={`w-1/3 shadow-sm p-4 rounded bg-white border`}>
          <div className={`flex `}>
            <div className={`w-9/12`}>
              <h3 className={`uppercase font-medium font-[18px] opacity-75`}>
                Total Message Last 7 Days
              </h3>
              <p className={`font-medium font-[18px]`}>200</p>
            </div>
            <div className={`w-3/12 flex justify-end`}>
              <MessageCircle />
            </div>
          </div>

          <div className={`mt-4`}>
            <p className={`text-black font-[16px] font-medium`}>
              <span className={`text-green-500`}>+10%</span> vs last week
            </p>
          </div>
        </div>
        <div className={`w-1/3 shadow-sm p-4 rounded bg-white border`}>
          <div className={`flex `}>
            <div className={`w-9/12`}>
              <h3 className={`uppercase font-medium font-[18px] opacity-75`}>
                Total Message Last 7 Days
              </h3>
              <p className={`font-medium font-[18px]`}>200</p>
            </div>
            <div className={`w-3/12 flex justify-end`}>
              <MessageCircle />
            </div>
          </div>

          <div className={`mt-4`}>
            <p className={`text-black font-[16px] font-medium`}>
              <span className={`text-green-500`}>+10%</span> vs last week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
