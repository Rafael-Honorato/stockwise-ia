export interface DashboardMetrics {
  stock: { totalCostPrice: number; totalSalesPrice: number; quantity: number };
  sales: { value: number; quantity: number };
  estimatedProfit: number;
  coveragePercentage: number;
  statusColor: string;
}
