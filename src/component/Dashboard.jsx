
import DashboardStartGrid from "./DashboardStartGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfilePieChart from './BuyerProfilePieChart';
export default function Dashboard(){
   return( 
    <div className="flex gap-4 flex-col">
    <DashboardStartGrid/>
    <div className="flex flex-row gap-4 w-full"> 
    <TransactionChart/>
    <BuyerProfilePieChart/>
    </div>
    </div>
   )
}
