import DailyTasks from "../components/dashboard/DailyTasks";
import MiniCalendar from "../components/dashboard/MiniCalendar";
import RecentProjects from "../components/dashboard/RecentProjects";
import StatsOverview from "../components/dashboard/StatsOverview";
import TaskList from "../components/dashboard/TaskList";
import WelcomeSection from "../components/dashboard/WelcomeSection";

function Dashboard() {
  return (
    <main className="dashboard">
      <WelcomeSection />

      <StatsOverview />

      <div className="dashboard-grid">
        <DailyTasks />
        <MiniCalendar />
        <TaskList />
        <RecentProjects />
      </div>
    </main>
  );
}

export default Dashboard;
