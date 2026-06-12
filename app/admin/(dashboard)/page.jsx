import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  // Get active user info
  const { data: { user } } = await supabase.auth.getUser();

  // 1. Count active orders
  const { count: activeOrdersCount } = await supabase
    .from("orders")
    .select("id", { count: "exact", head: true })
    .not("status", "eq", "paid")
    .not("status", "eq", "cancelled");

  // 2. Fetch finance data for current month (Revenue, Expenses)
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
  
  const { data: financeData } = await supabase
    .from("finance")
    .select("type, amount")
    .gte("transaction_date", startOfMonth)
    .lte("transaction_date", endOfMonth);

  const revenue = financeData?.filter(f => f.type === 'income').reduce((sum, item) => sum + Number(item.amount), 0) || 0;
  const expense = financeData?.filter(f => f.type === 'expense').reduce((sum, item) => sum + Number(item.amount), 0) || 0;
  const netProfit = revenue - expense;

  // 3. Fetch approaching deadlines (orders where deadline is within 14 days)
  const todayStr = now.toISOString().split('T')[0];
  const fourteenDaysLater = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  const fourteenDaysLaterStr = fourteenDaysLater.toISOString().split('T')[0];

  const { data: approachingDeadlines } = await supabase
    .from("orders")
    .select("id, project_name, client_name, deadline, status")
    .gte("deadline", todayStr)
    .lte("deadline", fourteenDaysLaterStr)
    .not("status", "eq", "paid")
    .not("status", "eq", "cancelled")
    .order("deadline", { ascending: true });

  // 4. Fetch reminders (catch error if table doesn't exist)
  let initialReminders = [];
  let remindersTableExists = true;
  
  try {
    const { data: reminders, error: remindersError } = await supabase
      .from("reminders")
      .select(`
        *,
        order:linked_order_id (id, project_name),
        plan:linked_plan_id (id, title)
      `)
      .eq("is_done", false);

    if (remindersError) {
      console.warn("Reminders table fetch warning (expected if table not created):", remindersError.message);
      remindersTableExists = false;
    } else {
      initialReminders = reminders || [];
    }
  } catch (err) {
    console.warn("Reminders table catch warning:", err.message);
    remindersTableExists = false;
  }

  // 5. Fetch dropdown items for link fields
  const { data: dropdownOrders } = await supabase
    .from("orders")
    .select("id, project_name")
    .not("status", "eq", "paid")
    .not("status", "eq", "cancelled");

  const { data: dropdownPlans } = await supabase
    .from("plans")
    .select("id, title")
    .not("status", "eq", "cancelled")
    .not("status", "eq", "published");

  return (
    <DashboardClient
      user={user}
      activeOrdersCount={activeOrdersCount || 0}
      revenue={revenue}
      expense={expense}
      netProfit={netProfit}
      approachingDeadlines={approachingDeadlines || []}
      initialReminders={initialReminders}
      remindersTableExists={remindersTableExists}
      dropdownOrders={dropdownOrders || []}
      dropdownPlans={dropdownPlans || []}
    />
  );
}

